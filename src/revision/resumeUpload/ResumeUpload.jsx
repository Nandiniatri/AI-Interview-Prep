// import { useState } from "react";
// import "./ResumeUpload.css";

// const ResumeUpload = () => {
//     const [resumeFile, setResumeFile] = useState(null);

//     const handleResumeUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setResumeFile(file);
//         }
//     }

//     return (
//         <>
//             <input type="file" onChange={handleResumeUpload} accept="application/pdf" />

//             <div className="main-div-resumes-questions">
//                 <div >
//                     {resumeFile && (
//                         <div>
//                             <h3>{resumeFile.name}</h3>

//                         </div>
//                     )}
//                 </div>

//             </div>

//         </>
//     )
// }

// export default ResumeUpload;





import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

export default function ResumeUpload() {
    const [file, setFile] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Extract text from PDF
    const extractTextFromPDF = async (pdfFile) => {
        const arrayBuffer = await pdfFile.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        let text = "";

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const strings = content.items.map((item) => item.str);
            text += strings.join(" ") + "\n";
        }
        return text;
    };

    const generateQuestions = async () => {
        if (!file) return alert("Please upload a resume first!");
        setLoading(true);

        try {
            // Extract resume text
            const resumeText = await extractTextFromPDF(file);
            const prompt = `Create interview questions based on this resume:\n${resumeText}`;
            console.log(prompt);
            

            const res = await fetch(
                "https://api-inference.huggingface.co/models/t5-small",
                {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_HF_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ inputs: prompt }),
                }
            );

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`HTTP ${res.status}: ${text}`);
            }

            const data = await res.json();
            setQuestions(data[0]?.generated_text ? [data[0].generated_text] : []);
        } catch (err) {
            console.error("Error generating questions:", err);
            alert("Failed to generate questions. Check console.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Resume Upload & Auto Questions</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={generateQuestions} disabled={loading || !file}>
                {loading ? "Generating..." : "Generate Questions"}
            </button>

            <h3>Questions:</h3>
            <ul>
                {questions.map((q, i) => (
                    <li key={i}>{q}</li>
                ))}
            </ul>
        </div>
    );
}

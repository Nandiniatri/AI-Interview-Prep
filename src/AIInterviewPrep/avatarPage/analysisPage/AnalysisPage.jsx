import { useState } from "react";
import "./AnalysisPage.css";
import Header from "../../homePage/header/Header";

export default function AnalysisPage() {
    const [selected, setSelected] = useState("Q1");

    const questions = {
        Q1: "Out of all the candidates, why do you think we should hire you?",
        Q2: "What are your strengths and weaknesses?",
        Q3: "Where do you see yourself in 5 years?",
    };

    return (
        <>
        <Header />
            <div className="interview-container">
                {/* Sidebar */}
                <div className="sidebar">
                    <ul>
                        {Object.keys(questions).map((q) => (
                            <li
                                key={q}
                                className={selected === q ? "active" : ""}
                                onClick={() => setSelected(q)}
                            >
                                {q}
                            </li>
                        ))}
                    </ul>
                </div>

                
                <div className="question-area">
                    <p>Q: {questions[selected]}</p>
                </div>

                
                <div className="video-area">
                    <div className="video-box">
                        <video controls src="your-video.mp4"></video>
                    </div>
                    <div className="buttons">
                        <button className="download">Download</button>
                        <button className="delete">Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

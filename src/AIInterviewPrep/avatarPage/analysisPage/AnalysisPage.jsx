// import { useState } from "react";
// import "./AnalysisPage.css";
// import Header from "../../homePage/header/Header";
// import { useDataContext } from "../../../contextApi/DatasContectApi";

// export default function AnalysisPage() {
//     const [selected, setSelected] = useState(0);
//     const { recordedVideo, questions, setRecordedVideo } = useDataContext();

//     return (
//         <>
//             <Header />
//             <div className="interview-container">
//                 <div className="sidebar">
//                     <ul>
//                         {questions.map((q, index) => (
//                             <li
//                                 key={q.id}
//                                 className={selected === index ? "active" : ""}
//                                 onClick={() => setSelected(index)}
//                             >
//                                 {index + 1}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="question-area">
//                     <p>Q: {questions[selected]?.que}</p>
//                 </div>

//                 <div className="video-area">
//                     <div className="video-box">
//                         {recordedVideo ? (
//                             <video controls src={recordedVideo}></video>
//                         ) : (
//                             <p>No Recording Found</p>
//                         )}
//                     </div>

//                     <div className="buttons">
//                         {recordedVideo && (
//                             <>
//                                 <a
//                                     href={recordedVideo}
//                                     download="recording.webm"
//                                     className="download"
//                                 >
//                                     Download
//                                 </a>
//                                 <button
//                                     className="delete"
//                                     onClick={() => setRecordedVideo(null)}
//                                 >
//                                     Delete
//                                 </button>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }














// import { useState } from "react";
// import "./AnalysisPage.css";
// import Header from "../../homePage/header/Header";
// import { useDataContext } from "../../../contextApi/DatasContectApi";
// import Button from "../../../componets/Button";

// export default function AnalysisPage() {
//     const [selected, setSelected] = useState(0);
//     const { recordedVideo, questions, setRecordedVideo } = useDataContext();

//     const handleShare = async () => {
//         if (!recordedVideo) return;

//         if (navigator.share) {
//             // Modern Share API (Mobile & supported browsers)
//             try {
//                 await navigator.share({
//                     title: "My Recorded Video",
//                     text: "Check out my interview recording!",
//                     url: recordedVideo,
//                 });
//                 alert("Video shared successfully!");
//             } catch (err) {
//                 console.error("Share failed:", err);
//             }
//         } else {
//             // Fallback for desktop / unsupported browsers
//             try {
//                 await navigator.clipboard.writeText(recordedVideo);
//                 alert("Video URL copied to clipboard!");
//             } catch (err) {
//                 console.error("Failed to copy: ", err);
//             }
//         }
//     };

//     return (
//         <>
//             <Header />
//             <div className="interview-container">
//                 <div className="sidebar">
//                     <ul>
//                         {questions.map((q, index) => (
//                             <li
//                                 key={q.id}
//                                 className={selected === index ? "active" : ""}
//                                 onClick={() => setSelected(index)}
//                             >
//                                 {index + 1}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 <div className="question-area">
//                     <p>Q: {questions[selected]?.que}</p>
//                 </div>

//                 <div className="video-area">
//                     <div className="video-box">
//                         {recordedVideo ? (
//                             <video controls src={recordedVideo}></video>
//                         ) : (
//                             <p>No Recording Found</p>
//                         )}
//                     </div>

//                     <div className="buttons">
//                         {recordedVideo && (
//                             <>
//                                 <Button className="record-download-btn">
//                                     <a
//                                         href={recordedVideo}
//                                         download="recording.webm"
//                                         className="download"
//                                     >
//                                         Download
//                                     </a>
//                                 </Button>
//                                 <Button
//                                     className="delete"
//                                     onClick={() => setRecordedVideo(null)}
//                                 >
//                                     Delete
//                                 </Button>
//                                 <Button
//                                     className="share"
//                                     onClick={handleShare}
//                                 >
//                                     Share
//                                 </Button>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }





// AvatarModal.jsx
import React, { useState, useRef, useEffect, useContext } from "react";
import { useDataContext } from "../../../contextApi/DatasContectApi";


const AvatarModal = () => {
    // const { recordedVideos, setRecordedVideos } = useDataContext();
    const { recordedVideo, questions, setRecordedVideo } = useDataContext();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const chunks = useRef([]);
    const mediaRecorder = useRef(null);
    const videoRef = useRef(null);

    // Start recording function
    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        videoRef.current.srcObject = stream;

        chunks.current = [];
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = (e) => chunks.current.push(e.data);

        mediaRecorder.current.start();
        setIsRecording(true);
    };

    // Stop and save recording for current question
    const stopAndSaveRecording = (index) => {
        if (!mediaRecorder.current) return;

        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
            const blob = new Blob(chunks.current, { type: "video/webm" });
            const url = URL.createObjectURL(blob);

            setRecordedVideo((prev) => {
                const updated = [...prev];
                updated[index] = url;
                return updated;
            });

            // Stop all tracks to release camera & mic
            videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
            setIsRecording(false);
        };
    };

    // Handle next question
    const handleNext = () => {
        stopAndSaveRecording(currentIndex);
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Auto start recording when question changes
    useEffect(() => {
        startRecording();
        // Cleanup on unmount
        return () => {
            if (mediaRecorder.current && mediaRecorder.current.state !== "inactive") {
                mediaRecorder.current.stop();
            }
            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
            }
        };
    }, [currentIndex]);

    return (
        <div className="avatar-modal">
            <h2>{questions[currentIndex]}</h2>

            <video ref={videoRef} autoPlay muted className="video-preview"></video>

            <div className="controls">
                <button onClick={handleNext} disabled={!isRecording}>
                    Next Question
                </button>
            </div>
        </div>
    );
};

export default AvatarModal;

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














import { useState } from "react";
import "./AnalysisPage.css";
import Header from "../../homePage/header/Header";
import { useDataContext } from "../../../contextApi/DatasContectApi";
import Button from "../../../componets/Button";

export default function AnalysisPage() {
    const [selected, setSelected] = useState(0);
    const { recordedVideo, questions, setRecordedVideo } = useDataContext();

    const handleShare = async () => {
        if (!recordedVideo) return;

        if (navigator.share) {
            // Modern Share API (Mobile & supported browsers)
            try {
                await navigator.share({
                    title: "My Recorded Video",
                    text: "Check out my interview recording!",
                    url: recordedVideo,
                });
                alert("Video shared successfully!");
            } catch (err) {
                console.error("Share failed:", err);
            }
        } else {
            // Fallback for desktop / unsupported browsers
            try {
                await navigator.clipboard.writeText(recordedVideo);
                alert("Video URL copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy: ", err);
            }
        }
    };

    return (
        <>
            <Header />
            <div className="interview-container">
                <div className="sidebar">
                    <ul>
                        {questions.map((q, index) => (
                            <li
                                key={q.id}
                                className={selected === index ? "active" : ""}
                                onClick={() => setSelected(index)}
                            >
                                {index + 1}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="question-area">
                    <p>Q: {questions[selected]?.que}</p>
                </div>

                <div className="video-area">
                    <div className="video-box">
                        {recordedVideo ? (
                            <video controls src={recordedVideo}></video>
                        ) : (
                            <p>No Recording Found</p>
                        )}
                    </div>

                    <div className="buttons">
                        {recordedVideo && (
                            <>
                                <Button className="record-download-btn">
                                    <a
                                        href={recordedVideo}
                                        download="recording.webm"
                                        className="download"
                                    >
                                        Download
                                    </a>
                                </Button>
                                <Button
                                    className="delete"
                                    onClick={() => setRecordedVideo(null)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    className="share"
                                    onClick={handleShare}
                                >
                                    Share
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

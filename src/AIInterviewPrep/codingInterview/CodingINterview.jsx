import { useState } from "react";
import "./CodingInterview.css";
import Button from "../../componets/Button";

const CodingInterview = () => {
    const [started, setStarted] = useState(false);

    return (
        <div className="coding-interview">
            {/* Left Sidebar */}
            <div className="coding-interview__sidebar">
                    <h2 className="coding-interview__title">Web Developer</h2>
                    <span className="coding-interview__round">Coding</span>

                    <div className="coding-interview__tags">
                        <Button className="coding-interview__tag coding-interview__tag--main">MAIN QUESTION</Button>
                        <Button className="coding-interview__tag">JAVASCRIPT</Button>
                    </div>

                    <p className="coding-interview__instruction">Complete the code based on the given situation below.</p>

                    <div className="coding-interview__statement-box">
                        <p className="coding-interview__statement-label">CODE INSTRUCTION</p>
                        <textarea
                            className="coding-interview__statement-text"
                            readOnly
                            value={`In a naval architecture simulation,
...forms a container,
such that the container contains the most water.`}
                        />
                    </div>

                    <Button className="coding-interview__exit-btn">Exit Practice</Button>
                </div>
                

            {/* Right Panel */}
            <div className="coding-interview__editor-panel">
                <h3 className="coding-interview__editor-title">CODING EDITOR</h3>

                {!started ? (
                    <div className="coding-interview__start-placeholder">
                        <p>Click "Start Coding" to begin.</p>
                        <Button className="coding-interview__start-btn" onClick={() => setStarted(true)}>
                            START CODING
                        </Button>
                    </div>
                ) : (
                    <textarea
                        className="coding-interview__code-editor"
                        placeholder="// Start coding here..."
                    />
                )}

                <div className="coding-interview__video-container">
                    <img src="https://via.placeholder.com/150" alt="Interviewer" className="coding-interview__video" />
                    <span className="coding-interview__video-timer">00:00</span>
                </div>
            </div>
        </div>
    );
};

export default CodingInterview;

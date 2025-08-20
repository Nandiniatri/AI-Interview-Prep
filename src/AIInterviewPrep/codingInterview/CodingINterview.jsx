import React from "react";
import "./CodingInterview.css";

const CodingInterview = () => {
    return (
        <div className="interview-container">
            {/* Left Panel */}
            <div className="left-panel">
                <h2 className="role-title">Frontend Developer Interview</h2>

                <div className="tags">
                    <span className="tag main">Main Question</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">React</span>
                </div>

                <div className="question-box">
                    <h3>Problem Statement</h3>
                    <p>
                        Write a function that reverses a string without using built-in reverse methods.
                        <br /><br />
                        Example: <br />
                        Input: "hello" <br />
                        Output: "olleh"
                    </p>
                </div>

                <button className="exit-btn">Exit Practice</button>
            </div>

            {/* Right Panel */}
            <div className="right-panel">
                <div className="editor-box">
                    <p className="editor-placeholder">// Start writing your code here...</p>
                </div>

                <button className="start-btn">Start Coding</button>

                <div className="video-box">
                    <div className="video-placeholder">🎥 Interviewer Video</div>
                    <div className="timer">⏱ 30:00</div>
                </div>
            </div>
        </div>
    );
};

export default CodingInterview;

import React from "react";
import "./AiTalkAgain.css";

function AiTalkAgain() {
    return (
        <div className="app">
            {/* Left side - Interviewer Video */}
            <div className="video-section">
                <video width="400" controls>
                    <source src="/interviewer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <button className="end-btn">End Answer</button>
                <p className="question">What's a skill you're currently working on improving?</p>
            </div>

            {/* Right side - Candidate Info */}
            <div className="sidebar">
                <img
                    src="/candidate.jpg"
                    alt="Candidate"
                    className="candidate-img"
                />
                <h3>UI Designer</h3>
                <p>Warm Up</p>
                <button className="criteria-btn">Evaluation Criteria</button>
                <button className="exit-btn">Exit Interview</button>
            </div>
        </div>
    );
}

export default AiTalkAgain;

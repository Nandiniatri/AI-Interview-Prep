import React from "react";
import "./RoleRelated.css";

const RoleRelated = () => {
    return (
        <>
            <div className="role-related-container">
                {/* Left Side - Interviewer Video */}
                <div className="role-related-video-section">
                    <div className="role-related-interviewer-box">
                        <img
                            src="https://via.placeholder.com/800x400"
                            alt="AI Interviewer"
                            className="role-related-interviewer-video"
                        />
                    </div>
                    <div className="role-related-timer">04:55</div>

                    <button className="role-related-start-btn">🎤 Start Answer</button>
                </div>

                {/* Right Side Panel */}
                <div className="role-related-side-panel">
                    {/* Candidate self video */}
                    <div className="role-related-candidate-box">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Candidate"
                            className="role-related-candidate-video"
                        />
                    </div>

                    <h2 className="role-related-title">Web Developer</h2>
                    <p className="role-related-subtitle">Role Related</p>

                    <button className="role-related-eval-btn">Evaluation Criteria</button>
                    <button className="role-related-exit-btn">Exit Interview</button>
                </div>
            </div>

            <div className="role-related-question-box">
                <h3 className="role-related-question-heading">Main Question</h3>
                <p className="role-related-question-text">
                    What are the benefits and risks of using useRef in React?
                </p>
            </div>
        </>
    );
};

export default RoleRelated;

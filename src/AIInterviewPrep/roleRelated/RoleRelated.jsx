import React from "react";
import "./RoleRelated.css";

import React from "react";
import "./Interview.css";

const RoleRelated = () => {
  return (
    <div className="interview-container">
      {/* Left Side - Interviewer Video */}
      <div className="video-section">
        <div className="interviewer-box">
          <img
            src="https://via.placeholder.com/800x400"
            alt="AI Interviewer"
            className="interviewer-video"
          />
        </div>

        {/* Timer */}
        <div className="timer">04:55</div>

        {/* Start Answer Button */}
        <button className="start-btn">🎤 Start Answer</button>
      </div>

      {/* Right Side Panel */}
      <div className="side-panel">
        {/* Candidate self video */}
        <div className="candidate-box">
          <img
            src="https://via.placeholder.com/150"
            alt="Candidate"
            className="candidate-video"
          />
        </div>

        <h2 className="role-title">Web Developer</h2>
        <p className="role-subtitle">Role Related</p>

        <button className="eval-btn">Evaluation Criteria</button>
        <button className="exit-btn">Exit Interview</button>
      </div>

      {/* Question Box */}
      <div className="question-box">
        <h3 className="question-heading">Main Question</h3>
        <p className="question-text">
          What are the benefits and risks of using useRef in React?
        </p>
      </div>
    </div>
  );
};

export default RoleRelated;


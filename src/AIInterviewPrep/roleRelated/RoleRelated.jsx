import React from "react";
import "./RoleRelated.css";

const InterviewLayout = () => {
  return (
    <div className="interview-container">
      {/* Left side main video */}
      <div className="video-section">
        <img
          src="https://via.placeholder.com/600x350"
          alt="Interviewer"
          className="main-video"
        />
        <div className="timer">04:55</div>
        <button className="start-btn">🎤 Start Answer</button>
      </div>

      {/* Candidate self camera (top right) */}
      <div className="self-camera">
        <img
          src="https://via.placeholder.com/150x100"
          alt="Candidate"
          className="self-video"
        />
      </div>

      {/* Right side panel */}
      <div className="side-panel">
        <h3 className="role-title">Web Developer</h3>
        <p className="role-subtitle">Role Related</p>
        <button className="eval-btn">Evaluation Criteria</button>
        <button className="exit-btn">Exit Interview</button>
      </div>

      {/* Question box */}
      <div className="question-box">
        <h4>Main Question</h4>
        <p>What are the benefits and risks of using useRef in React?</p>
      </div>
    </div>
  );
};

export default InterviewLayout;

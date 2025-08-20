import { useState } from "react";
import "./InterviewUI.css";

const InterviewUI = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    "What are the key takeaways from your internships or projects that you will bring to this role?",
    "Tell me about one of your projects or initiatives that you are really proud of.",
    "How do you approach debugging and optimizing performance in React applications?",
  ];

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <div className="interview-container">
      
      <div className="interviewer-section">
        <div className="interviewer-video">
          
          <img
            src="https://via.placeholder.com/400x250"
            alt="Interviewer"
          />
        </div>
        <button className="start-btn">🎤 Start Answer</button>
        <p className="timer">03:43</p>
      </div>

      <div className="question-section">
        <h2 className="role-title">ReactJS Developer</h2>
        <span className="subtitle">Warm Up</span>

      
        <div className="question-box">
          <p className="question-label">Main Question</p>
          <p className="question-text">{questions[questionIndex]}</p>
        </div>

       
        <div className="btn-group">
          <button className="eval-btn">Evaluation Criteria</button>
          <button className="exit-btn">Exit Interview</button>
          <button className="next-btn" onClick={handleNext}>
            Next Question ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewUI;

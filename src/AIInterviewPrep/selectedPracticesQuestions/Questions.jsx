const Questions = ({ formatTime, handleNext, questions }) => {
    return (
        <div className="practice-container">
            <div className="practice-header">
                <h1>React JS Developer Interview Practice</h1>
                <span className="timer">⏳ {formatTime(timer)}</span>
            </div>

            <div className="question-box">
                <h2>
                    Question {currentQ + 1} of {questions.length}
                </h2>
                <p>{questions[currentQ]}</p>
            </div>

            <textarea
                placeholder="Write your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            ></textarea>

            <button onClick={handleNext} className="next-btn">
                {currentQ === questions.length - 1 ? "Finish" : "Next Question"}
            </button>
        </div>
    )
};

export default Questions;













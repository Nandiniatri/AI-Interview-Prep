import { useEffect, useState } from "react";

const Questions = ({ files, onComplete }) => {
    const [questionData, setQuestionData] = useState([]);
    const [currentQ, setCurrentQ] = useState(0);
    const [timer, setTimer] = useState(300);
    const [answer, setAnswer] = useState("");
    const [submittedAnswers, setSubmittedAnswers] = useState([]);

    const fetchData = async () => { 
        if (files) {
            try {
                const response = await fetch(`/data/startPracticePage/${files}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setQuestionData(result);
            } catch (error) {
                console.log("Network Error", error);
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, [files]);


    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(countdown);
    }, []);


    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };


    const handleNext = () => {
        const newAnswers = [
            ...submittedAnswers,
            { question: questionData[currentQ]?.question, answer }
        ];
        setSubmittedAnswers(newAnswers);
        setAnswer("");

        if (currentQ < questionData.length - 1) {
            setCurrentQ((prev) => prev + 1);
        } else {
            alert("Practice Completed!");
            console.log("Submitted Answers:", newAnswers);
            if (onComplete) onComplete(newAnswers);
        }
    };


    if (!questionData.length) {
        return <p>Loading All Questions........</p>;
    }

    return (
        <div className="practice-container">

            <div className="practice-header">
                <h1>React JS Developer Interview Practice</h1>
                <span className="timer">⏳ {formatTime(timer)}</span>
            </div>


            <div className="question-box">
                <h2>
                    Question {currentQ + 1} of {questionData.length}
                </h2>
                <p>{questionData[currentQ]?.question}</p>
            </div>


            <textarea
                placeholder="Write your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            ></textarea>


            <button onClick={handleNext} className="next-btn">
                {currentQ === questionData.length - 1 ? "Finish" : "Next Question"}
            </button>
        </div>
    );
};

export default Questions;





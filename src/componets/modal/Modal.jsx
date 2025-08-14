// import ReactDOM from "react-dom";
// import "./Modal.css";
// import { useDataContext } from "../../contextApi/DatasContectApi";
// import Modal1 from "../modal1/Modal1";

// const Modal = ({ isOpen, children, onClose }) => {
//     const { handleStartPractice, isModalOpen, setIsOpenOpen } = useDataContext();

//     if (!isOpen) return null;

//     return ReactDOM.createPortal(
//         <>
//             <div className="modal-overlay1" onClick={onClose}>
//                 <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
//                     {children}
//                     <div className="modal-actions1">
//                         <button
//                             className="start-btn1"
//                             onClick={() => {
//                                 handleStartPractice();
//                             }}
//                         >
//                             START PRACTICE
//                         </button>
//                         <button className="cancel-btn1" onClick={onClose}>CANCEL</button>
//                     </div>
//                 </div>
//             </div>


//             <Modal1 isOpen={isModalOpen} onClose={() => setIsOpenOpen(false)}>

//             </Modal1>

//         </>,
//         document.getElementById("modal-form")
//     );
// };

// export default Modal;




// import ReactDOM from "react-dom";
// import "./Modal.css";
// import { useDataContext } from "../../contextApi/DatasContectApi";
// import Modal1 from "../modal1/Modal1";
// import { useState, useEffect } from "react";

// const Modal = ({ isOpen, children, onClose }) => {
//   const { handleStartPractice, isModalOpen, setIsOpenOpen, selectedRound, setSelectedRound } = useDataContext();

//   useEffect(() => {
//     console.log(selectedRound);
//   }, [])


//   const questions = [
//     "Explain the difference between useEffect and useLayoutEffect in React.",
//     "What are React Hooks and why are they useful?",
//     "How does virtual DOM work in React?",
//     "What is the difference between state and props?",
//     "How can you optimize performance in a React application?"
//   ];

//   // const fetchAllStartPracticsData = () => {
//   //   const response = fetch('');
//   //   const result = response.json();
//   //   console.log(result);

//   // }

//   const [currentQ, setCurrentQ] = useState(0);
//   const [timer, setTimer] = useState(300);
//   const [answer, setAnswer] = useState("");
//   const [submittedAnswers, setSubmittedAnswers] = useState([]);

//   useEffect(() => {
//     if (!isOpen) return;

//     const countdown = setInterval(() => {
//       setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, [isOpen]);


//   if (!isOpen) return null;

//   const handleNext = () => {
//     const newAnswers = [...submittedAnswers, { question: questions[currentQ], answer }];
//     setSubmittedAnswers(newAnswers);
//     setAnswer("");

//     if (currentQ < questions.length - 1) {
//       setCurrentQ((prev) => prev + 1);
//     } else {
//       alert("Practice Completed!");
//       console.log("Submitted Answers:", newAnswers);
//       setIsOpenOpen(false);
//     }
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   return ReactDOM.createPortal(
//     <>
//       <div className="modal-overlay1" onClick={onClose}>
//         <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
//           {children}
//           <div className="modal-actions1">
//             <button
//               className="start-btn1"
//               onClick={() => {
//                 handleStartPractice();
//               }}
//             >
//               START PRACTICE
//             </button>
//             <button className="cancel-btn1" onClick={onClose}>
//               CANCEL
//             </button>
//           </div>
//         </div>
//       </div>

//       <Modal1 isOpen={isModalOpen} onClose={() => setIsOpenOpen(false)}>
//         <div className="practice-container">
//           <div className="practice-header">
//             <h1>React JS Developer Interview Practice</h1>
//             <span className="timer">⏳ {formatTime(timer)}</span>
//           </div>

//           <div className="question-box">
//             <h2>
//               Question {currentQ + 1} of {questions.length}
//             </h2>
//             <p>{questions[currentQ]}</p>
//           </div>

//           <textarea
//             placeholder="Write your answer here..."
//             value={answer}
//             onChange={(e) => setAnswer(e.target.value)}
//           ></textarea>

//           <button onClick={handleNext} className="next-btn">
//             {currentQ === questions.length - 1 ? "Finish" : "Next Question"}
//           </button>
//         </div>
//       </Modal1>
//     </>,
//     document.getElementById("modal-form")
//   );
// };

// export default Modal;





















import ReactDOM from "react-dom";
import "./Modal.css";
import { useDataContext } from "../../contextApi/DatasContectApi";
import Modal1 from "../modal1/Modal1";
import { useState, useEffect } from "react";

const Modal = ({ isOpen, children, onClose }) => {
  const { handleStartPractice, isModalOpen, setIsOpenOpen, selectedRound, setSelectedRound } = useDataContext();

  useEffect(() => {
    console.log(selectedRound);
  }, [])


  const questions = [
    "Explain the difference between useEffect and useLayoutEffect in React.",
    "What are React Hooks and why are they useful?",
    "How does virtual DOM work in React?",
    "What is the difference between state and props?",
    "How can you optimize performance in a React application?"
  ];

  // const fetchAllStartPracticsData = () => {
  //   const response = fetch('');
  //   const result = response.json();
  //   console.log(result);

  // }

  const [currentQ, setCurrentQ] = useState(0);
  const [timer, setTimer] = useState(300);
  const [answer, setAnswer] = useState("");
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  useEffect(() => {
    if (!isOpen) return;

    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, [isOpen]);


  if (!isOpen) return null;

  const handleNext = () => {
    const newAnswers = [...submittedAnswers, { question: questions[currentQ], answer }];
    setSubmittedAnswers(newAnswers);
    setAnswer("");

    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      alert("Practice Completed!");
      console.log("Submitted Answers:", newAnswers);
      setIsOpenOpen(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay1" onClick={onClose}>
        <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
          {children}
          <div className="modal-actions1">
            <button
              className="start-btn1"
              onClick={() => {
                handleStartPractice();
              }}
            >
              START PRACTICE
            </button>
            <button className="cancel-btn1" onClick={onClose}>
              CANCEL
            </button>
          </div>
        </div>
      </div>

      <Modal1 isOpen={isModalOpen} onClose={() => setIsOpenOpen(false)}>
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
      </Modal1>
    </>,
    document.getElementById("modal-form")
  );
};

export default Modal;


















{/* <Questions formatTime={formatTime} handleNext={handleNext} questions={questions} timer={timer} currentQ={currentQ} answer={answer} /> */}
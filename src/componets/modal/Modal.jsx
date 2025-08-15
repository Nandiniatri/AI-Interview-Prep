import ReactDOM from "react-dom";
import "./Modal.css";
import { useDataContext } from "../../contextApi/DatasContectApi";
import Modal1 from "../modal1/Modal1";
import { rounds } from "../../../public/data/startPractice";
import Questions from "../../AIInterviewPrep/selectedPracticesQuestions/Questions";

const Modal = ({ isOpen, children, onClose }) => {
  const { handleStartPractice, isModalOpen, setIsOpenOpen, selectedRound, selectedPosition } = useDataContext();

  const selectedJsonFiles = {
    "ReactJS Developer": "startPractices1",
    "Web Developer": "startPractices2", 
  }

  const selectedRoundsData = rounds.find(r => r.title === selectedRound)
  console.log("selected Round Data Modal", selectedRoundsData);

  const fileKeys = selectedJsonFiles[selectedPosition] || 'startPractices1';
  console.log(fileKeys);

  const fileToBeUseInQuestions = selectedRoundsData?.[fileKeys];
  console.log(fileToBeUseInQuestions);


  if (!isOpen) return null;

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
        <Questions files={fileToBeUseInQuestions} />
      </Modal1>
    </>,
    document.getElementById("modal-form")
  );
};

export default Modal;













{/* <Questions formatTime={formatTime} handleNext={handleNext} questions={questions} timer={timer} currentQ={currentQ} answer={answer} /> */ }
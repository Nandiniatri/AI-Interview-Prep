import ReactDOM from "react-dom";
import "./Modal.css";
import { useDataContext } from "../../contextApi/DatasContectApi";
import Button from "../Button";


const Modal = ({ isOpen, children, onClose }) => {
  const { handleStartPractice } = useDataContext();

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay1" onClick={onClose}>
        <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
          {children}
          <div className="modal-actions1">
            <Button
              className="start-btn1"
              onClick={() => {
                handleStartPractice();
              }}
            >
              START PRACTICE'S
            </Button>
            <Button className="cancel-btn1" onClick={onClose}>
              CANCEL
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-form")
  );
};

export default Modal;
 

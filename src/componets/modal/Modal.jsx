import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay1" onClick={onClose}>
            <div className="modal-content1" onClick={(e) => e.stopPropagation()}>

                {children}

                <div className="modal-actions1">
                    <button className="start-btn1">START PRACTICE</button>
                    <button className="cancel-btn1" onClick={onClose}>CANCEL</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal-form")
    );
};

export default Modal;

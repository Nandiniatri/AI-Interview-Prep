import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay1" onClick={onClose}>
                <div className="modal-content1">
                    {children}
                    <button className="close-btn" onClick={onClose}>close</button>
                </div>
            </div>
        </>,
        document.getElementById("modal-form")
    )
}

export default Modal;
import Button from "../Button";
import './Modal1.css'
import ReactDOM from "react-dom";

const Modal1 = ({ isOpen, onClose, children }) => {

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal1-overlay" onClick={onClose}>
            <div className="modal1-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <Button onClick={onClose} className="modal1-closed-btn">x</Button>
            </div>
        </div>,
        document.getElementById('modal1-form')
    )
}

export default Modal1;  
import ReactDOM from "react-dom";
import Button from "../Button";
import './Modal2.css'

const Modal2 = ({ isOpen, children , onClose}) => {
    if (!isOpen) {
        return null
    }

    return ReactDOM.createPortal(
        <div className="modal2-overlay" onClick={onClose}>
            <div className="modal2-content" onClick={(e) => e.stopPropagation()}>
                {children}
                {/* <Button onClick={onClose} className="modal2-closed-btn"></Button> */}
            </div>
        </div>,
        document.getElementById('modal2-form')
    )
}

export default Modal2; 
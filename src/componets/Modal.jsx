import Button from "./Button";

const Modal = ({ isOpen, children, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content">
                    {children}
                    <Button className="close-btn" onClick={onClose}>close</Button>
                </div>
            </div>
        </>,
        document.getElementById("modal-form")
    )
}

export default Modal;
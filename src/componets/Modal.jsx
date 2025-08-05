import Button from "./Button";

const Modal = ({ isOpen, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    {children}
                    <Button>close</Button>
                </div>
            </div>
        </>
    )
}

export default Modal;
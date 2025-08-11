import ReactDOM from "react-dom";
import "./Modal.css";
import { useDataContext } from "../../contextApi/DatasContectApi";
import Modal1 from "../modal1/Modal1";

const Modal = ({ isOpen, children, onClose }) => {
    const { handleStartPractice, isModalOpen, setIsOpenOpen } = useDataContext();

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
                        <button className="cancel-btn1" onClick={onClose}>CANCEL</button>
                    </div>
                </div>
            </div>

            
            <Modal1 isOpen={isModalOpen} onClose={() => setIsOpenOpen(false)}>
                <h2>🎥 Practice Session</h2>
                <p>Yaha tumhara video / practice content aayega.</p>
            </Modal1>

        </>,
        document.getElementById("modal-form")
    );
};

export default Modal;


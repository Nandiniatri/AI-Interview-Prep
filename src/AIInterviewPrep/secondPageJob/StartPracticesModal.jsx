import { useState } from "react";
import "./StartPracticesModal.css";
import { jobs, positions, rounds } from "../../../public/data/startPractice";
import Modal from "../../componets/modal/Modal";
import SelectedForm from "../selectedForms/SelectedForms";
import { useDataContext } from "../../contextApi/DatasContectApi";

const StartPracticeModal = ({ onClose }) => {
    const [selectedJob, setSelectedJob] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { selectedRound, setSelectedRound, selectedPosition, setSelectedPosition } = useDataContext();

    const handleStartPractice = () => {
        if (selectedJob && selectedPosition && selectedRound) {
            setIsModalOpen(true);
        }
    };

    const isDisabled = !(selectedJob && selectedPosition && selectedRound);

    const handleSelectedRound = (e) => {
        setSelectedRound(e.target.value);
    };
 

    const positionToFileKey = {
        "ReactJS Developer": "file1",
        "Web Developer": "file2",
        "Web Designer": "file3"
    };

    const selectedRoundData = rounds.find(r => r.title === selectedRound);
    const fileKey = positionToFileKey[selectedPosition] || "file1";
    console.log(fileKey);

    const fileToUse = selectedRoundData?.[fileKey];
    console.log("konsi file use ho rahi hai" , fileToUse);


    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-btn" onClick={onClose}>×</button>
                    <h2>Ready to Ace Your Next Interview?</h2>
                    <p>AI mock interviews with personalized practice and real-time analytics</p>

                    <div className="dropdown-row">
                        <select
                            value={selectedJob}
                            onChange={e => setSelectedJob(e.target.value)}
                            className="select-job"
                        >
                            <option value="">Select Job</option>
                            {jobs.map(job => (
                                <option key={job.id} value={job.title}>{job.title}</option>
                            ))}
                        </select>

                        <select 
                            value={selectedPosition}
                            onChange={e => setSelectedPosition(e.target.value)}
                        >
                            <option value="">Search position</option>
                            {positions.map(pos => (
                                <option key={pos.id} value={pos.title}>{pos.title}</option>
                            ))}
                        </select>

                        <select
                            value={selectedRound}
                            onChange={handleSelectedRound}
                            disabled={!selectedPosition}
                        >
                            <option value="">Select Round</option>
                            {selectedPosition &&
                                rounds.map(round => (
                                    <option key={round.id} value={round.title}>{round.title}</option>
                                ))
                            }
                        </select>

                        <button
                            className="form-start-btn"
                            onClick={handleStartPractice}
                            disabled={isDisabled}
                        >
                            START PRACTICE
                        </button>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <SelectedForm file={fileToUse} />
            </Modal>
        </>
    );
};
 
export default StartPracticeModal;







import { useState } from "react";
import "./StartPracticesModal.css";
import { jobs, positions, rounds } from "../../../public/data/startPractice";

const StartPracticeModal = ({ onClose }) => {
    const [selectedJob, setSelectedJob] = useState("");
    const [selectedPosition, setSelectedPosition] = useState("");
    const [selectedRound, setSelectedRound] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // console.log("Job:", selectedJob);
    // console.log("Position:", selectedPosition);
    // console.log("Round:", selectedRound);

    const handleStartPractice = () => {
        setIsModalOpen(true);
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Ready to Ace Your Next Interview?</h2>
                <p>AI mock interviews with personalized practice and real-time analytics</p>

                <div className="dropdown-row">
                    <select value={selectedJob} onChange={e => setSelectedJob(e.target.value)} className="select-job">
                        {jobs.map(job => (
                            <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                    </select>

                    <select value={selectedPosition} onChange={e => setSelectedPosition(e.target.value)}>
                        <option value="">Search position</option>
                        {positions.map(pos => (
                            // console.log(pos)                            
                            <option key={pos.id} value={pos.title}>{pos.title}</option>
                        ))}
                    </select>

                    <select value={selectedRound} onChange={e => setSelectedRound(e.target.value)} disabled={!selectedPosition}>
                        <option value="">Select Round</option>
                        {selectedPosition &&
                            rounds.map(round => (
                                <option key={round.id} value={round.title}>{round.title}</option>
                            ))
                        }
                    </select>

                    <button className="start-btn" onClick={handleStartPractice}>START PRACTICE</button>

                </div>
            </div>

            
        </div>
    );
};

export default StartPracticeModal;

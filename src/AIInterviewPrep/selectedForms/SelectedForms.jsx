import { useEffect, useRef, useState } from "react";
import './SelectedForms.css';

const SelectedForm = ({ file }) => {
  const [data, setData] = useState(null);
  const [resumeName, setResumeName] = useState("");
  const fileInputRef = useRef(null);
  const [selectRoundsTitle, setSelectRoundsTitle] = useState('');
  const [selectInterview, setSelectInterview] = useState('');
  const [selectInterviewer, setSelectInterviewer] = useState('');

  const fetchAllFileData = async () => {
    if (file) {
      try {
        const response = await fetch(`/public/data/${file}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('Network Error');
      }
    }
  };

  useEffect(() => {
    fetchAllFileData();
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setResumeName(selectedFile.name);
      console.log("Selected file:", selectedFile);
    }
  };

  if (!data) {
    return <p>Loading questions...</p>;
  }

  const handleClickRounds = (round) => {
    setSelectRoundsTitle(round.title);
  }

  const handleClickDuration = (duration) => {
    console.log(duration.time);
    setSelectInterview(duration.time);
  }

  const handleClickInterviewer = (interview) => {
    console.log(interview);
    setSelectInterviewer(interview.name);
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Interview Details</h2>

      {data?.heading?.map((head, index) => (
        <div key={index} className="interview-role">
          <h3>{head.title}</h3>
          <span className="sub-title">{head.subTitle}</span>
        </div>
      ))}

      <div className="resume-container">
        <div className="resume-text">
          <h3 className="resume-heading">
            Resume Based Interview: <span>(Optional)</span>
          </h3>
          <p className="resume-subtext">
            Get interview questions personalized to your resume.
          </p>
        </div>

        <div>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {!resumeName ? (
            <button className="upload-btn" onClick={handleUploadClick}>
              Upload Resume
            </button>
          ) : (
            <button className="upload-btn">
              {resumeName}
            </button>
          )}
        </div>
      </div>

      <div className="section">
        <p className="section-title">Select Round *</p>
        <div className="options">
          {data?.rounds?.map((round, index) => {
            return (
              <div>
                <button className={selectRoundsTitle === round.title ? "option-btn-select" : "option-btn"} key={index} onClick={() => handleClickRounds(round)}>{round.title}</button>
              </div>
            )
          })}
        </div>
      </div>

      <div className="section">
        <p className="section-title">Interview Duration *</p>
        <div className="options">
          {data?.durations?.map((duration, index) => (
            <button className={selectInterview === duration.time ? "option-btn-select" : "option-btn"} key={index} onClick={() => handleClickDuration(duration)}>{duration.time}</button>
          ))}
        </div>
      </div>

      <div className="section">
        <p className="section-title">Select Your Interviewer *</p>
        <div className="interviewer-grid">
          {data?.interviewers?.map((interview, index) => (
            <div className={selectInterviewer === interview.name ? "option-btn-select-img" : "interviewer-card"} key={index} onClick={() => handleClickInterviewer(interview)}>
              <img src={interview.img} alt={interview.name} />
              <p className="interviewer-name">{interview.name}</p>
              <p className="interviewer-lang">{interview.lang}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <p className="section-title">Practice Setting *</p>
        <div className="checkbox-group">
          <label><input type="checkbox" /> Audio</label>
          <label><input type="checkbox" /> Video</label>
        </div>
      </div>

      <p className="note">Note: Video will be deleted after 30 mins.</p>

      <div className="terms">
        <input type="checkbox" />
        <label>I agree with the <a href="#">terms and conditions</a>.</label>
      </div>
    </div>
  );
};

export default SelectedForm;

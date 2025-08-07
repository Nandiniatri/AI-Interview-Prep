import { useEffect, useState } from "react";
import './SelectedForms.css';

import warmUp from '/public/data/reactJsWarmUp.json';
import coding from '/public/data/reactJsCoding.json';
import roleRelated from '/public/data/reactJsRoleRelated.json';
import behavioral from '/public/data/reactJsBehavioral.json';


const fileMap = {
  "ReactJS Developer": {
    "Warm Up": warmUp,
    "Coding": coding,
    "Role Related": roleRelated,
    "Behavioral": behavioral,
  },
  "Web Developer": {
    "Warm Up": warmUp,
    "Coding": coding,
    "Role Related": roleRelated,
    "Behavioral": behavioral,
  }
};

const SelectedForm = ({ position, round , selectedRoundWebDev}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (position && round) {
      const selectedData = fileMap[position]?.[round];
      if (selectedData) {
        setData(selectedData);
      } else {
        setData(null);
      }
    }
  }, [position, round]);

  if (!data) {
    return <p>Loading questions...</p>;
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
        <button className="upload-btn">Upload Resume</button>
      </div>

      <div className="section">
        <p className="section-title">Select Round *</p>
        <div className="options">
          {data?.rounds?.map((round, index) => (
            <button className="option-btn" key={index}>{round.title}</button>
          ))}
        </div>
      </div>

      <div className="section">
        <p className="section-title">Interview Duration *</p>
        <div className="options">
          {data?.durations?.map((duration, index) => (
            <button className="option-btn" key={index}>{duration.time}</button>
          ))}
        </div>
      </div>

      <div className="section">
        <p className="section-title">Select Your Interviewer *</p>
        <div className="interviewer-grid">
          {data?.interviewers?.map((interview, index) => (
            <div className="interviewer-card" key={index}>
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

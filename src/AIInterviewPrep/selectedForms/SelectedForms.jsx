import { useEffect, useRef, useState } from "react";
import './SelectedForms.css';
import { useDataContext } from "../../contextApi/DatasContectApi";
import * as pdfjsLib from "pdfjs-dist";


const SelectedForm = ({ file }) => {
  const [data, setData] = useState(null);
  const fileInputRef = useRef(null);
  const { selectRoundsTitle, setSelectRoundsTitle,
    selectInterview, setSelectInterview,
    selectInterviewer, setSelectInterviewer, resumeName, setResumeName, setVideoSelected, termsAgreed, setTermsAgreed } = useDataContext();


  const fetchAllFileData = async () => {
    if (file) {
      try {
        const response = await fetch(`/data/${file}`);
        const result = await response.json();
        console.log("selectForms" , result);
        
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

      if (selectedFile.type === "application/pdf") {
        const reader = new FileReader();
        reader.onload = async () => {
          const typedarray = new Uint8Array(reader.result);
          const pdf = await pdfjsLib.getDocument(typedarray).promise;

          let extractedText = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            extractedText += textContent.items.map((item) => item.str).join(" ") + " ";
          }

          console.log("📄 Resume Extracted Text:", extractedText);

          // Example: Extract skills
          const skills = ["JavaScript", "React", "Node.js", "CSS", "Python"];
          const foundSkills = skills.filter(skill =>
            extractedText.toLowerCase().includes(skill.toLowerCase())
          );

          console.log("✅ Matched Skills:", foundSkills);
        };
        reader.readAsArrayBuffer(selectedFile);
      } else {
        alert("Please upload only PDF resume.");
      }
    }
  };



  if (!data) {
    return <p>Loading questions...</p>;
  }

  const handleClickRounds = (round) => {    
    setSelectRoundsTitle(round.title);
  }

  const handleClickDuration = (duration) => {
    setSelectInterview(duration.time);
  }

  const handleClickInterviewer = (interview) => {
    setSelectInterviewer(interview.name);
  }


  const handleVideoCall = (e) => {
    const events = e.target.value;
    setVideoSelected(events);
  }

  const handleTermsAgree = (e) => {
    setTermsAgreed(e.target.checked);
  }

  console.log(file);
  

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
              <div key={round.id}>
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
          <label><input type="checkbox" onClick={(e) => handleVideoCall(e)} /> Video</label>
        </div>
      </div>

      <p className="note">Note: Video will be deleted after 30 mins.</p>

      <div className="terms">
        <input type="checkbox" checked={termsAgreed} onChange={handleTermsAgree} />
        <label>I agree with the <a href="#">terms and conditions</a>.</label>
      </div>
    </div>
  );
};

export default SelectedForm;

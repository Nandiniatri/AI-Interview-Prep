// import { useEffect, useState } from "react";
// import './SelectedForms.css'

// const SelectedForm = () => {
//     const [data, setData] = useState(null);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('/data/reactJsWarmUp.json');
//             const result = await response.json();
//             console.log(result);
//             setData(result);
//         } catch (error) {
//             console.log('Network Error');
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <>
//             <div>
//                 <h2>Interview Details</h2>
//             </div>

//             <div>
//                 {data?.heading?.map((head, index) => (
//                     <div key={index}>
//                         <h3>{head.title}</h3>
//                         <p>{head.subTitle}</p>
//                     </div>
//                 ))}
//             </div>

//             <div className="resume-container">
//                 <div className="resume-text">
//                     <h3 className="resume-heading">
//                         Resume Based Interview: <span>(Optional)</span>
//                     </h3>
//                     <p className="resume-subtext">
//                         Get interview questions personalized to your resume.
//                     </p>
//                 </div>
//                 <button className="upload-btn">Upload Resume</button>
//             </div>

//             <div>
//                 <p>Select Round *</p>
//                 {data?.rounds?.map((rounds, index) => (
//                     <div key={index}>
//                         <span>{rounds.title}</span>
//                     </div>
//                 ))}
//             </div>

//             <div>
//                 <p>Interview Duration *</p>
//                 {data?.durations?.map((duration, index) => (
//                     <div key={index}>
//                         <span>{duration.time}</span>
//                     </div>
//                 ))}
//             </div>

//             <div>
//                 <p>Select Your Interview *</p>
//                 {data?.interviewers?.map((interview, index) => (
//                     <div key={index}>
//                         <img src={interview.img} />
//                         <p>{interview.name}</p>
//                         <p>{interview.lang}</p>
//                     </div>
//                 ))}
//             </div>

//             <div>
//                 <p>Practice Setting *</p>
//                 <div>
//                     <input type="checkbox" />
//                     <label>Audio</label>
//                 </div>

//                 <div>
//                     <input type="checkbox" />
//                     <label>video</label>
//                 </div>
//             </div>

//             <div>
//                 <p>Note: Video will be deleted after 30 mins.</p>
//             </div>

//             <div>
//                 <input type="checkbox" />
//                 <p>I agree with the terms and conditions.</p>
//             </div>
//         </>
//     );
// };

// export default SelectedForm;



import { useEffect, useState } from "react";
import './SelectedForms.css';

const SelectedForm = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/data/reactJsWarmUp.json');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log('Network Error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

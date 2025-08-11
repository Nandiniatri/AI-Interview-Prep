import { createContext, useContext, useState } from "react";

const dataContext = createContext();

const DatasContextApi = ({ children }) => {
  const [selectRoundsTitle, setSelectRoundsTitle] = useState('');
  const [selectInterview, setSelectInterview] = useState('');
  const [selectInterviewer, setSelectInterviewer] = useState('');
  const [videoSelected, setVideoSelected] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleStartPractice = () => {
    if (
      selectRoundsTitle &&
      selectInterview &&
      selectInterviewer &&
      videoSelected &&
      termsAgreed
    ) {
      alert("Practice Started ✅");
    } else {
      alert("⚠️ You have not selected all required fields");
    }
  };

  return (
    <dataContext.Provider value={{
      selectRoundsTitle, setSelectRoundsTitle,
      selectInterview, setSelectInterview,
      selectInterviewer, setSelectInterviewer,
      videoSelected, setVideoSelected,
      termsAgreed, setTermsAgreed,
      handleStartPractice
    }}>
      {children}
    </dataContext.Provider>
  );
};

export const useDataContext = () => useContext(dataContext);

export default DatasContextApi;

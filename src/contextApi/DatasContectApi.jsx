import { createContext, useContext, useState } from "react";

const dataContext = createContext();

const DatasContextApi = ({ children }) => {
    const [selectRoundsTitle, setSelectRoundsTitle] = useState('');
    const [selectInterview, setSelectInterview] = useState('');
    const [selectInterviewer, setSelectInterviewer] = useState('');
    const [videoSelected, setVideoSelected] = useState(false);
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [resumeName, setResumeName] = useState("");
    const [isModalOpen , setIsOpenOpen] = useState(false);
    const [selectedRound, setSelectedRound] = useState("");

    console.log(termsAgreed);
    

    const handleStartPractice = () => {
        // alert('hello ji')
        if (
            resumeName
            // selectRoundsTitle && 
            // selectInterview && 
            // selectInterviewer && 
            // videoSelected && 
            // termsAgreed
        ) {
            setIsOpenOpen(true);
        } else {
            alert("You have not selected all required fields");
        }
    };

    return (
        <dataContext.Provider value={{
            resumeName, setResumeName,
            selectRoundsTitle, setSelectRoundsTitle,
            selectInterview, setSelectInterview,
            selectInterviewer, setSelectInterviewer,
            videoSelected, setVideoSelected,
            termsAgreed, setTermsAgreed,
            handleStartPractice,
            isModalOpen , setIsOpenOpen,
            selectedRound, setSelectedRound
        }}>
            {children}
        </dataContext.Provider>
    );
};

export const useDataContext = () => useContext(dataContext);

export default DatasContextApi;

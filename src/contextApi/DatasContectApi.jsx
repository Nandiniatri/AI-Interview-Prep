import { createContext } from "react";

const dataContext = createContext();

const DatasContextApi = () => {
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

        }}>
            {children}
        </dataContext.Provider>
    )
}

export default DatasContextApi;
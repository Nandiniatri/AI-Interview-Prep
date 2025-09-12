// import { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "../../supabaseClient";
// import { useNavigate } from "react-router-dom";

// const dataContext = createContext();

// const DatasContextApi = ({ children }) => {
//     const [session, setSession] = useState(null);
//     const [selectRoundsTitle, setSelectRoundsTitle] = useState('');
//     const [selectInterview, setSelectInterview] = useState('');
//     const [selectInterviewer, setSelectInterviewer] = useState('');
//     const [videoSelected, setVideoSelected] = useState(false);
//     const [termsAgreed, setTermsAgreed] = useState(false);
//     const [resumeName, setResumeName] = useState("");
//     const [isModalOpen, setIsOpenOpen] = useState(false);
//     const [selectedRound, setSelectedRound] = useState("");
//     const [selectedPosition, setSelectedPosition] = useState("");
//     const navigate = useNavigate();




//     useEffect(() => {
//         supabase.auth.getSession().then(({ data: { session } }) => {
//             setSession(session);
//         });
//         const {
//             data: { subscription },
//         } = supabase.auth.onAuthStateChange((_event, session) => {
//             setSession(session);
//         });
//         return () => subscription.unsubscribe();
//     }, []);

//     // console.log(session?.user?.email);

//     const signOut = async () => {
//         const { error } = await supabase.auth.signOut();
//     };

//     const signUp = async () => {
//         console.log('hello sign up here');

//         await supabase.auth.signInWithOAuth({
//             provider: "google",
//         });
//     };

//     const handleStartPractice = () => {
//         if (!session) {
//             navigate("/login");
//             return;
//         }
//         if (
//             resumeName &&
//             selectRoundsTitle &&
//             selectInterview &&
//             selectInterviewer &&
//             videoSelected &&
//             termsAgreed
//         ) {
//             if (selectedRound === 'Warm Up') {
//                 navigate('/avatarModal')
//             } else if (selectedRound === "Coding") {
//                 navigate("/codingPage");
//             } else if(selectedRound === 'Role Related'){
//                 alert('Page Nahi hai!')
//             }else if(selectedRound === 'Behavioral'){
//                 alert('page nhi hai abhi!')
//             }
//             else {
//                 alert("Selected round is not recognized!");
//             }
//         } else {
//             alert("You have not selected all required fields");
//         }
//     };

//     return (
//         <dataContext.Provider
//             value={{
//                 session,
//                 signOut,
//                 signUp,
//                 resumeName, setResumeName,
//                 selectRoundsTitle, setSelectRoundsTitle,
//                 selectInterview, setSelectInterview,
//                 selectInterviewer, setSelectInterviewer,
//                 videoSelected, setVideoSelected,
//                 termsAgreed, setTermsAgreed,
//                 handleStartPractice,
//                 isModalOpen, setIsOpenOpen,
//                 selectedRound, setSelectedRound,
//                 selectedPosition, setSelectedPosition,
//             }}
//         >
//             {children}
//         </dataContext.Provider>
//     );
// };

// export const useDataContext = () => useContext(dataContext);
// export default DatasContextApi;





import { createContext, useContext, useEffect, useState, useRef } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";
import { rounds } from "../../public/data/startPractice";

const dataContext = createContext();

const DatasContextApi = ({ children }) => {
    const [session, setSession] = useState(null);
    const [selectRoundsTitle, setSelectRoundsTitle] = useState('');
    const [selectInterview, setSelectInterview] = useState('');
    const [selectInterviewer, setSelectInterviewer] = useState('');
    const [videoSelected, setVideoSelected] = useState(false);
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [resumeName, setResumeName] = useState("");
    const [isModalOpen, setIsOpenOpen] = useState(false);
    const navigate = useNavigate();
    let lipsyncInterval = null;
    const meshRef = useRef();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [interviewStarted, setInterviewStarted] = useState(false);
    const debug = true;




    const [selectedRound, setSelectedRound] = useState("");
    const [selectedPosition, setSelectedPosition] = useState("");
    const [questions, setQuestions] = useState([]);

    
    

















    // 🎤 Speech Recognition setup
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = SpeechRecognition ? new SpeechRecognition() : null;

    if (recognition) {
        recognition.continuous = false;
        recognition.lang = "en-US";
        recognition.interimResults = false;
    }

    const speakQuestion = (index) => {
        if (index >= questions.length) {
            console.log("✅ Interview finished!");
            return;
        }

        const text = questions[index].que;
        const utterance = new SpeechSynthesisUtterance(text);

        //Stop old speech and lipsync
        window.speechSynthesis.cancel();
        if (lipsyncInterval) {
            clearInterval(lipsyncInterval);
            lipsyncInterval = null;
        }

        //ye hai new speech start karne ke liye
        window.speechSynthesis.speak(utterance);

        // debug morph targets
        if (debug && meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.morphTargetDictionary) {
                    console.log("Morph Targets:", child.morphTargetDictionary);
                }
            });
        }

        // lipsync effect
        const duration = text.split(" ").length * 0.3 * 1000;
        // console.log(duration);

        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            if (elapsed > duration) {
                clearInterval(interval);
                if (meshRef.current) {
                    meshRef.current.traverse((child) => {
                        if (child.morphTargetInfluences) {
                            child.morphTargetInfluences[0] = 0;
                        }
                    });
                }
                return;
            }

            if (meshRef.current) {
                meshRef.current.traverse((child) => {
                    if (child.morphTargetInfluences) {
                        child.morphTargetInfluences[0] = Math.random();
                    }
                });
            }
        }, 100);

        // ✅ Speech end hone ke baad recognition safe start
        utterance.onend = () => {
            if (recognition) {
                try {
                    recognition.stop();
                    recognition.start();
                } catch (err) {
                    console.warn("Recognition restart skipped:", err.message);
                }
            }
        };
    };

    if (recognition) {
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log("🗣️ User Answer:", transcript);
            setCurrentQuestion((prev) => prev + 1);
        };

        recognition.onspeechend = () => {
            recognition.stop();
        };

        recognition.onerror = (event) => {
            console.error("Recognition error:", event.error);
            recognition.stop();
        };
    }

    const startInterview = () => {
        setInterviewStarted(true);
        setCurrentQuestion(0);
    };

    // ✅ Har baar currentQuestion change hote hi ye trigger hoga
    useEffect(() => {
        if (interviewStarted && currentQuestion < questions.length) {
            speakQuestion(currentQuestion);
        }
    }, [currentQuestion, interviewStarted, questions]);

    console.log(questions);


    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
        return () => subscription.unsubscribe();
    }, []);

    // console.log(session?.user?.email);

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
    };

    const signUp = async () => {
        console.log('hello sign up here');

        await supabase.auth.signInWithOAuth({
            provider: "google",
        });
    };

    const handleStartPractice = () => {
        if (!session) {
            navigate("/login");
            return;
        }
        if (
            resumeName &&
            selectRoundsTitle &&
            selectInterview &&
            selectInterviewer &&
            videoSelected &&
            termsAgreed
        ) {
            fetchAllTheQuestions();
            if (selectedRound === 'Warm Up') {
                navigate('/avatarModal')
            } else if (selectedRound === "Coding") {
                navigate("/codingPage");
            } else if (selectedRound === 'Role Related') {
                alert('Page Nahi hai!')
            } else if (selectedRound === 'Behavioral') {
                alert('page nhi hai abhi!')
            }
            else {
                alert("Selected round is not recognized!");
            }
        } else {
            alert("You have not selected all required fields");
        }
    };

    return (
        <dataContext.Provider
            value={{
                session,
                signOut,
                signUp,
                resumeName, setResumeName,
                selectRoundsTitle, setSelectRoundsTitle,
                selectInterview, setSelectInterview,
                selectInterviewer, setSelectInterviewer,
                videoSelected, setVideoSelected,
                termsAgreed, setTermsAgreed,
                handleStartPractice,
                isModalOpen, setIsOpenOpen,
                selectedRound, setSelectedRound,
                selectedPosition, setSelectedPosition,
                interviewStarted, startInterview, currentQuestion, questions,
                meshRef
            }}
        >
            {children}
        </dataContext.Provider>
    );
};

export const useDataContext = () => useContext(dataContext);
export default DatasContextApi;



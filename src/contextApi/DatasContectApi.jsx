// import { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "../../supabaseClient";

// const dataContext = createContext();

// const DatasContextApi = ({ children }) => {
//     const [selectRoundsTitle, setSelectRoundsTitle] = useState('');
//     const [selectInterview, setSelectInterview] = useState('');
//     const [selectInterviewer, setSelectInterviewer] = useState('');
//     const [videoSelected, setVideoSelected] = useState(false);
//     const [termsAgreed, setTermsAgreed] = useState(false);
//     const [resumeName, setResumeName] = useState("");
//     const [isModalOpen, setIsOpenOpen] = useState(false);
//     const [selectedRound, setSelectedRound] = useState("");
//     const [selectedPosition, setSelectedPosition] = useState("");
//     const [session, setSession] = useState(null);

//     const handleStartPractice = () => {
//         if (
//             resumeName &&
//             selectRoundsTitle &&
//             selectInterview &&
//             selectInterviewer &&
//             videoSelected &&
//             termsAgreed
//         ) {
//             setIsOpenOpen(true);
//         } else {
//             alert("You have not selected all required fields");
//         }
//     };


//     useEffect(() => {
//         supabase.auth.getSession().then(({ data: { session } }) => {
//             setSession(session)
//         })
//         const {
//             data: { subscription },
//         } = supabase.auth.onAuthStateChange((_event, session) => {
//             setSession(session)
//         })
//         return () => subscription.unsubscribe()
//     }, [])

//     console.log(session?.user?.user_metadata?.picture);

//     // console.log(session?.user?.picture);

//     const signOut = async () => {
//         const { error } = await supabase.auth.signOut();
//     }

//     const signUp = async () => {
//         await supabase.auth.signInWithOAuth({
//             provider: "google"
//         })
//     }

//     // if (!session) {
//     //     return (
//     //         <>
//     //             <button onClick={signUp}>Sign in with Google</button>
//     //         </>
//     //     )
//     // }
//     // else {
//     //     return (
//     //         <div>
//     //             <h2>Welcome , {session?.user?.email}</h2>
//     //             <button onClick={signOut}>Sign Out</button>
//     //         </div>
//     //     )
//     // }

//     return (
//         <dataContext.Provider value={{
//             resumeName, setResumeName,
//             selectRoundsTitle, setSelectRoundsTitle,
//             selectInterview, setSelectInterview,
//             selectInterviewer, setSelectInterviewer,
//             videoSelected, setVideoSelected,
//             termsAgreed, setTermsAgreed,
//             handleStartPractice,
//             isModalOpen, setIsOpenOpen,
//             selectedRound, setSelectedRound,
//             selectedPosition, setSelectedPosition,
//             signOut, signUp ,
//             session,
//         }}>
//             {children}
//         </dataContext.Provider>
//     );
// };

// export const useDataContext = () => useContext(dataContext);

// export default DatasContextApi;







import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

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
    const [selectedRound, setSelectedRound] = useState("");
    const [selectedPosition, setSelectedPosition] = useState("");

    const navigate = useNavigate();

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
            // alert("Please signup!");
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
            if (selectedRound === 'Warm Up') {
                navigate('/avatarModal')
            } else if (selectedRound === "Coding") {
                navigate("/codingPage");
            } else {
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
            }}
        >
            {children}
        </dataContext.Provider>
    );
};

export const useDataContext = () => useContext(dataContext);
export default DatasContextApi;


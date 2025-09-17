import "./CodingINterview.css";
import Button from "../../componets/Button";
import { FaSignOutAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../../contants";
import LanguageSelecter from "./LangaugeSelecter";
import Output from "./Output";
import AvatarTalkCoding from "./AvatarTalkInCoding";
import { useDataContext } from "../../contextApi/DatasContectApi";
import Header from "../homePage/header/Header";

const CodingInterview = () => {
    const editorRef = useRef();
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState("javascript");
    const { interviewStarted, startInterview, currentQuestion, questions, navigate, setCurrentQuestion } = useDataContext();

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language);
        setValue(
            CODE_SNIPPETS[language]
        )
    };

    const handleVideoCallExit = () => {
        navigate('/');
    }

    if (!questions || questions.length === 0) {
        return <h4>No questions found</h4>;
    }

    // console.log(questions[0]);

    const { title, subTitle } = questions[0];

    return (
        <>
            <Header />
            <div className="coding-interview">
                {/* Left Sidebar */}
                <div className="coding-interview__sidebar">
                    <h2 className="coding-interview__title">{title}</h2>
                    <span className="coding-interview__round">{subTitle}</span>

                    <div>
                        <Button onClick={startInterview}>Start Question</Button>
                    </div>

                    <p className="coding-interview__instruction">
                        {interviewStarted && currentQuestion < questions.length && (
                            <p>{questions[currentQuestion].que}</p>)}
                    </p>


                    <Button className="coding-interview__exit-btn" onClick={handleVideoCallExit}>
                        <FaSignOutAlt className="exit-icon" />
                        Exit Practice
                    </Button>
                </div>


                {/* Right Panel */}
                <div className="coding-interview__editor-panel">
                    <LanguageSelecter language={language} onSelect={onSelect} />
                    <div className="coding-editor-div">
                        <Editor
                            height="70vh"
                            theme="vs-dark"
                            language={language}
                            defaultValue={CODE_SNIPPETS["javascript"]}
                            onMount={onMount}
                            value={value}
                            onChange={(value) => setValue(value)}
                        />
                    </div>

                    <div className="coding-interview__video-container">
                        <AvatarTalkCoding />
                    </div>


                    <div className="coder-compliler">
                        <Output editorRef={editorRef} language={language} />
                    </div>
                </div>


            </div>

        </>
    );
};

export default CodingInterview;




//  {
//                 !interviewStarted && (
//                     <button
//                         onClick={startInterview}
//                         className='avatar-Btn'
//                     >
//                         Start Interview
//                     </button>
//                 )
//             }

//             <div className='coding-show-current-question'>
//                 {interviewStarted && currentQuestion < questions.length && (
//                     <p>{questions[currentQuestion].que}</p>
//                 )}
//             </div>













{/* <div className="coding-interview__editor-panel">
    <h3 className="coding-interview__editor-title">CODING EDITOR</h3>

    {!started ? (
        <div className="coding-interview__start-placeholder">
            <p>Click "Start Coding" to begin.</p>
            <Button className="coding-interview__start-btn" onClick={() => setStarted(true)}>
                START CODING
            </Button>
        </div>
    ) : (
        <textarea
            className="coding-interview__code-editor"
            placeholder="// Start coding here..."
        />
    )}

    <div className="coding-interview__video-container">
        <img src="https://via.placeholder.com/150" alt="Interviewer" className="coding-interview__video" />
        <span className="coding-interview__video-timer">00:00</span>
    </div>
</div> */}
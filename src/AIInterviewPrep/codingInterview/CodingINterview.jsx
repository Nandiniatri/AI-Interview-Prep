import "./CodingInterview.css";
import Button from "../../componets/Button";
import { FaSignOutAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../../contants";
import LanguageSelecter from "./LangaugeSelecter";
import Output from "./Output";

const CodingInterview = () => {
    const editorRef = useRef();
    const [value, setValue] = useState();
    const [language, setLanguage] = useState("javascript");

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

    return (
        <div className="coding-interview">
            {/* Left Sidebar */}
            <div className="coding-interview__sidebar">
                <h2 className="coding-interview__title">Web Developer</h2>
                <span className="coding-interview__round">Coding</span>

                <div className="coding-interview__tags">
                    <Button className="coding-interview__tag coding-interview__tag--main">MAIN QUESTION</Button>
                    <Button className="coding-interview__tag">JAVASCRIPT</Button>
                </div>

                <p className="coding-interview__instruction">QUESTIONS.............</p>

                <div className="coding-question-div">
                    This is my questions
                </div>

                <Button className="coding-interview__exit-btn">
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
                        defaultValue="// some comment"
                        onMount={onMount}
                        value={value}
                        onChange={(value) => setValue(value)}
                    />
                </div>

                <div className="coding-interview__video-container">
                    <img src="https://via.placeholder.com/150" alt="Interviewer" className="coding-interview__video" />
                    <span className="coding-interview__video-timer">00:00</span>
                </div>


                <div className="coder-compliler">
                    <Output editorRef={editorRef} language={language} />
                </div>
            </div>


        </div>
    );
};

export default CodingInterview;














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
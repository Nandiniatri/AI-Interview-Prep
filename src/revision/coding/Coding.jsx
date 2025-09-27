// import Editor from "@monaco-editor/react";
// import { useState } from "react";

// import { Editor } from "@monaco-editor/react";
// import { useRef, useState } from "react";
import LanguageSelecter from "./LangaugeSelecter";

// function CodeEditor() {
//     const [code, setCode] = useState("// write your code here");

//     const runCode = () => {
//         console.log("Code:", code);
//         alert("Running Code:\n" + code);
//     };

//     return (
//         <div>
//             <Editor
//                 height="300px"
//                 defaultLanguage="javascript"
//                 defaultValue={code}
//                 onChange={(value) => setCode(value)}
//                 theme="vs-dark"
//             />
//             <button onClick={runCode} style={{ marginTop: "10px", padding: "8px 16px" }}>
//                 Execute
//             </button>

//         </div>
//     );
// }

// export default CodeEditor;






// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';

// function CodeEditor() {
//   return (
//     <CodeMirror
//       value="console.log('Hello World');"
//       height="200px"
//       extensions={[javascript({ jsx: true })]}
//     />
//   );
// }


// export default CodeEditor;  













// import React, { useState } from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";

// function CodeEditor() {
//   const [code, setCode] = useState("console.log('Hello World');");
//   const [output, setOutput] = useState("");

//   const runCode = () => {
//     try {
//       // console.log output capture karne ke liye
//       let log = "";
//       const oldLog = console.log;
//       console.log = (...args) => {
//         log += args.join(" ") + "\n";
//       };

//       new Function(code)(); // user code run karna
//       console.log = oldLog;
//       setOutput(log || "✅ Code ran successfully (no output)");
//     } catch (err) {
//       setOutput("❌ Error: " + err.message);
//     }
//   };

//   return (
//     <div>
//       <CodeMirror
//         value={code}
//         height="200px"
//         extensions={[javascript({ jsx: true })]}
//         onChange={(value) => setCode(value)}
//       />
//       <button onClick={runCode}>▶ Run Code</button>
//       <pre style={{ background: "#222", color: "lime", padding: "10px" }}>
//         {output}
//       </pre>
//     </div>
//   );
// }


// export default CodeEditor;













// npm install @monaco-editor/react axios

// import React, { useState } from "react";
// import Editor from "@monaco-editor/react";
// import axios from "axios";

// const CodeEditor = () => {
//   const [code, setCode] = useState("// Write your code here");
//   const [language, setLanguage] = useState("javascript");
//   const [output, setOutput] = useState("");

//   // Language mapping for Judge0
//   const getLanguageId = (lang) => {
//     const map = {
//       javascript: 63, // Node.js
//       python: 71,
//       java: 62,
//       cpp: 54,
//       c: 50,
//     };
//     return map[lang] || 63;
//   };

//   const runCode = async () => {
//     setOutput("⏳ Running...");
//     try {
//       const response = await axios.post(
//         "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
//         {
//           source_code: code,
//           language_id: getLanguageId(language),
//         },
//         {
//           headers: {
//             "content-type": "application/json",
//             "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
//             "X-RapidAPI-Key": "⚡ Yaha apna RapidAPI key daalo ⚡",
//           },
//         }
//       );

//       setOutput(
//         response.data.stdout ||
//         response.data.stderr ||
//         response.data.compile_output ||
//         "⚠ No output"
//       );
//     } catch (error) {
//       setOutput("❌ Error: " + error.message);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Multi-language Online Code Editor</h2>

//       {/* Language Select */}
//       <select
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//         style={{ marginBottom: "10px" }}
//       >
//         <option value="javascript">JavaScript</option>
//         <option value="python">Python</option>
//         <option value="java">Java</option>
//         <option value="cpp">C++</option>
//         <option value="c">C</option>
//       </select>

//       {/* Monaco Editor */}
//       <Editor
//         height="400px"
//         theme="vs-dark"
//         language={language}
//         value={code}
//         onChange={(value) => setCode(value)}
//       />

//       <button onClick={runCode} style={{ marginTop: "10px" }}>
//         ▶ Run Code
//       </button>

//       <h3>Output:</h3>
//       <pre style={{ background: "#222", color: "#0f0", padding: "10px" }}>
//         {output}
//       </pre>
//     </div>
//   );
// };

// export default CodeEditor;




import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../../contants";
import Output from "./Output";


const CodeEditor = () => {
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
    <>
      <LanguageSelecter language={language} onSelect={onSelect} />
      <Editor
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue="// some comment"
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
      />

      <div>
        <Output editorRef={editorRef} language={language}/>
      </div>
    </>
  );
};

export default CodeEditor;






























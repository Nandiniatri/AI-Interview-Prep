// import Editor from "@monaco-editor/react";
// import { useState } from "react";

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




import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

function CodeEditor() {
  const [code, setCode] = useState("console.log('Hello World');");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // console.log output capture karne ke liye
      let log = "";
      const oldLog = console.log;
      console.log = (...args) => {
        log += args.join(" ") + "\n";
      };

      new Function(code)(); // user code run karna
      console.log = oldLog;
      setOutput(log || "✅ Code ran successfully (no output)");
    } catch (err) {
      setOutput("❌ Error: " + err.message);
    }
  };

  return (
    <div>
      <CodeMirror
        value={code}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value) => setCode(value)}
      />
      <button onClick={runCode}>▶ Run Code</button>
      <pre style={{ background: "#222", color: "lime", padding: "10px" }}>
        {output}
      </pre>
    </div>
  );
}


export default CodeEditor;


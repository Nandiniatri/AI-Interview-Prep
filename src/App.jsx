import AIMainFile from './AIInterviewPrep/AIFile'
import CodingInterview from './AIInterviewPrep/codingInterview/CodingINterview';
import RoleRelated from './AIInterviewPrep/roleRelated/RoleRelated';
import WarmInterview from './AIInterviewPrep/warmInterview/WarmInterview';
// import AIChat from './AIInterview/AIInterviewer';
// import AIAssistant from './AIInterview/AIInterviewer';
import './App.css'

function App() {

  // console.log("API Key from env:", import.meta.env.VITE_OPENAI_API_KEY);

  return (
    <>
      <AIMainFile /> 
      {/* <Login /> */}
      {/* <h1>Hello AI</h1> */}
      {/* <AIChat /> */}
      {/* <AIAssistant /> */}
      {/* <WarmInterview /> */}
      {/* <CodingInterview /> */}
      {/* <RoleRelated /> */}
    </>
  )
}

export default App;

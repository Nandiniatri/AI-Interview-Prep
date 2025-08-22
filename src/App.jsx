import AIMainFile from './AIInterviewPrep/AIFile';
import CodingInterview from './AIInterviewPrep/codingInterview/CodingINterview';
import RoleRelated from './AIInterviewPrep/roleRelated/RoleRelated';
import WarmInterview from './AIInterviewPrep/warmInterview/WarmInterview';
import AIChat from './AIInterview/AIInterviewer';
import AIAssistant from './AIInterview/AIInterviewer';
import './App.css';
import SignUpForm from './componets/SignupForm/SignupForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AIMainFile />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;



{/* <Login /> */ }
{/* <h1>Hello AI</h1> */ }
{/* <AIChat /> */ }
{/* <AIAssistant /> */ }
{/* <WarmInterview /> */ }
{/* <CodingInterview /> */ }
{/* <RoleRelated /> */ }
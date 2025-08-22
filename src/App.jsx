import AIMainFile from './AIInterviewPrep/AIFile';
import CodingInterview from './AIInterviewPrep/codingInterview/CodingINterview';
import RoleRelated from './AIInterviewPrep/roleRelated/RoleRelated';
import WarmInterview from './AIInterviewPrep/warmInterview/WarmInterview';
import AIChat from './AIInterview/AIInterviewer';
import AIAssistant from './AIInterview/AIInterviewer';
import './App.css';
import LoginInSignUpForm from './componets/SignupForm/SignupForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InsideSignUp from './componets/SignupForm/insideSignUp/InsideSignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AIMainFile />} />
        <Route path="/login" element={<LoginInSignUpForm />} />
        <Route path="/signup" element={<InsideSignUp />} />
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
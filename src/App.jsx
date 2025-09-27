import AIMainFile from './AIInterviewPrep/AIFile';
import './App.css';
import LoginInSignUpForm from './componets/SignupForm/SignupForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InsideSignUp from './componets/SignupForm/insideSignUp/InsideSignUp';
import AvatarPage from './AIInterviewPrep/avatarPage/AvatarPage';
import CodingInterview from './AIInterviewPrep/codingInterview/CodingINterview';
import AnalysisPage from './AIInterviewPrep/avatarPage/analysisPage/AnalysisPage';


function App() {
  return (
      <Routes>
        <Route path="/" element={<AIMainFile />} />
        <Route path="/login" element={<LoginInSignUpForm />} />
        <Route path="/signup" element={<InsideSignUp />} />
        <Route path="/avatarModal" element={<AvatarPage />} />
        <Route path="/codingPage" element={<CodingInterview />} />
        <Route path="/analysisPage" element={<AnalysisPage />} />
      </Routes>
  );
}

export default App;













// import './App.css';
// // import AIMainFile from './AIInterviewPrep/AIFile';
// // import CodingInterview from './AIInterviewPrep/codingInterview/CodingINterview';
// // import RoleRelated from './AIInterviewPrep/roleRelated/RoleRelated';
// // import WarmInterview from './AIInterviewPrep/warmInterview/WarmInterview';
// // import AIChat from './AIInterview/AIInterviewer';
// // import AIAssistant from './AIInterview/AIInterviewer';
// // import LoginInSignUpForm from './componets/SignupForm/SignupForm';
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import InsideSignUp from './componets/SignupForm/insideSignUp/InsideSignUp';
// // import { Auth } from '@supabase/auth-ui-react'
// // import { ThemeSupa } from '@supabase/auth-ui-shared'
// // import { useEffect, useState } from 'react';
// // import { supabase } from '../supabaseClient';
// // import ReadResume from './revision/Revision';
// // import AITalk from './revision/AITalk/AITalk';
// // import TalkingMouth from './revision/AITalk/AITalk';
// // import AvatarViewer from './revision/AITalk/AITalk';
// // import AiTalkAgain from './revision/AiTalkAgain/AiTalkAgain';
// // import VoiceListener from './revision/AiTalkAgain/speakToText/SpeakToText';
// // import AvatarPage from './AIInterviewPrep/avatarPage/AvatarPage';
// // import CodeEditor from './revision/coding/Coding';
// // import Output from './revision/coding/Output';
// import AvatarTalkCoding from './AIInterviewPrep/codingInterview/AvatarTalkInCoding';

// function App() {
//   return (
//     <>
//       {/* <ReadResume /> */}
//       {/* <AITalk /> */}
//       {/* <TalkingMouth /> */}
//       {/* <AvatarViewer /> */}
//       {/* <AiTalkAgain /> */}
//       {/* <VoiceListener /> */}
//       {/* <AvatarPage /> */}
//       {/* <CodingInterview /> */}
//       {/* <CodeEditor /> */}
//       {/* <Output /> */}
//       <AvatarTalkCoding />
//     </>
//   );
// }

// export default App;




// const App = () => {

//   return (
//     <div>
//         <ResumeUpload />
//     </div>
//   );
// };

// export default App;



































{/* <Login /> */ }
{/* <h1>Hello AI</h1> */ }
{/* <AIChat /> */ }
{/* <AIAssistant /> */ }
{/* <WarmInterview /> */ }
{/* <CodingInterview /> */ }
{/* <RoleRelated /> */ }




// const [session, setSession] = useState(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//     })
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })
//     return () => subscription.unsubscribe()
//   }, [])

//   console.log(session?.user?.user_metadata?.picture);

//   // console.log(session?.user?.picture);

//   const signOut = async() => {
//     const {error} = await supabase.auth.signOut();
//   }

//   const signUp = async() => {
//     await supabase.auth.signInWithOAuth({
//       provider:"google"
//     })
//   }

//   if (!session) {
//     return (
//       <>
//         <button onClick={signUp}>Sign in with Google</button>
//       </>
//     )
//   }
//   else {
//     return (
//       <div>
//         <h2>Welcome , {session?.user?.email}</h2>
//         <button onClick={signOut}>Sign Out</button>
//       </div>
//     )
//   }
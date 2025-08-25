// import AIMainFile from './AIInterviewPrep/AIFile';
// import CodingInterview from './AIInterviewPrep/codingInterview/CodingINterview';
// import RoleRelated from './AIInterviewPrep/roleRelated/RoleRelated';
// import WarmInterview from './AIInterviewPrep/warmInterview/WarmInterview';
// import AIChat from './AIInterview/AIInterviewer';
// import AIAssistant from './AIInterview/AIInterviewer';
// import './App.css';
// import LoginInSignUpForm from './componets/SignupForm/SignupForm';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import InsideSignUp from './componets/SignupForm/insideSignUp/InsideSignUp';
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'
// import { useEffect, useState } from 'react';
// import { supabase } from '../supabaseClient';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AIMainFile />} />
//         <Route path="/login" element={<LoginInSignUpForm />} />
//         <Route path="/signup" element={<InsideSignUp />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





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
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

function App() {
  return (
    <>
    </>
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
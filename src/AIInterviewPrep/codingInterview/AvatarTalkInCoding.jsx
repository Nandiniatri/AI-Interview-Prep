// import './CodingINterview.css';

// import { useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useEffect, useRef, useState } from "react";

// const AvatarModel = ({ url, meshRef }) => {
//     const { scene } = useGLTF(url);

//     return (
//         <primitive ref={meshRef} object={scene} scale={4} position={[0, -6, 2.2]} />
//     );
// };

// let lipsyncInterval = null;

// const AvatarTalkCoding = () => {
//     const meshRef = useRef();
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [interviewStarted, setInterviewStarted] = useState(false);
//     const [questions, setQuestions] = useState([]);
//     const debug = true; 

//     const fetchAllTheQuestions = async () => {
//         const response = await fetch('/data/AIQuestions/Coding.json');
//         const result = await response.json();
//         setQuestions(result);
//     }

//     useEffect(() => {
//         fetchAllTheQuestions();
//     }, []);

//     // 🎤 Speech Recognition setup
//     const SpeechRecognition =
//         window.SpeechRecognition || window.webkitSpeechRecognition;
//     const recognition = SpeechRecognition ? new SpeechRecognition() : null;

//     if (recognition) {
//         recognition.continuous = false;
//         recognition.lang = "en-US";
//         recognition.interimResults = false;
//     }

//     const speakQuestion = (index) => {
//         if (index >= questions.length) {
//             console.log("✅ Interview finished!");
//             return;
//         }

//         const text = questions[index].que;
//         const utterance = new SpeechSynthesisUtterance(text);

//         //Stop old speech and lipsync
//         window.speechSynthesis.cancel();
//         if(lipsyncInterval){
//             clearInterval(lipsyncInterval);
//             lipsyncInterval = null;
//         }

//         //ye hai new speech start karne ke liye
//         window.speechSynthesis.speak(utterance);

//         // debug morph targets
//         if (debug && meshRef.current) {
//             meshRef.current.traverse((child) => {
//                 if (child.morphTargetDictionary) {
//                     console.log("Morph Targets:", child.morphTargetDictionary);
//                 }
//             });
//         }

//         // lipsync effect
//         const duration = text.split(" ").length * 0.3 * 1000;
//         // console.log(duration);

//         const start = Date.now();

//         const interval = setInterval(() => {
//             const elapsed = Date.now() - start;
//             if (elapsed > duration) {
//                 clearInterval(interval);
//                 if (meshRef.current) {
//                     meshRef.current.traverse((child) => {
//                         if (child.morphTargetInfluences) {
//                             child.morphTargetInfluences[0] = 0;
//                         }
//                     });
//                 }
//                 return;
//             }

//             if (meshRef.current) {
//                 meshRef.current.traverse((child) => {
//                     if (child.morphTargetInfluences) {
//                         child.morphTargetInfluences[0] = Math.random();
//                     }
//                 });
//             }
//         }, 100);

//         // ✅ Speech end hone ke baad recognition safe start
//         utterance.onend = () => {
//             if (recognition) {
//                 try {
//                     recognition.stop();
//                     recognition.start();
//                 } catch (err) {
//                     console.warn("Recognition restart skipped:", err.message);
//                 }
//             }
//         };
//     };

//     if (recognition) {
//         recognition.onresult = (event) => {
//             const transcript = event.results[0][0].transcript;
//             console.log("🗣️ User Answer:", transcript);
//             setCurrentQuestion((prev) => prev + 1);
//         };

//         recognition.onspeechend = () => {
//             recognition.stop();
//         };

//         recognition.onerror = (event) => {
//             console.error("Recognition error:", event.error);
//             recognition.stop();
//         };
//     }

//     const startInterview = () => {
//         setInterviewStarted(true);
//         setCurrentQuestion(0);
//     };

//     // ✅ Har baar currentQuestion change hote hi ye trigger hoga
//     useEffect(() => {
//         if (interviewStarted && currentQuestion < questions.length) {
//             speakQuestion(currentQuestion);
//         }
//     }, [currentQuestion, interviewStarted, questions]);

//     console.log(questions);

//     return (
//         <div className='canvas-main-div'>
//             <Canvas
//                 style={{ width: "12%", height: "15vh" , border:'solid'}}
//                 camera={{ position: [0, 0, 5], fov: 50 }}
//                 className="canvas-avatar"
//             >
//                 <ambientLight intensity={1} />
//                 <directionalLight position={[0, 0, 5]} />
//                 <AvatarModel
//                     url="/data/Avatar1/68b573a33033dedc62d80935.glb"
//                     meshRef={meshRef}
//                 />
//                 <OrbitControls enableZoom={false} />
//             </Canvas>
//             {
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
//         </div>
//     );
// };

// export default AvatarTalkCoding;




import './CodingINterview.css';

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useDataContext } from '../../contextApi/DatasContectApi';

const AvatarModel = ({ url, meshRef, scale = 4, position = [0, -6, 2.2] }) => {
    const { scene } = useGLTF(url);

    return (
        <primitive
            ref={meshRef}
            object={scene}
            scale={scale}
            position={position}
        />
    );
};

const AvatarOnly = () => {
    const { meshRef } = useDataContext();

    return (
        <div className='canvas-main-div'>
            <Canvas
                style={{ width: '160px', height: '100px' }}
                camera={{ position: [0, 0, 5], fov: 50 }}
                className="coding-canvas-avatar"
            >
                <ambientLight intensity={1} />
                <directionalLight position={[0, 0, 5]} />
                <AvatarModel
                    url="/data/Avatar1/68b573a33033dedc62d80935.glb"
                    meshRef={meshRef}
                />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default AvatarOnly;

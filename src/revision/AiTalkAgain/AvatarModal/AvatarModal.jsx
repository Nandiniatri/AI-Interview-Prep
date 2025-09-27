import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import "./AvatarModal.css";

const AvatarModel = ({ url, meshRef }) => {
    const { scene } = useGLTF(url); 

    return (
        <primitive ref={meshRef} object={scene} scale={4} position={[0, -5.6, 0]} />
    );
};

const AvatarViewer = () => {
    const meshRef = useRef();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [interviewStarted, setInterviewStarted] = useState(false);
    const [questions , setQuestions] = useState([]);
    const debug = true;

    const fetchAllTheQuestions = async() =>{
        const response = await fetch('/data/AIQuestions/WarmUp.json');
        const result = await response.json();
        setQuestions(result);
    }

    useEffect(() => {
        fetchAllTheQuestions();
    },[])

    // 🎤 Speech Recognition setup
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = SpeechRecognition ? new SpeechRecognition() : null;

    if (recognition) {
        recognition.continuous = false;
        recognition.lang = "en-US";
        recognition.interimResults = false;
    }

    const speakQuestion = (index) => {
        if (index >= questions.length) {
            console.log("✅ Interview finished!");
            return;
        }

        const text = questions[index].que;
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.cancel(); // clear pending speeches
        window.speechSynthesis.speak(utterance);

        // debug morph targets
        if (debug && meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.morphTargetDictionary) {
                    console.log("Morph Targets:", child.morphTargetDictionary);
                }
            });
        }

        // lipsync effect
        const duration = text.split(" ").length * 0.5 * 1000;
        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            if (elapsed > duration) {
                clearInterval(interval);
                if (meshRef.current) {
                    meshRef.current.traverse((child) => {
                        if (child.morphTargetInfluences) {
                            child.morphTargetInfluences[0] = 0;
                        }
                    });
                }
                return;
            }

            if (meshRef.current) {
                meshRef.current.traverse((child) => {
                    if (child.morphTargetInfluences) {
                        child.morphTargetInfluences[0] = Math.random();
                    }
                });
            }
        }, 100);

        // ✅ Speech end hone ke baad recognition safe start
        utterance.onend = () => {
            if (recognition) {
                try {
                    recognition.stop();
                    recognition.start();
                } catch (err) {
                    console.warn("Recognition restart skipped:", err.message);
                }
            }
        };
    };

    if (recognition) {
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log("🗣️ User Answer:", transcript);

            // ✅ Answer ke baad turant next question
            setCurrentQuestion((prev) => {
                const nextIndex = prev + 1;
                if (nextIndex < questions.length) {
                    setTimeout(() => speakQuestion(nextIndex), 300);
                }
                return nextIndex;
            });
        };

        recognition.onspeechend = () => {
            recognition.stop();
        };

        recognition.onerror = (event) => {
            console.error("Recognition error:", event.error);
            recognition.stop();
        };
    }

    const startInterview = () => {
        setInterviewStarted(true);
        setCurrentQuestion(0);
        speakQuestion(0);
    };

    return (
        <div>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                className="canvas-avatar"
            >
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} />
                <AvatarModel
                    url="/data/Avatar1/68b573a33033dedc62d80935.glb"
                    meshRef={meshRef}
                />
                <OrbitControls />
            </Canvas>

            {!interviewStarted && (
                <button
                    onClick={startInterview}
                    style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        background: "#333",
                        color: "#fff",
                    }}
                >
                    Start Interview
                </button>
            )}
        </div>
    );
};

export default AvatarViewer;

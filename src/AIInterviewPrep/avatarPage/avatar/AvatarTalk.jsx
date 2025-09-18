import './AvatarTalk.css';
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useDataContext } from '../../../contextApi/DatasContectApi';
import Button from '../../../componets/Button';
import { RotateCcw } from "lucide-react";

const AvatarModel = ({ url, meshRef }) => {
    const { scene } = useGLTF(url);
    return (
        <primitive ref={meshRef} object={scene} scale={4} position={[0, -6, 2.2]} />
    );
};

let lipsyncInterval = null;

const AvatarTalk = () => {
    const meshRef = useRef();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [interviewStarted, setInterviewStarted] = useState(true);
    const debug = true;
    const { questions , handleRepeat} = useDataContext();

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
        if (index >= questions.length) return;

        const text = questions[index].que;
        const utterance = new SpeechSynthesisUtterance(text);

        // ❌ Stop old speech and lipsync
        window.speechSynthesis.cancel();
        if (lipsyncInterval) {
            clearInterval(lipsyncInterval);
            lipsyncInterval = null;
        }

        // ✅ Start new speech
        window.speechSynthesis.speak(utterance);
        const start = Date.now();

        // Debug morph targets (optional)
        if (debug && meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.morphTargetDictionary) {
                    console.log("Morph Targets:", child.morphTargetDictionary);
                }
            });
        }

        // 🎭 Lipsync effect
        const duration = text.split(" ").length * 0.3 * 1000;

        lipsyncInterval = setInterval(() => {
            const elapsed = Date.now() - start;
            if (elapsed > duration) {
                clearInterval(lipsyncInterval);
                lipsyncInterval = null;
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

        // ✅ On speech end → restart recognition
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

    // 🎤 Recognition handlers
    if (recognition) {
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log("🗣️ User Answer:", transcript);
            setCurrentQuestion((prev) => prev + 1);
        };

        recognition.onspeechend = () => recognition.stop();
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

    // ✅ Har baar currentQuestion change hote hi avatar bolega
    useEffect(() => {
        if (interviewStarted && currentQuestion < questions.length) {
            speakQuestion(currentQuestion);
        }
    }, [currentQuestion, interviewStarted, questions]);

    // 🔁 Repeat Question button handler
    // const handleRepeat = () => {
    //     if (questions.length > 0) {
    //         speakQuestion(currentQuestion); 
    //     }
    // };

    return (
        <div className='canvas-main-div'>
            <Canvas
                style={{ width: "100%", height: "100%" }}
                camera={{ position: [0, 0, 5], fov: 50 }}
                className="canvas-avatar"
            >
                <ambientLight intensity={1} />
                <directionalLight position={[0, 0, 5]} />
                <AvatarModel
                    url="/data/Avatar1/68b573a33033dedc62d80935.glb"
                    meshRef={meshRef}
                />
                <OrbitControls enableZoom={false} />
            </Canvas>

            {
                !interviewStarted && (
                    <button
                        onClick={startInterview}
                        className='avatar-Btn'
                    >
                        Start Interview
                    </button>
                )
            }

            <div className='show-current-question'>
                {currentQuestion < questions.length ? (
                    <>
                        <div>
                            <p>{questions[currentQuestion].que}</p>
                            <Button onClick={handleRepeat} className="repeat-btn">
                                <RotateCcw size={20} />
                            </Button>
                        </div>

                        <div>
                            <Button
                                className="avatar-next-btn"
                                onClick={() => setCurrentQuestion(prev => prev + 1)}
                            >
                                Next Question
                            </Button>
                        </div>
                    </>
                ) : (
                    <p>✅ Interview Finished!</p>
                )}
            </div>
        </div>
    );
};

export default AvatarTalk;

// import { useGLTF } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import "./AvatarModal.css";
// import { useEffect, useRef } from "react";

// const AvatarModel = ({ url }) => {
//     const { scene } = useGLTF(url);
//     const meshRef = useRef();

//     console.log(meshRef);
//     console.log(scene);

//     useFrame(({ clock }) => {
//         if (meshRef.current) {
//             meshRef.current.traverse((child) => {
//                 if (child.morphTargetInfluences) {
//                     const time = clock.getElapsedTime();
//                     const mouthValue = (Math.sin(time * 10) + 1) / 2;
//                     child.morphTargetInfluences[0] = mouthValue;
//                 }
//             });
//         }
//     });

//     console.log(meshRef.current);

//     useEffect(() => {
//         if (meshRef.current) {
//             console.log("Avatar Loaded:", meshRef.current);
//             meshRef.current.traverse((child) => {
//                 if (child.morphTargetDictionary) {
//                     console.log("Morph Targets:", child.morphTargetDictionary);
//                 }
//             });
//         }
//     }, [scene]);

//     return (
//         // <primitive object={scene} scale={3} position={[0, -4, 0]} />
//         <primitive ref={meshRef} object={scene} scale={3.4} position={[0, -4, 0]} />
//     )
// }


// const AvatarViewer = () => {

//     const handleSpeak = () => {
//         const text = "Hello, Nandini Atri. How are you?";
//         const utterance = new SpeechSynthesisUtterance(text);
//         console.log(utterance);

//         const voices = window.speechSynthesis.getVoices();
//         console.log(voices.length);

//         if (voices.length > 0) {
//             console.log(utterance.voice = voices[0]);
//             utterance.voice = voices[0]
//         };

//         window.speechSynthesis.speak(utterance);
//     };

//     return (
//         <div>
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="canvas-avatar">
//                 <ambientLight intensity={1} />
//                 <directionalLight position={[5, 5, 5]} />
//                 <AvatarModel url='/data/Avatar1/68b573a33033dedc62d80935.glb' />
//                 <OrbitControls />
//             </Canvas>
//             <button
//                 onClick={handleSpeak}
//                 style={{
//                     position: "absolute",
//                     top: "20px",
//                     left: "20px",
//                     padding: "10px 20px",
//                     fontSize: "16px",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     background: "#333",
//                     color: "#fff"
//                 }}
//             >
//                 Speak Text
//             </button>
//         </div>
//     )
// }

// export default AvatarViewer;















// import { useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import "./AvatarModal.css";
// import { useEffect, useRef } from "react";

// const AvatarModel = ({ url, meshRef }) => {
//     const { scene } = useGLTF(url);

//     // useEffect(() => {
//     //     if (meshRef.current) {
//     //         console.log("Avatar Loaded:", meshRef.current);
//     //         meshRef.current.traverse((child) => {
//     //             if (child.morphTargetDictionary) {
//     //                 console.log("Morph Targets:", child.morphTargetDictionary);
//     //             }
//     //         });
//     //     }
//     // }, [scene, meshRef]);

//     return (
//         <primitive
//             ref={meshRef}
//             object={scene}
//             scale={4}
//             position={[0, -5.6, 0]}
//         />
//     );
// };

// const AvatarViewer = () => {
//     const meshRef = useRef();

//     const handleSpeak = () => {
//         const text = "Hello, Nandini Atri. How are you?";
//         const utterance = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(utterance);

//         const duration = text.split(" ").length * 0.4 * 1000;
//         const start = Date.now();

//         const interval = setInterval(() => {
//             const elapsed = Date.now() - start;
//             if (elapsed > duration) {
//                 clearInterval(interval);
//                 if (meshRef.current) {
//                     meshRef.current.traverse((child) => {
//                         if (child.morphTargetInfluences) {
//                             child.morphTargetInfluences[0] = 0; // mouth close
//                         }
//                     });
//                 }
//                 return;
//             }

//             //isme closed and open lips animation isse ho raha hai.
//             if (meshRef.current) {
//                 meshRef.current.traverse((child) => {
//                     if (child.morphTargetInfluences) {
//                         child.morphTargetInfluences[0] = Math.random();
//                     }
//                 });
//             }
//         }, 100);
//     };

//     return (
//         <div>
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="canvas-avatar">
//                 <ambientLight intensity={1} />
//                 <directionalLight position={[5, 5, 5]} />
//                 <AvatarModel url="/data/Avatar1/68b573a33033dedc62d80935.glb" meshRef={meshRef} />
//                 <OrbitControls />
//             </Canvas>

//             <button
//                 onClick={handleSpeak}
//                 style={{
//                     position: "absolute",
//                     top: "20px",
//                     left: "20px",
//                     padding: "10px 20px",
//                     fontSize: "16px",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     background: "#333",
//                     color: "#fff",
//                 }}
//             >
//                 Speak Text
//             </button>
//         </div>
//     );
// };

// export default AvatarViewer;














import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import "./AvatarModal.css";

const AvatarModel = ({ url, meshRef }) => {
    const { scene } = useGLTF(url);

    return (
        <primitive
            ref={meshRef}
            object={scene}
            scale={4}
            position={[0, -5.6, 0]}
        />
    );
};

const AvatarViewer = () => {
    const meshRef = useRef();
    const debug = true;
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        { id: 1, que: "Hello Nandini , How are you ?" },
        { id: 2, que: "That's good to known" },
        { id: 3, que: "So, let's start the interview." },
        { id: 4, que: "ok , let's continue" }
    ]

    const handleSpeak = () => {
        const text = "Hello Nandini Atri.";
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);

        if (debug && meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.morphTargetDictionary) {
                    console.log("Morph Targets:", child.morphTargetDictionary);
                }
            });
        }

        const duration = text.split(" ").length * 0.5 * 1000; // approx duration
        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            console.log(elapsed);

            if (elapsed > duration) {
                clearInterval(interval);
                if (meshRef.current) {
                    meshRef.current.traverse((child) => {
                        if (child.morphTargetInfluences) {
                            child.morphTargetInfluences[0] = 0; // close mouth
                        }
                    });
                }
                return;
            }

            // Random lips open/close
            if (meshRef.current) {
                meshRef.current.traverse((child) => {
                    if (child.morphTargetInfluences) {
                        child.morphTargetInfluences[0] = Math.random();
                    }
                });
            }
        }, 100);
    };

    return (
        <div>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="canvas-avatar">
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} />
                <AvatarModel url="/data/Avatar1/68b573a33033dedc62d80935.glb" meshRef={meshRef} />
                <OrbitControls />
            </Canvas>

            <button
                onClick={handleSpeak}
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
                Speak Text
            </button>
        </div>
    );
};

export default AvatarViewer;

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./AvatarModal.css";
import { useRef } from "react";

const AvatarModel = ({ url }) => {
    const { scene } = useGLTF(url);
    const meshRef = useRef();

    console.log(meshRef);
    console.log(scene);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.morphTargetInfluences) {
                    const time = clock.getElapsedTime();
                    const mouthValue = (Math.sin(time * 2) + 1) / 2; // 0 → 1
                    child.morphTargetInfluences[0] = mouthValue;
                }
            });
        }
    });

    console.log(meshRef.current);


    return (
        <primitive object={scene} scale={3} position={[0, -4, 0]} />
    )
}


const AvatarViewer = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="canvas-avatar">
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} />
            <AvatarModel url='/data/Avatar1/68b573a33033dedc62d80935.glb' />
            <OrbitControls />
        </Canvas>
    )
}

export default AvatarViewer;













// import React, { Suspense, useEffect, useRef } from "react";
// import * as THREE from "three";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Environment, ContactShadows, useGLTF } from "@react-three/drei";

// // ---------- Avatar with LipSync ----------
// function Avatar({ url, mouthOpenRef }) {
//     const { scene } = useGLTF(url);
//     const targetsRef = useRef([]);

//     useEffect(() => {
//         const found = [];
//         scene.traverse((obj) => {
//             if (obj.isSkinnedMesh && obj.morphTargetDictionary && obj.morphTargetInfluences) {
//                 const dict = obj.morphTargetDictionary;
//                 const key = ["jawOpen", "MouthOpen", "mouthOpen", "viseme_aa", "aa"].find(
//                     (k) => dict[k] !== undefined
//                 );
//                 if (key) found.push({ mesh: obj, index: dict[key] });
//             }
//         });
//         targetsRef.current = found;
//     }, [scene]);

//     useFrame(() => {
//         const open = THREE.MathUtils.clamp(mouthOpenRef.current || 0, 0, 1);
//         targetsRef.current.forEach(({ mesh, index }) => {
//             mesh.morphTargetInfluences[index] = open;
//         });
//     });

//     return <primitive object={scene} scale={3} position={[0, -3.2, 0]} />;
// }

// // ---------- LipSync Controller ----------
// function LipSyncController({ connectTo, mouthOpenRef }) {
//     const analyserRef = useRef(null);
//     const rafRef = useRef(0);
//     const sourceRef = useRef(null);

//     useEffect(() => {
//         const AC = window.AudioContext || window.webkitAudioContext;
//         const ctx = new AC();
//         const analyser = ctx.createAnalyser();
//         analyser.fftSize = 2048;
//         analyser.smoothingTimeConstant = 0.85;
//         analyserRef.current = analyser;

//         const el = connectTo.current;
//         if (!el) return;

//         if (!sourceRef.current) {
//             sourceRef.current = ctx.createMediaElementSource(el);
//             sourceRef.current.connect(analyser);
//             analyser.connect(ctx.destination);
//         }

//         const data = new Uint8Array(analyser.fftSize);
//         const loop = () => {
//             analyser.getByteTimeDomainData(data);
//             let sum = 0;
//             for (let i = 0; i < data.length; i++) {
//                 const v = (data[i] - 128) / 128;
//                 sum += v * v;
//             }
//             const rms = Math.sqrt(sum / data.length);
//             mouthOpenRef.current = THREE.MathUtils.clamp((rms - 0.02) * 8, 0, 1);
//             rafRef.current = requestAnimationFrame(loop);
//         };
//         loop();

//         return () => {
//             cancelAnimationFrame(rafRef.current);
//             try {
//                 analyser.disconnect();
//                 sourceRef.current && sourceRef.current.disconnect();
//                 ctx.close();
//                 sourceRef.current = null;
//             } catch { }
//         };
//     }, [connectTo, mouthOpenRef]);

//     return null;
// }

// // ---------- Main ----------
// export default function AvatarModal() {
//     const GLB_URL = "/data/Avatar1/68b573a33033dedc62d80935.glb";
//     const mouthOpenRef = useRef(0);
//     const audioRef = useRef(null);

//     const speak = () => {
//         if (audioRef.current) {
//             audioRef.current.play();
//         }
//     };

//     return (
//         <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//             <button
//                 onClick={speak}
//                 style={{
//                     padding: "10px 20px",
//                     fontSize: "18px",
//                     background: "#6c5ce7",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "8px",
//                     cursor: "pointer"
//                 }}
//             >
//                 Speak
//             </button>

//             {/* Hidden audio (text-to-speech pre-recorded file) */}
//             <audio ref={audioRef} src="/data/audios/aryNandini.mp3" preload="auto" />

//             {/* Avatar */}
//             <div style={{ width: "100%", height: "80vh" }}>
//                 <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
//                     <ambientLight intensity={1} />
//                     <directionalLight position={[5, 5, 5]} intensity={1} />
//                     <Suspense fallback={null}>
//                         <Avatar url={GLB_URL} mouthOpenRef={mouthOpenRef} />
//                         <Environment preset="city" />
//                         <ContactShadows position={[0, -1.45, 0]} opacity={0.35} blur={2.5} />
//                     </Suspense>
//                     <OrbitControls />
//                     <LipSyncController connectTo={audioRef} mouthOpenRef={mouthOpenRef} />
//                 </Canvas>
//             </div>
//         </div>
//     );
// }


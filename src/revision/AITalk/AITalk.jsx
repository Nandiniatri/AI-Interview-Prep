
// import { useEffect, useRef, useState } from "react";

// export default function TalkingMouth() {
//     const [level, setLevel] = useState(0);        // 0..1
//     const rafRef = useRef();
//     const audioRef = useRef({ ctx: null, analyser: null, src: null });

//     useEffect(() => {
//         let mounted = true;

//         async function setup() {
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             const ctx = new (window.AudioContext || window.webkitAudioContext)();
//             const src = ctx.createMediaStreamSource(stream);
//             const analyser = ctx.createAnalyser();
//             analyser.fftSize = 2048;
//             src.connect(analyser);

//             audioRef.current = { ctx, analyser, src };

//             const data = new Uint8Array(analyser.frequencyBinCount);

//             const loop = () => {
//                 if (!mounted) return;
//                 analyser.getByteTimeDomainData(data);
//                 // RMS energy → 0..1
//                 let sum = 0;
//                 for (let i = 0; i < data.length; i++) {
//                     const v = (data[i] - 128) / 128;
//                     sum += v * v;
//                 }
//                 const rms = Math.sqrt(sum / data.length);
//                 // smooth + clamp
//                 const smoothed = Math.min(1, Math.max(0, rms * 6));
//                 setLevel((prev) => prev * 0.7 + smoothed * 0.3);
//                 rafRef.current = requestAnimationFrame(loop);
//             };
//             loop();
//         }

//         setup().catch(console.error);
//         return () => {
//             mounted = false;
//             cancelAnimationFrame(rafRef.current);
//             try { audioRef.current.ctx?.close(); } catch { }
//         };
//     }, []);

//     // Map 0..1 to mouth height
//     const mouthOpen = 8 + level * 40;

//     return (
//         <div style={{ display: "grid", placeItems: "center", height: "60vh" }}>
//             {/* Simple face */}
//             <svg width="220" height="220" viewBox="0 0 220 220">
//                 <circle cx="110" cy="110" r="100" fill="#ffdca8" />
//                 <circle cx="75" cy="90" r="8" fill="#222" />
//                 <circle cx="145" cy="90" r="8" fill="#222" />
//                 {/* Mouth: a rounded rect that opens by height */}
//                 <rect
//                     x={90}
//                     y={120 - mouthOpen / 2}
//                     width="40"
//                     height={mouthOpen}
//                     rx="20"
//                     fill="#b30000"
//                 />
//                 {/* Lip outline */}
//                 <rect
//                     x="80"
//                     y="120"
//                     width="60"
//                     height="4"
//                     rx="2"
//                     fill="#7a2a2a"
//                     opacity="0.6"
//                 />
//             </svg>
//         </div>
//     );
// }








// const AITalk = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default AITalk;




import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import './AITalk.css';

function AvatarModel() {
  // local file ka path
  const { scene } = useGLTF("/data/avatar/avatar.glb");
  console.log(scene);
  

  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
}

export default function AvatarViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 1, 3] }} className="canvas-AvatarModal">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}




// const AITalk = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default AITalk;




// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
// import './AITalk.css';

// function AvatarModel() {
//     // local file ka path
//     const { scene } = useGLTF("/data/avatar/avatar.glb");
//     console.log(scene);


//     return <primitive object={scene} scale={3} position={[0, -1, 0]} />;
// }

// export default function AvatarViewer() {
//     return (
//         <div style={{ width: "100%", height: "500px" }}>
//             <Canvas camera={{ position: [0, 1, 3] }} className="canvas-AvatarModal">
//                 <ambientLight intensity={0.5} />
//                 <directionalLight position={[2, 2, 2]} />
//                 <Suspense fallback={null}>
//                     <AvatarModel />
//                 </Suspense>
//                 <OrbitControls />
//                 <Environment preset="sunset" />
//             </Canvas>
//         </div>
//     );
// }










import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import './AITalk.css';

function AvatarModel() {
    const { scene } = useGLTF("/data/avatar/avatar.glb");
    return (
        <primitive
            object={scene}
            scale={2.5}       // thoda bada
            position={[0, -2, 0]} // neeche shift kiya taki face upar aa jaye
        />
    );
}

export default function AvatarViewer() {
    return (
        <div style={{ width: "100%", height: "500px" }}>
            <Canvas camera={{ position: [0, 2, 5] }} className="canvas-AvatarModal">
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={null}>
                    <AvatarModel />
                </Suspense>
                <OrbitControls target={[0, 1, 0]} /> {/* camera ka focus face ke aas paas */}
                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
}


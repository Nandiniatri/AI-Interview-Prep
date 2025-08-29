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










// import React, { Suspense } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { Environment, OrbitControls, useGLTF, useTexture } from "@react-three/drei";
// import './AITalk.css';

// function AvatarModel() {
//     const { scene } = useGLTF("/data/avatar/avatar.glb");
//     const texture = useTexture("/data/textures/background.jpg");
//     console.log(texture);
//     const viewport = useThree((state) => state.viewport)
//     console.log(viewport);


//     return (
//         <primitive
//             object={scene}
//             scale={6}
//             position={[0, -7, 0]}
//         />
//     );
// }

// export default function AvatarViewer() {
//     return (
//         <div style={{ width: "100%", height: "500px" }}>
//             <Canvas camera={{ position: [0, 2, 5] }} className="canvas-AvatarModal">
//                 <ambientLight intensity={0.5} />
//                 <directionalLight position={[2, 2, 2]} />
//                 <Suspense fallback={null}>
//                     <AvatarModel />
//                 </Suspense>
//                 <OrbitControls target={[0, 1, 0]} /> {/* camera ka focus face ke aas paas */}
//                 <Environment preset="sunset" />
//                 <mesh>
//                     <planeGeometry args={[viewport.width, viewport.height]} />
//                     <meshBasicMaterial map={texture} />
//                 </mesh>
//             </Canvas>
//         </div>
//     );
// }












import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import './AITalk.css';

function AvatarModel() {
  const { scene } = useGLTF("/data/avatar/avatar.glb");

  return (
    <primitive
      object={scene}
      scale={6}
      position={[0, -7, 0]}
    />
  );
}

export default function AvatarViewer() {
  const texture = useLoader(TextureLoader, "/data/textures/background.jpg");

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 2, 5] }} className="canvas-AvatarModal">
        {/* Background image */}
        <primitive attach="background" object={texture} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        {/* Model */}
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>

        {/* Controls */}
        <OrbitControls target={[0, 1, 0]} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

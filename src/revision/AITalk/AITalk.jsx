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












// import React, { Suspense, useRef, useState } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { Environment, OrbitControls, useAnimations, useFBX, useGLTF } from "@react-three/drei";
// import { TextureLoader } from "three";
// import './AITalk.css';

// function AvatarModel() {
//     const { scene } = useGLTF("/data/avatar/avatar.glb");

//     return (
//         <primitive
//             object={scene}
//             scale={6}
//             position={[0, -7, 0]}
//         />
//     );
// }

// export default function AvatarViewer() {
//     const texture = useLoader(TextureLoader, "/data/textures/background.jpg");
//     const { animations: idleAnimation } = useFBX("/data/animations/Breathing Idle.fbx");
//     const { animations: angryAnimation } = useFBX("/data/animations/Angry Gesture.fbx");
//     const { animations: greetingAnimation } = useFBX("/data/animations/Standing Greeting.fbx");

//     console.log(idleAnimation);

//     idleAnimation[0].name = "Idle";
//     angryAnimation[0].name = "Angry";
//     greetingAnimation[0].name = "Greeting";

//     const [animation, setAnimation] = useState("Idle");

//     const group = useRef();
//     useAnimations([idleAnimation[0], angryAnimation[0], greetingAnimation[0]], group);


//     return (
//         <div style={{ width: "100%", height: "500px" }}>
//             <Canvas camera={{ position: [0, 2, 5] }} className="canvas-AvatarModal">
//                 {/* Background image */}
//                 <primitive attach="background" object={texture} />

//                 {/* Lights */}
//                 <ambientLight intensity={0.5} />
//                 <directionalLight position={[2, 2, 2]} />

//                 {/* Model */}
//                 <Suspense fallback={null}>
//                     <group ref={group}>
//                         <AvatarModel />
//                     </group>
//                 </Suspense>

//                 {/* Controls */}
//                 <OrbitControls target={[0, 1, 0]} />
//                 <Environment preset="sunset" />

//             </Canvas>
//         </div>
//     );
// }


// useEffect(() => {
//     actions[animation].reset().fadeIn(0.5).play();
//     return () => actions[animation].fadeOut(0.5);
// },[animation])
















import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useAnimations, useFaceControls, useFBX, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import './AITalk.css';
import { playAudio } from "openai/helpers/audio.mjs";
import { useControls } from "leva";
import * as THREE from "three";

const corresponding = {
    A: "viseme_PP",
    B: "viseme_kk",
    C: "viseme_I",
    D: "viseme_AA",
    E: "viseme_O",
    F: "viseme_U",
    G: "viseme_FF",
    H: "viseme_TH",
    X: "viseme_PP",
}

function AvatarModel() {
    const { scene } = useGLTF("/data/avatar/68b2035864d80a6d02a281cb.glb");
    return (
        <primitive object={scene} scale={6} position={[0, -7, 0]} />
    );
}

function SceneContent() {
    const texture = useLoader(TextureLoader, "/data/textures/nature background.jpg");
    const { scene, nodes, materials } = useGLTF("/data/avatar/68b2035864d80a6d02a281cb.glb");

    const { playAudio, scriptValues } = useControls({
        playAudio: false,
        scriptValues: {
            value: "aryNandini",
            options: ["aryNandini", "nanduYoutube"]
        }
    })

    const audio = useMemo(() => new Audio(`/data/audios/${scriptValues}.mp3`), [scriptValues]);
    console.log(audio);

    const jsonText = useLoader(THREE.FileLoader, `/data/audios/${scriptValues}.json`);

    const lipsync = useMemo(() => {
        try {
            return JSON.parse(jsonText);
        } catch (e) {
            console.error("JSON parse error:", e, jsonText);
            return null;
        }
    }, [jsonText]);

    console.log("Loaded JSON:", lipsync.mouthCues);

    useFrame(() => {
        const currentAudioTime = audio.currentTime;
        Object.values(corresponding).forEach((value) => {
            const head = nodes.Wolf3D_Head;
            // console.log(head.morphTargetDictionary);
            const teeth = nodes.Wolf3D_Teeth;

            if (head) {
                head.morphTargetInfluences[head.morphTargetDictionary[value]] = 0;
            }

            if (head) {
                teeth.morphTargetInfluences[teeth.morphTargetDictionary[value]] = 0;
            }
        })

        for (let i = 0; i < lipsync.mouthCues.length; i++) {
            const mouthCue = lipsync.mouthCues[i];
            if (currentAudioTime >= mouthCue.start && currentAudioTime <= mouthCue.end) {
                console.log(mouthCue.value);
                const head = nodes.Wolf3D_Head;
                // console.log(head.morphTargetDictionary);
                const teeth = nodes.Wolf3D_Teeth;

                if (head) {
                    head.morphTargetInfluences[head.morphTargetDictionary[corresponding[mouthCue.value]]] = 1;
                }

                if (head) {
                    teeth.morphTargetInfluences[teeth.morphTargetDictionary[corresponding[mouthCue.value]]] = 1;
                }
                break;
            }
        }
    })


    useEffect(() => {
        if (playAudio) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [playAudio, scriptValues])

    const { animations: idleAnimation } = useFBX("/data/animations/Breathing Idle.fbx");
    const { animations: angryAnimation } = useFBX("/data/animations/Angry Gesture.fbx");
    const { animations: greetingAnimation } = useFBX("/data/animations/Standing Greeting.fbx");

    idleAnimation[0].name = "Idle";
    angryAnimation[0].name = "Angry";
    greetingAnimation[0].name = "Greeting";

    const [animation, setAnimation] = useState("Idle");
    const group = useRef();
    const { actions } = useAnimations([idleAnimation[0], angryAnimation[0], greetingAnimation[0]], group);


    // useEffect(() => {
    //     const head = nodes.Wolf3D_Head;
    //     // console.log(head.morphTargetDictionary);
    //     const teeth = nodes.Wolf3D_Teeth;

    //     if (head) {
    //         head.morphTargetInfluences[head.morphTargetDictionary["viseme_O"]] = 1;
    //     }

    //     if (head) {
    //         teeth.morphTargetInfluences[teeth.morphTargetDictionary["viseme_O"]] = 1;
    //     }
    // }, [nodes]);


    useEffect(() => {
        if (actions && actions[animation]) {
            actions[animation].reset().fadeIn(0.5).play();
        }

        return () => {
            if (actions && actions[animation]) {
                actions[animation].fadeOut(0.5);
            }
        };
    }, [animation, actions]);

    return (
        <>
            {/* Background image */}
            <primitive attach="background" object={texture} />

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />

            {/* Model */}
            <Suspense fallback={null}>
                <group ref={group}>
                    <AvatarModel />
                </group>
            </Suspense>

            {/* Controls */}
            <OrbitControls target={[0, 1, 0]} />
            <Environment preset="sunset" />
        </>
    );
}

export default function AvatarViewer() {
    return (
        <div style={{ width: "100%", height: "500px" }}>
            <Canvas camera={{ position: [0, 2, 5] }} className="canvas-AvatarModal">
                <SceneContent />
            </Canvas>
        </div>
    );
}





// useEffect(() => {
//         console.log(Nodes.Wolf3D_Head.morphTargetDictionary);
//         Nodes.Wolf3D_Head.morphTargetInfluences[Nodes.Wolf3D_Head.morphTargetDictionary["mouthSmile"]]

//     }, [])

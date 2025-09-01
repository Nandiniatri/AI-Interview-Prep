import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const AvatarModel = ({ url }) => {
    const { scene } = useGLTF(url);
    return (
        <primitive object={scene} scale={2} />
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
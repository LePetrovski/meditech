import { Canvas } from "@react-three/fiber";
import PerlinNoise from "./perlin/PerlinNoise";
import '../sass/Experience.scss';
import DNA from "./model/DNA";

export default function Experience(props) {

    return (
        <Canvas
            flat
            camera={
                {
                    position: [0, 0, 6],
                    fov: 45,
                    near: 0.1,
                    far: 200
                }
            }
        >
            <ambientLight intensity={5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <DNA scale={0.01} />
            <PerlinNoise />
        </Canvas>
    )
}
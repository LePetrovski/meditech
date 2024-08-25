import { Canvas } from "@react-three/fiber";
import PerlinNoise from "./perlin/PerlinNoise";
import '../sass/experience.scss';

export default function Experience() {
    return (
        <Canvas
            flat
            camera={
                {
                    position: [1, 2, 6],
                    fov: 45,
                    near: 0.1,
                    far: 200
                }
            }
        >
            <PerlinNoise />
        </Canvas>
    )
}
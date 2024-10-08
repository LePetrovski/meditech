import { Canvas } from "@react-three/fiber";
import PerlinNoise from "./perlin/PerlinNoise";
import '../sass/StarDestroyer.scss';
import Satellite from "./model/Satellite";
import { Center, OrbitControls } from "@react-three/drei";
import Earth from "./model/Earth";
import { Color } from "three";

export default function StarDestroyer(props) {
    return (
        <Canvas
            flat
            camera={
                {
                    position: [0, 0, 10],
                    fov: 45,
                    near: 0.1,
                    far: 200
                }
            }
        >
            <color attach={"background"} args={[0x000000]} />
            {/* <ambientLight intensity={5} /> */}
            <directionalLight position={[10, 10, 5]} intensity={10} />

            
            <Center>
                {/* <Satellite scale={1} /> */}
                <OrbitControls />   
                <Earth scale={0.01} />
            </Center>
  
        </Canvas>
    )
}
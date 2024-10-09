import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import '../sass/StarDestroyer.scss';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import Satellite from "./model/Satellite";
import { Center, OrbitControls } from "@react-three/drei";
import Earth from "./model/Earth";
import Loader from "../components/Loader";

export default function StarDestroyer(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 7500); // 8 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Canvas
                    flat
                    camera={{
                        position: [0, 0, 10],
                        fov: 45,
                        near: 0.1,
                        far: 200
                    }}
                >
                    <Suspense fallback={null}>
                        <color attach={"background"} args={[0x000000]} />
                        <directionalLight position={[10, 10, 5]} intensity={10} />
                        <Center>
                            <OrbitControls />
                            <Earth scale={0.01} />
                            <Satellite scale={0.1} position={[1, 1, 1]} />
                        </Center>
                        <EffectComposer>
                            {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
                            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                            <Noise opacity={0.02} />
                            <Vignette eskil={false} offset={0.1} darkness={1.1} />
                        </EffectComposer>
                    </Suspense>
                </Canvas>
            )}
        </>
    );
}
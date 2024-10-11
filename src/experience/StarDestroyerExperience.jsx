import { Suspense, useState, useEffect } from "react";
import '../sass/StarDestroyer.scss';
import { Bloom, EffectComposer, Noise, Vignette, Glitch } from '@react-three/postprocessing';
import Satellite from "./model/Satellite";
import { Center, OrbitControls } from "@react-three/drei";
import Earth from "./model/Earth";

export default function StarDestroyerExperience(props) {

    return (
        <>
            <Suspense fallback={null}>
                <color attach={"background"} args={[0x000000]} />
                <directionalLight position={[12, 3, 6]} intensity={10} />
                <Center>
                    <OrbitControls  />
                    <Earth scale={0.01} />
                    <Satellite scale={0.03} position={[1.3, 0.2, 1]} />
                </Center>
                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                    <Noise opacity={1} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>
            </Suspense>
        </>
    );
}
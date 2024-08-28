import { OrbitControls, shaderMaterial, Plane, useHelper, Text3D, Center} from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useRef } from 'react'
import perlinVertexShader from './shaders/vertex.glsl'
import perlinFragmentShader from './shaders/fragment.glsl'
import { folder, useControls } from 'leva'

export default function PerlinNoise() {

    const {uTime, uDisplacement, uStrength, uColorStart, uColorEnd} = useControls(
        'Shader', {
            uTime: {
                value: 0.25,
                min: 0,
                max: 2,
                step: 0.01
            },
            uDisplacement: {
                value: 2.70,
                min: 0,
                max: 100,
                step: 0.01
            },
            uStrength: {
                value: 3.0,
                min: 0,
                max: 100,
                step: 0.01
            },
            uColorStart: '#00175c',
            uColorEnd: '#5c67ff',
        }
    )

    const { string, size, height, curveSegments } = useControls(
        'Text', {
            string: 'CONCEPT IMAGE',
            size: {
                value: 1,
                min: 0,
                max: 100,
                step: 0.01
            },
            height: {
                value: 0.1,
                min: 0,
                max: 100,
                step: 0.01
            },
            curveSegments: {
                value: 12,
                min: 0,
                max: 100,
                step: 1
            }
        }
    )

    const PerlinMaterial = shaderMaterial(
        {
            uTime: 0,
            uDisplacement: uDisplacement,
            uStrength: uStrength,
            uColorStart: new THREE.Color(uColorStart),
            uColorEnd: new THREE.Color(uColorEnd)
        },
        perlinVertexShader,
        perlinFragmentShader
    )
    
    extend({ PerlinMaterial });

    // const dirLight = useRef()
    // useHelper(dirLight, THREE.DirectionalLightHelper, 1, 'red')
 
    const perlinMaterial = useRef()

    useFrame((state, delta) => 
    {
        perlinMaterial.current.uTime += uTime * delta
        perlinMaterial.current.uColorStart.set(uColorStart)
        perlinMaterial.current.uColorEnd.set(uColorEnd)
        perlinMaterial.current.uDisplacement = uDisplacement
        perlinMaterial.current.uStrength = uStrength
    })



    return <>
        <color args={[`#ffffff`]} attach='background' />

        {/* <OrbitControls makeDefault /> */}

        {/* <Perf position="top-left" /> */}

        {/* <directionalLight intensity={1} position={[0, 10, 0]} color="red" ref={dirLight} /> */}

        <ambientLight intensity={1} />
        
        {/* <Plane args={[20, 10]} castShadow >
            <perlinMaterial ref={ perlinMaterial }/>
        </Plane> */}

        <Center>
            <mesh>
                <planeGeometry args={[20, 10]} />
                <perlinMaterial ref={ perlinMaterial }/>
            </mesh>
        </Center>
    </>
}
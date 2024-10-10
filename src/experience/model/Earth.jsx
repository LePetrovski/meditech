import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Earth(props) {
    const { nodes, materials } = useGLTF('/model/earth_1.glb')
    const group = useRef()

    useEffect(() => {
      group.current.rotation.z = Math.PI * 0.2
    }, [])

    useFrame((state, delta) => {
        group.current.rotation.y += delta * 0.01
    })

    return (
      <group {...props} dispose={null} ref={group}>
        <group scale={96.724}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere1_phong1_0.geometry}
            material={materials.phong1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere1_phong1_0_1.geometry}
            material={materials.phong1}
          />
        </group>
        <group scale={97.464}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere4_lambert6_0.geometry}
            material={materials.lambert6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere4_lambert6_0_1.geometry}
            material={materials.lambert6}
          />
        </group>
        <group scale={98.098}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere5_lambert7_0.geometry}
            material={materials.lambert7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere5_lambert7_0_1.geometry}
            material={materials.lambert7}
          />
        </group>
      </group>
    )
  }
  
  useGLTF.preload('/model/earth_1.glb')
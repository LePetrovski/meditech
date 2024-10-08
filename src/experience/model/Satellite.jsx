import { useGLTF } from "@react-three/drei";

export default function Satellite(props) {
    const { nodes, materials } = useGLTF('/model/satellite.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Satellite}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Satellite2}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model/satellite.glb')

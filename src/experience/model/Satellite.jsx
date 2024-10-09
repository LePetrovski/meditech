import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Satellite(props) {
    const { nodes, materials } = useGLTF('/model/satellite.glb')

	const orbitGroup = useRef()

    useFrame((state, delta) => {
        orbitGroup.current.rotation.y += delta * -Math.PI; // Ajustez la vitesse de rotation ici
    })

  return (
    <group {...props} dispose={null} ref={orbitGroup}>
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

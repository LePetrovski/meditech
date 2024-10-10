import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function Satellite(props) {
    const { nodes, materials } = useGLTF('/model/satellite.glb')
	const orbitGroup = useRef()
	const radius = 1.4; // Rayon de l'orbite
    let angle = 0; // Angle initial

	useEffect(() => {
		orbitGroup.current.rotation.z = Math.PI * 0.4
	});

    useFrame((state, delta) => {
  		angle -= (delta / 20) * 0.3; // Ajustez la vitesse de rotation ici
        orbitGroup.current.position.x = -(radius * Math.cos(angle));
        orbitGroup.current.position.z = -(radius * Math.sin(angle));
    })

  return (
    <group {...props} dispose={null} ref={orbitGroup}>
		<PerspectiveCamera makeDefault position={[0, 0, 0]} />
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

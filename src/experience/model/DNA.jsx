import { useGLTF } from "@react-three/drei";

export default function DNA(props) {
    const { nodes, materials } = useGLTF('model/dna.glb')
	console.log(materials)

	return (
		<group {...props} dispose={null}>
		<group rotation={[-0.013, 0.235, 2.339]}>
			<group rotation={[Math.PI / 2, 0, 0]}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.defaultMaterial.geometry}
				material={materials['1001']}
				position={[365.141, 569.14, 270.475]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			</group>
		</group>
		</group>
	)
}
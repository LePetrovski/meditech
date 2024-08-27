import { useGLTF } from "@react-three/drei";

export default function DNA(props) {
    const DNA = useGLTF('model/human_dna.glb')
	return <primitive object={DNA.scene} />
}
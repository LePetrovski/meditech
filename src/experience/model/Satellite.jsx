import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";

export default function Satellite(props) {
    const { nodes, materials } = useGLTF('/model/satellite.glb');
    const orbitGroup = useRef();
	const cameraRef = useRef();
    const radius = 1.4; // Rayon de l'orbite
    let angle = 0; // Angle initial

    const airPlayer = useAudioPlayer();
	
	const {xr, yr, zr} = useControls(
        'Rotation', {
            xr: {
				value: -3.14,
				min: -Math.PI,
				max: Math.PI,
				step: 0.01
			},
			yr: {
				value: 0,
				min: -Math.PI,
				max: Math.PI,
				step: 0.01
			},
			zr: {
				value: -0.3,
				min: -Math.PI,
				max: Math.PI,
				step: 0.01
			}
        }
    )

    const [rotation, setRotation] = useState({ x: 0, y: 0, z: Math.PI * 0.4 });

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    setRotation((prev) => ({ ...prev, x: prev.x + 0.1 }));
                    airPlayer.load('../audio/star/air.mp3', 
                        {
                            autoplay: true,
                        }
                    )
                    break;
                case 'ArrowDown':
                    setRotation((prev) => ({ ...prev, x: prev.x - 0.1 }));
                    airPlayer.load('../audio/star/air.mp3', 
                        {
                            autoplay: true,
                        }
                    )
                    break;
                case 'ArrowLeft':
                    setRotation((prev) => ({ ...prev, y: prev.y + 0.1 }));
                    airPlayer.load('../audio/star/air.mp3', 
                        {
                            autoplay: true,
                        }
                    )
                    break;
                case 'ArrowRight':
                    setRotation((prev) => ({ ...prev, y: prev.y - 0.1 }));
                    airPlayer.load('../audio/star/air.mp3', 
                        {
                            autoplay: true,
                        }
                    )
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        orbitGroup.current.rotation.set(rotation.x, rotation.y, rotation.z);
    }, [rotation]);

    useFrame((state, delta) => {
        angle -= (delta / 20) * 0.3; // Ajustez la vitesse de rotation ici
        orbitGroup.current.position.x = -(radius * Math.cos(angle));
		cameraRef.current.rotation.set(xr, yr, zr);
        // orbitGroup.current.position.z = -(radius * Math.sin(angle));
    });

    return (
		<>
			<Leva hidden={true} />
			<group {...props} dispose={null} ref={orbitGroup}>
				<PerspectiveCamera makeDefault position={[0, 0, 0]} ref={cameraRef} rotate={[-3.14, 0, -0.3]} />
				<group rotation={[-Math.PI / 1, 0, 0]}>
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
		</>
    );
}

useGLTF.preload('/model/satellite.glb');
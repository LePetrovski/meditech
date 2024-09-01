import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";

export default function DNA(props) {
    const { nodes, materials, animations } = useGLTF('model/cell_shaded_double_helix.glb')
	const group = useRef()
	const { actions } = useAnimations(animations, group)

    const {metalness, roughness, opacity} = useControls(
        'Material01', {
            metalness: {
                value: 0.13,
                min: 0,
                max: 1,
                step: 0.01
            },
            roughness: {
                value: 0.17,
                min: 0,
                max: 1,
                step: 0.01
            },
			opacity: {
				value: 0.8,
				min: 0,
				max: 1,
				step: 0.01
			}
        }
    )

	const {xr, yr, zr} = useControls(
        'Rotation', {
            xr: {
				value: 0.12,
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

	
	const {xp, yp, zp} = useControls(
        'Position', {
           xp: {
				value: 0.74,
				min: -10,
				max: 10,
				step: 0.01
			},
			yp: {
				value: -0.40,
				min: -10,
				max: 10,
				step: 0.01
			},
			zp: {
				value: 3.83,
				min: -10,
				max: 10,
				step: 0.01
			}
        }
    )

    useEffect(() => {
        console.log('DNA loaded');
        console.log(materials);

		console.log(actions);

		const action = actions['Take 001'];
		action.setEffectiveTimeScale(0.1);
		action.play();


    },[materials, actions])

    useFrame(() => {
        materials['Material_25'].metalness = metalness;
        materials['Material_25'].roughness = roughness;

        materials['Material_26'].metalness = metalness;
        materials['Material_26'].roughness = roughness;

		materials['Material_25'].opacity = opacity;
		materials['Material_26'].opacity = opacity;

        // group.current.rotation.y += 0.005;
    });



	useEffect(() => {
	}, [actions])

	return (
	  <group ref={group} {...props} dispose={null} position={[xp, yp, zp]} rotation={[xr, yr, zr]}>
		<group name="Sketchfab_Scene">
		  <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
			<group name="edaae3fa4f7143ad811be9d9f8c9e2dcfbx" rotation={[Math.PI / 2, 0, 0]}>
			  <group name="Object_2">
				<group name="RootNode">
				  <group name="helix" rotation={[-Math.PI / 2, 0, 0]}>
					<mesh
					  name="helix_Material_#25_0"
					  castShadow
					  receiveShadow
					  geometry={nodes['helix_Material_#25_0'].geometry}
					  material={materials.Material_25}
					/>
				  </group>
				  <group name="helixcell" rotation={[-Math.PI / 2, 0, 0]}>
					<mesh
					  name="helixcell_Material_#26_0"
					  castShadow
					  receiveShadow
					  geometry={nodes['helixcell_Material_#26_0'].geometry}
					  material={materials.Material_26}
					/>
				  </group>
				</group>
			  </group>
			</group>
		  </group>
		</group>
	  </group>
	)
  }
  
  useGLTF.preload('model/cell_shaded_double_helix.glb')
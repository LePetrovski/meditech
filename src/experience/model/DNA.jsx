import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);

export default function DNA(props) {
	const {modelPosition} = props;
    const { nodes, materials, animations } = useGLTF('model/cell_shaded_double_helix.glb')
	const group = useRef()
	const { actions } = useAnimations(animations, group)

    // const {metalness, roughness, opacity} = useControls(
    //     'Material01', {
    //         metalness: {
    //             value: 0.13,
    //             min: 0,
    //             max: 1,
    //             step: 0.01
    //         },
    //         roughness: {
    //             value: 0.17,
    //             min: 0,
    //             max: 1,
    //             step: 0.01
    //         },
	// 		opacity: {
	// 			value: 0.8,
	// 			min: 0,
	// 			max: 1,
	// 			step: 0.01
	// 		}
    //     }
    // )

	// const {xr, yr, zr} = useControls(
    //     'Rotation', {
    //         xr: {
	// 			value: 0.12,
	// 			min: -Math.PI,
	// 			max: Math.PI,
	// 			step: 0.01
	// 		},
	// 		yr: {
	// 			value: 0,
	// 			min: -Math.PI,
	// 			max: Math.PI,
	// 			step: 0.01
	// 		},
	// 		zr: {
	// 			value: -0.3,
	// 			min: -Math.PI,
	// 			max: Math.PI,
	// 			step: 0.01
	// 		}
    //     }
    // )

	
	// const {xp, yp, zp} = useControls(
    //     'Position', {
    //        xp: {
	// 			value: 0,
	// 			min: -10,
	// 			max: 10,
	// 			step: 0.01
	// 		},
	// 		yp: {
	// 			value: -0.40,
	// 			min: -10,
	// 			max: 10,
	// 			step: 0.01
	// 		},
	// 		zp: {
	// 			value: 3.83,
	// 			min: -10,
	// 			max: 10,
	// 			step: 0.01
	// 		}
    //     }
    // )

    useEffect(() => {
		const action = actions['Take 001'];
		action.setEffectiveTimeScale(0.1);
		action.play();
    },[materials, actions])

    useFrame(() => {
        materials['Material_25'].metalness = 0.13;
        materials['Material_25'].roughness = 0.17;

        materials['Material_26'].metalness = 0.13;
        materials['Material_26'].roughness = 0.17;

		materials['Material_25'].opacity = 0.8;
		materials['Material_26'].opacity = 0.8;

		if(modelPosition > 0) {
			gsap.to(group.current.position, {x: 0, duration: 2.4, ease: 'power1.out'})
			gsap.to(group.current.rotation, {y: Math.PI / 2, duration: 2.4, ease: 'power1.out'})
		}

		if(modelPosition == 0) {
			gsap.to(group.current.position, {x: 0.74, duration: 2.4, ease: 'power1.out'})
			gsap.to(group.current.rotation, {y: 0, duration: 2.4, ease: 'power1.out'})
		}
    });

	



	useEffect(() => {
	}, [actions])

	return (
	  <group ref={group} {...props} dispose={null} position={[0, -0.40, 3.83]} rotation={[0.12, 0, -0.3]}>
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
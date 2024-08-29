import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";

export default function DNA(props) {
    const { nodes, materials } = useGLTF('model/dna_opti.glb')
    const dna = useRef();

    const {metalness, roughness, opacity} = useControls(
        'Material01', {
            metalness: {
                value: 0.1,
                min: 0,
                max: 1,
                step: 0.01
            },
            roughness: {
                value: 0.1,
                min: 0,
                max: 1,
                step: 0.01
            },
			opacity: {
				value: 0.5,
				min: 0,
				max: 1,
				step: 0.01
			}
        }
    )

	const {xr, yr, zr} = useControls(
        'Rotation', {
            xr: {
				value: 0,
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
				value: 0,
				min: -Math.PI,
				max: Math.PI,
				step: 0.01
			}
        }
    )

	
	const {xp, yp, zp} = useControls(
        'Position', {
           xp: {
				value: 0,
				min: -10,
				max: 10,
				step: 0.01
			},
			yp: {
				value: 0,
				min: -10,
				max: 10,
				step: 0.01
			},
			zp: {
				value: 0,
				min: -10,
				max: 10,
				step: 0.01
			}
        }
    )

    useEffect(() => {
        console.log('DNA loaded');
        console.log(materials);
        materials['Base_Material'].color.set('#00175c');
        materials['Fita_Material'].color.set('#669ecc');
		materials['Base_Material'].transparent = true;
		materials['Fita_Material'].transparent = true;
		materials['Base_Material'].opacity = opacity;
		materials['Fita_Material'].opacity = opacity;
    },[materials])

    useFrame(() => {
        materials['Base_Material'].metalness = metalness;
        materials['Base_Material'].roughness = roughness;

        materials['Fita_Material'].metalness = metalness;
        materials['Fita_Material'].roughness = roughness;

		materials['Base_Material'].opacity = opacity;
		materials['Fita_Material'].opacity = opacity;
        // dna.current.rotation.y += 0.005;
    });

    return (
        <group {...props} dispose={null} rotation={[xr, yr, zr]} position={[xp, yp, zp]} ref={dna}>
        <group name="Sketchfab_Scene">
			<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
			<group name="a466481064ec46f28c6587066bbebfa5fbx" rotation={[Math.PI / 2, 0, 0]}>
				<group name="Object_2">
				<group name="RootNode">
					<group name="pSphere1">
					<group name="transform1" />
					</group>
					<group
					name="pCylinder1"
					position={[0, 0, -2.437]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={[0.407, 2.269, 0.407]}>
					<group name="transform2" />
					</group>
					<group name="pCylinder2">
					<group name="transform4" />
					</group>
					<group
					name="pCylinder3"
					position={[0, 0, -10.187]}
					rotation={[-Math.PI, 0, -Math.PI]}>
					<group name="transform3" />
					</group>
					<group name="pCylinder4">
					<group name="transform22" />
					</group>
					<group
					name="pCylinder5"
					position={[-1.124, 2.296, -0.126]}
					rotation={[0, -0.222, 0]}>
					<group name="transform20" />
					</group>
					<group
					name="pCylinder6"
					position={[-2.192, 4.591, -0.496]}
					rotation={[0, -0.445, 0]}>
					<group name="transform21" />
					</group>
					<group
					name="pCylinder7"
					position={[-3.153, 6.887, -1.093]}
					rotation={[0, -0.667, 0]}>
					<group name="transform17" />
					</group>
					<group
					name="pCylinder8"
					position={[-3.958, 9.183, -1.887]}
					rotation={[0, -0.89, 0]}>
					<group name="transform18" />
					</group>
					<group
					name="pCylinder9"
					position={[-4.568, 11.479, -2.839]}
					rotation={[0, -1.112, 0]}>
					<group name="transform19" />
					</group>
					<group
					name="pCylinder10"
					position={[-4.953, 13.774, -3.903]}
					rotation={[0, -1.335, 0]}>
					<group name="transform5" />
					</group>
					<group
					name="pCylinder11"
					position={[-5.093, 16.07, -5.025]}
					rotation={[0, -1.557, 0]}>
					<group name="transform6" />
					</group>
					<group
					name="pCylinder12"
					position={[-4.983, 18.366, -6.15]}
					rotation={[-Math.PI, -1.362, -Math.PI]}>
					<group name="transform7" />
					</group>
					<group
					name="pCylinder13"
					position={[-4.627, 20.661, -7.224]}
					rotation={[-Math.PI, -1.139, -Math.PI]}>
					<group name="transform11" />
					</group>
					<group
					name="pCylinder14"
					position={[-4.043, 22.957, -8.192]}
					rotation={[-Math.PI, -0.917, -Math.PI]}>
					<group name="transform12" />
					</group>
					<group
					name="pCylinder15"
					position={[-3.26, 25.253, -9.008]}
					rotation={[-Math.PI, -0.694, -Math.PI]}>
					<group name="transform8" />
					</group>
					<group
					name="pCylinder16"
					position={[-2.316, 27.548, -9.631]}
					rotation={[-Math.PI, -0.472, -Math.PI]}>
					<group name="transform9" />
					</group>
					<group
					name="pCylinder17"
					position={[-1.258, 29.844, -10.03]}
					rotation={[-Math.PI, -0.249, -Math.PI]}>
					<group name="transform10" />
					</group>
					<group
					name="pCylinder18"
					position={[-0.138, 32.14, -10.186]}
					rotation={[-Math.PI, -0.027, -Math.PI]}>
					<group name="transform13" />
					</group>
					<group
					name="pCylinder19"
					position={[0.989, 34.436, -10.09]}
					rotation={[-Math.PI, 0.195, -Math.PI]}>
					<group name="transform14" />
					</group>
					<group
					name="pCylinder20"
					position={[2.067, 36.731, -9.749]}
					rotation={[-Math.PI, 0.418, -Math.PI]}>
					<group name="transform15" />
					</group>
					<group
					name="pCylinder21"
					position={[3.044, 39.027, -9.178]}
					rotation={[-Math.PI, 0.64, -Math.PI]}>
					<group name="transform16" />
					</group>
					<group
					name="pCylinder22"
					position={[0, 19.513, -5.094]}
					rotation={[-Math.PI, 0.432, -Math.PI]}>
					<group name="transform23" position={[0, -19.513, 5.094]} />
					</group>
					<group name="pSphere2" position={[0, 1.912, 0]} rotation={[Math.PI / 2, 0, 0]}>
					<group name="transform24" />
					</group>
					<group
					name="pCylinder23"
					position={[0, 1.913, 2.366]}
					rotation={[Math.PI / 2, 0, 0]}
					scale={[0.313, 1.891, 0.313]}>
					<group name="transform25" />
					</group>
					<group name="pCylinder24">
					<group
						name="polySurface3"
						position={[-0.006, -0.028, 0.029]}
						rotation={[-0.015, 0.003, 0]}>
						<group name="transform33" />
					</group>
					<group name="polySurface4">
						<group name="transform34" />
					</group>
					<group name="transform29" />
					</group>
					<group
					name="pCylinder25"
					position={[0, 0, 7.827]}
					rotation={[-Math.PI, 0, -Math.PI]}>
					<group name="polySurface1">
						<group name="transform27" />
					</group>
					<group name="polySurface2">
						<group name="transform28" />
					</group>
					<group name="transform26" />
					</group>
					<group name="polySurface2_1">
					<group name="polySurface5">
						<group name="transform31" />
					</group>
					<group
						name="polySurface6"
						position={[-0.017, -0.088, 0.029]}
						rotation={[-0.015, 0.003, 0]}>
						<group name="transform32" />
					</group>
					<group name="transform30" />
					</group>
					<group name="polySurface4_1">
					<group name="polySurface11">
						<group name="transform38" />
					</group>
					<group name="polySurface12">
						<group name="transform39" />
					</group>
					<group name="transform35" />
					<group name="polySurface15" position={[-0.596, 1.673, 0]} scale={0.499}>
						<group name="transform37" />
					</group>
					<group name="polySurface16" position={[-0.596, 1.673, 0]} scale={0.499}>
						<group name="transform36" />
					</group>
					</group>
					<group name="polySurface12_1">
					<group name="transform40" />
					</group>
					<group
					name="polySurface17"
					position={[-0.095, 0, 8.097]}
					rotation={[-Math.PI, 0, -Math.PI]}>
					<group name="transform41" />
					</group>
					<group name="polySurface18">
					<group name="polySurface19">
						<group name="transform43" />
					</group>
					<group name="polySurface20">
						<group name="transform44" />
					</group>
					<group name="polySurface21">
						<group name="transform45" />
					</group>
					<group name="polySurface22">
						<group name="transform46" />
					</group>
					<group name="polySurface23" position={[0, 0, 0.959]}>
						<group name="transform47" />
					</group>
					<group name="polySurface24" position={[0, 0, 0.959]}>
						<group name="transform48" />
					</group>
					<group name="polySurface25" position={[0, 0, 0.959]}>
						<group name="transform50" />
					</group>
					<group name="polySurface26" position={[0, 0, 0.959]}>
						<group name="transform49" />
					</group>
					<group name="transform42" />
					</group>
					<group name="polySurface25_1">
					<group name="polySurface27" position={[0, 0, -0.407]}>
						<group name="transform52" />
					</group>
					<group name="polySurface28" position={[0, 0, -0.407]}>
						<group name="transform53" />
					</group>
					<group name="polySurface29" position={[0, 0, -0.407]}>
						<group name="transform54" />
					</group>
					<group name="polySurface30" position={[0, 0, -0.407]}>
						<group name="transform55" />
					</group>
					<group name="polySurface31">
						<group name="transform56" />
					</group>
					<group name="polySurface32">
						<group name="transform57" />
					</group>
					<group name="polySurface33">
						<group name="transform58" />
					</group>
					<group name="polySurface34">
						<group name="transform59" />
					</group>
					<group name="transform51" />
					</group>
					<group name="polySurface34_1">
					<group name="transform69" />
					</group>
					<group
					name="polySurface35"
					position={[-1.509, 1.387, 0.254]}
					rotation={[0, 0.356, 0]}>
					<group name="transform74" />
					</group>
					<group
					name="polySurface36"
					position={[-2.836, 2.774, 1.019]}
					rotation={[0, 0.712, 0]}>
					<group name="transform75" />
					</group>
					<group
					name="polySurface37"
					position={[-3.813, 4.161, 2.197]}
					rotation={[0, 1.067, 0]}>
					<group name="transform60" />
					</group>
					<group
					name="polySurface38"
					position={[-4.318, 5.548, 3.642]}
					rotation={[0, 1.423, 0]}>
					<group name="transform61" />
					</group>
					<group
					name="polySurface39"
					position={[-4.288, 6.935, 5.172]}
					rotation={[-Math.PI, 1.363, -Math.PI]}>
					<group name="transform62" />
					</group>
					<group
					name="polySurface40"
					position={[-3.727, 8.322, 6.596]}
					rotation={[-Math.PI, 1.007, -Math.PI]}>
					<group name="transform68" />
					</group>
					<group
					name="polySurface41"
					position={[-2.705, 9.709, 7.736]}
					rotation={[-Math.PI, 0.651, -Math.PI]}>
					<group name="transform63" />
					</group>
					<group
					name="polySurface42"
					position={[-1.351, 11.096, 8.448]}
					rotation={[-Math.PI, 0.295, -Math.PI]}>
					<group name="transform64" />
					</group>
					<group
					name="polySurface43"
					position={[0.168, 12.483, 8.644]}
					rotation={[-Math.PI, -0.061, -Math.PI]}>
					<group name="transform77" />
					</group>
					<group
					name="polySurface44"
					position={[1.659, 13.87, 8.299]}
					rotation={[-Math.PI, -0.416, -Math.PI]}>
					<group name="transform78" />
					</group>
					<group
					name="polySurface45"
					position={[2.936, 15.257, 7.455]}
					rotation={[-Math.PI, -0.772, -Math.PI]}>
					<group name="transform76" />
					</group>
					<group
					name="polySurface46"
					position={[3.84, 16.644, 6.22]}
					rotation={[-Math.PI, -1.128, -Math.PI]}>
					<group name="transform80" />
					</group>
					<group
					name="polySurface47"
					position={[4.257, 18.031, 4.747]}
					rotation={[-Math.PI, -1.484, -Math.PI]}>
					<group name="transform81" />
					</group>
					<group
					name="polySurface48"
					position={[4.134, 19.418, 3.221]}
					rotation={[0, -1.302, 0]}>
					<group name="transform65" />
					</group>
					<group
					name="polySurface49"
					position={[3.488, 20.805, 1.834]}
					rotation={[0, -0.946, 0]}>
					<group name="transform66" />
					</group>
					<group
					name="polySurface50"
					position={[2.399, 22.192, 0.758]}
					rotation={[0, -0.59, 0]}>
					<group name="transform79" />
					</group>
					<group
					name="polySurface51"
					position={[1.003, 23.579, 0.129]}
					rotation={[0, -0.234, 0]}>
					<group name="transform72" />
					</group>
					<group
					name="polySurface52"
					position={[-0.524, 24.966, 0.026]}
					rotation={[0, 0.121, 0]}>
					<group name="transform73" />
					</group>
					<group
					name="polySurface53"
					position={[-1.991, 26.353, 0.461]}
					rotation={[0, 0.477, 0]}>
					<group name="transform70" />
					</group>
					<group
					name="polySurface54"
					position={[-3.215, 27.741, 1.38]}
					rotation={[0, 0.833, 0]}>
					<group name="transform71" />
					</group>
					<group
					name="polySurface55"
					position={[-4.042, 29.128, 2.668]}
					rotation={[0, 1.189, 0]}>
					<group name="transform67" />
					</group>
					<group
					name="polySurface56"
					position={[-0.047, 16.582, 4.325]}
					rotation={[-Math.PI, 0.432, -Math.PI]}>
					<mesh
						name="polySurface56_Base_Material_0"
						castShadow
						receiveShadow
						geometry={nodes.polySurface56_Base_Material_0.geometry}
						material={materials.Base_Material}
					/>
					<mesh
						name="polySurface56_Fita_Material_0"
						castShadow
						receiveShadow
						geometry={nodes.polySurface56_Fita_Material_0.geometry}
						material={materials.Fita_Material}
					/>
					</group>
					<group
					name="camera1"
					position={[54.505, 16.484, 0.198]}
					rotation={[-Math.PI, -0.094, -Math.PI]}>
					<group name="Object_170" />
					</group>
					<group
					name="aiAreaLight1"
					position={[2.508, 48.504, 5.827]}
					rotation={[-Math.PI / 2, 0.165, 0]}
					scale={[36.529, 47.809, 31.279]}
					/>
					<group
					name="aiAreaLight2"
					position={[20.102, 16.007, 26.441]}
					rotation={[Math.PI, -0.91, Math.PI]}
					scale={-28.136}
					/>
					<group
					name="aiAreaLight3"
					position={[29.585, 16.007, -27.65]}
					rotation={[0, -0.942, 0]}
					scale={-28.136}
					/>
					<group
					name="camera2"
					position={[41.543, 24.056, -23.907]}
					rotation={[Math.PI, -0.593, 2.995]}>
					<group name="Object_175" />
					</group>
				</group>
				</group>
			</group>
			</group>
		</group>
        </group>
      )
  }
  
  useGLTF.preload('model/h_dna.glb')
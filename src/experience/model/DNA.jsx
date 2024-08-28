import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect } from "react";

export default function DNA(props) {
    const { nodes, materials } = useGLTF('model/h_dna.glb')

    const {metalness, roughness} = useControls(
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
            }
        }
    )

    useEffect(() => {
        console.log('DNA loaded');
        console.log(materials);

    },[materials])

    // useFrame(() => {
    //     materials['Material.002'].metalness = metalness;
    //     materials['Material.002'].roughness = roughness;

    //     materials['Material.003'].metalness = metalness;
    //     materials['Material.003'].roughness = roughness;
    // });

    return (
        <group {...props} dispose={null}>
          <group position={[0, -0.605, 0.605]} rotation={[-Math.PI, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.App7B3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.App3F1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.App3F1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.App3F1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.App9B3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.App9B3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.App9B3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.App9B3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.App9B3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.AppC01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.AppC01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.AppC01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.AppC01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.AppC01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.AppC01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.AppE71}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.AppE71}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.AppE71}
            />
          </group>
        </group>
      )
  }
  
  useGLTF.preload('model/h_dna.glb')
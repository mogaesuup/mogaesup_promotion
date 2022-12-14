import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { IGaeSup, IGaeSupGLTF } from "./type";
import { URL } from "./CONSTANTS";

export default function GaeSup({ value, setValue }: IGaeSup) {
  const group = useRef();
  const { scene, animations, nodes, materials }: IGaeSupGLTF = useLoader(
    GLTFLoader,
    URL + "gaesup.gltf"
  );
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions["greet"]?.reset().fadeIn(0.5).play();
    return () => {
      actions["greet"]?.fadeOut(0.5);
    };
  }, [actions, names]);

  return (
    <group
      scale={[0.4, 0.4, 0.4]}
      position={[-1.5, 0, -1]}
      onPointerOver={() =>
        setValue({
          ...value,
          title: "'개'맞습니다. 그래도 귀여워요",
          value: "모개숲 시그의 마스코트 개숲이 인사드립니다",
        })
      }
      onPointerOut={() =>
        setValue({
          ...value,
          title: "",
          value: "",
        })
      }
    >
      <primitive object={scene} ref={group} visible={false} />

      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.cloth}
        geometry={nodes.gaesup_2.geometry}
        skeleton={nodes.gaesup_2.skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.mouse}
        geometry={nodes.gaesup_1.geometry}
        skeleton={nodes.gaesup_1.skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.base}
        geometry={nodes.gaesup_3.geometry}
        skeleton={nodes.gaesup_3.skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.face_elements}
        geometry={nodes.gaesup_5.geometry}
        skeleton={nodes.gaesup_5.skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.face_elements}
        geometry={nodes.gaesup_4.geometry}
        skeleton={nodes.gaesup_4.skeleton}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        material={materials.face_elements}
        geometry={nodes.gaesup_6.geometry}
        skeleton={nodes.gaesup_6.skeleton}
      />
    </group>
  );
}
useGLTF.preload(URL + "gaesup.gltf");

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import { IBowl } from "./type";
import { useGLTF } from "@react-three/drei";
import { URL } from "./CONSTANTS";

export default function Bowl({ value, setValue }: IBowl) {
  const { scene } = useLoader(GLTFLoader, URL + "bowl.gltf");
  const group = useRef();

  return (
    <group
      scale={[0.1, 0.1, 0.1]}
      position={[0, 0.5, -0.3]}
      rotation={[0, 0, Math.PI / 2]}
      onPointerOver={() =>
        setValue({
          ...value,
          title: "'죽'이네요 죽",
          value: "방금 나온 따끈따끈한 죽이다",
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
      <primitive object={scene} ref={group} />
    </group>
  );
}
// useGLTF.preload(URL + "bowl.gltf");

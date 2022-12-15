import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { URL } from "./CONSTANTS";
import { ITwo, ITwoGLTF } from "./type";

export default function Two({ value, setValue }: ITwo) {
  const { nodes, materials }: ITwoGLTF = useLoader(
    GLTFLoader,
    URL + "two.gltf"
  );
  return (
    <group
      scale={[1.3, 1.3, 1.3]}
      position={[1, 0, 1.5]}
      onPointerOver={() =>
        setValue({
          ...value,
          title: "콩의 가호'2'",
          value: "콩의 전설이 깃든 숫자 2이다.콩의 전설이 깃든 숫자 2이다",
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
      <mesh
        castShadow
        receiveShadow
        material={materials.two}
        geometry={nodes.two.geometry}
      />
    </group>
  );
}

// useGLTF.preload(URL + "two.gltf");

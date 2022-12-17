import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  BakeShadows,
  OrbitControls,
  PerspectiveCamera,
  Stage,
  useCamera,
} from "@react-three/drei";
import Two from "./components/Two";
import Bowl from "./components/Bowl";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import GaeSup from "./components/GaeSup";
import Title from "./components/Title";

export default function App() {
  const [value, setValue] = useState({ title: "", value: "" });
  return (
    <>
      <Title />
      <Description value={value} />
      <Canvas shadows>
        <OrbitControls
          target={[0, 0.35, 0]}
          maxPolarAngle={1.45}
          minDistance={3}
          maxDistance={5}
        />
        <color attach="background" args={["#ffffff"]} />
        <Stage environment="sunset" intensity={0.6}>
          <GaeSup setValue={setValue} value={value} />
          <Two setValue={setValue} value={value} />
          <Bowl setValue={setValue} value={value} />
        </Stage>
        <BakeShadows />
      </Canvas>
      <Footer />
    </>
  );
}

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";

function Athlete() {
  return <AthleteUI />;
}

function AthleteUI() {
  return (
    <Canvas frameloop="always">
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <OrbitControls enableDamping />
      <axesHelper args={[5]} />
    </Canvas>
  );
}

export default Athlete;

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { MouseEventHandler } from "react";

const handleDoubleClick: MouseEventHandler<HTMLDivElement> = (event) => {
  const div: HTMLDivElement = event.currentTarget;
  div.requestFullscreen();
};

function Athlete() {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      onDoubleClick={handleDoubleClick}
    >
      <AthleteUI />
    </div>
  );
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

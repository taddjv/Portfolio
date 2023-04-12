import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Rocket } from "./Rocket";

const RocketRender = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      {/* <gridHelper /> */}
      <Rocket />
    </>
  );
};

export default RocketRender;

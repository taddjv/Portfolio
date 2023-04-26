import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { NController } from "./NController";
import Text from "./text";
import { useGeneral } from "../../context";

const ControllerRender = () => {
  const { location } = useGeneral();
  useFrame(({ camera }) => {
    if (location === "center") {
      camera.position.set(0.5, 0, 0);
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 1, 3]} intensity={1} />
      <pointLight position={[1, 0, 0]} intensity={0.1} />
      <pointLight position={[1, 1, 3]} intensity={1} />
      {/* <gridHelper /> */}
      <PresentationControls snap zoom={0.8}>
        <NController />
      </PresentationControls>
      <Text />
    </>
  );
};

export default ControllerRender;

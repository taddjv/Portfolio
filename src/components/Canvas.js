import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Html } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Scanline,
  Vignette,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useGeneral } from "../context";
import { Earth } from "./About/Earth";
import { Rocket } from "./Skill/Rocket";
import ControllerRender from "./Main/ControllerRender";
import { Ufo } from "./Contact/Ufo";
import Background from "./BackgroundStars";
import CameraFrame from "./CameraFrame";

const CanvasRender = () => {
  const { location, setLocation } = useGeneral();
  return (
    <Canvas
      width={window.innerWidth}
      height={window.innerHeight}
      camera={{ fov: 75, position: [0.5, 0, 0] }}
      style={{ zIndex: 1 }}
    >
      <Background />

      <Rocket />

      <Float
        speed={location === "center" && 2}
        floatIntensity={location === "center" && 0.25}
      >
        <ControllerRender />
      </Float>

      <Float speed={5} floatIntensity={1}>
        <Ufo />
      </Float>

      <Float speed={5} floatIntensity={1}>
        <Earth />
      </Float>

      {location === "up" ? (
        <OrbitControls autoRotate={true} autoRotateSpeed={10} />
      ) : null}

      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} intensity={2.4} />
        <Noise premultiply blendFunction={BlendFunction.ADD} />
        <Vignette offset={0.37} darkness={0.7} opacity={1} />
        <Scanline density={1.1} opacity={0.025} />
      </EffectComposer>
      <Html fullscreen position-z={0} position-x={0}>
        <CameraFrame location={location} setLocation={setLocation} />
      </Html>
    </Canvas>
  );
};

export default CanvasRender;

{
  /* <Canvas
        width={window.innerWidth}
        height={window.innerHeight}
        camera={{ fov: 75, position: [0.5, 0, 0] }}
        style={{ zIndex: 1 }}
      >
        <Background />

        <Rocket />

        <Float
          speed={location === "center" && 2}
          floatIntensity={location === "center" && 0.25}
        >
          <ControllerRender />
        </Float>

        <Float speed={5} floatIntensity={1}>
          <Ufo />
        </Float>

        <Float speed={5} floatIntensity={1}>
          <Earth />
        </Float>

        {location === "up" ? (
          <OrbitControls autoRotate={true} autoRotateSpeed={10} />
        ) : null}

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} intensity={2.4} />
          <Noise premultiply blendFunction={BlendFunction.ADD} />
          <Vignette offset={0.37} darkness={0.7} opacity={1} />
          <Scanline density={1.1} opacity={0.025} />
        </EffectComposer>
        <Html fullscreen position-z={0} position-x={0}>
          <CameraFrame location={location} setLocation={setLocation} />
        </Html>
      </Canvas> */
}

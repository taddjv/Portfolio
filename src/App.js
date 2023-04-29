import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls, Html } from "@react-three/drei";
import "./styles/App.css";
import "./styles/Camera.css";
import { useGeneral } from "./context";

import { Earth } from "./components/About/Earth";
import { Rocket } from "./components/Skill/Rocket";
import ControllerRender from "./components/Main/ControllerRender";
import { Ufo } from "./components/Contact/Ufo";
import CTitle from "./components/Main/CTitle";
import Background from "./components/BackgroundStars";
import ContactForm from "./components/Contact/ContactForm";
import Projects from "./components/Project/Projects";
import AboutMe from "./components/About/AboutMe";
import CameraFrame from "./components/CameraFrame";
import {
  Bloom,
  EffectComposer,
  Scanline,
  Vignette,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Skills from "./components/Skill/Skills";
function App() {
  const { location, setLocation } = useGeneral();

  return (
    <>
      <ContactForm />
      <AboutMe />
      <Projects />
      <Skills />
      {location === "center" && <CTitle />}

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
    </>
  );
}

export default App;

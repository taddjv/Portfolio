import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import "./App.css";
import { useGeneral } from "./context";
import ControllerRender from "./components/ControllerRender";
import RocketRender from "./components/RocketRender";
import ContactForm from "./components/ContactForm";
import {
  Bloom,
  EffectComposer,
  Scanline,
  Vignette,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useControls } from "leva";

function App() {
  const locationRef = useRef();
  const { location } = useGeneral();
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    if (location === "center") setCamera({ fov: 75, position: [0.5, 0, 0] });
  }, [location]);
  return (
    <>
      <ContactForm />
      <Canvas ref={locationRef} camera={camera}>
        {/* <Float speed={5} floatIntensity={20}>
        <RocketRender />
      </Float> */}
        <Float
          speed={location === "center" && 1}
          floatIntensity={location === "center" && 0.25}
        >
          <ControllerRender />
        </Float>
        <Stars />
        {location !== "center" && (
          <OrbitControls autoRotate={true} autoRotateSpeed={25} />
        )}

        <color attach="background" args={["#323232"]} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} intensity={2.4} />
          <Noise premultiply blendFunction={BlendFunction.ADD} />
          <Vignette offset={0.37} darkness={0.7} opacity={1} />
          <Scanline density={1.1} opacity={0.025} />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;

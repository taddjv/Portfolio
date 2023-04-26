import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { useGeneral } from "../../context";

function Text() {
  const { buttonHover, setButtonHover } = useGeneral();
  const [text, setText] = useState(null);
  useEffect(() => {
    if (buttonHover === null) setText(null);
    if (buttonHover === "yellow") setText("Learn more about me !");
    if (buttonHover === "red") setText("Look at my skills !");
    if (buttonHover === "green") setText("View my projects !");
    if (buttonHover === "blue") setText("Contact me !");
  }, [buttonHover]);
  return (
    <Html position={[0, 0.1, 0]}>
      <div className="controller-text">{text}</div>
    </Html>
  );
}

export default Text;

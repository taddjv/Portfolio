import React from "react";
import { useGeneral } from "../../context";
import { useSpring, animated } from "react-spring";
import ATitle from "./ATitle";
import portrait from "../../images/portraitPic.png";
import "../../styles/About.css";
import { aboutMe } from "../../data";

const AboutMe = () => {
  const { location, setLocation } = useGeneral();

  const thing = useSpring({
    top: location === "down" ? "0" : "100vh",
    // top: location === "center" ? "0" : "-100vh",
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
      precision: 0.0001,
    },
  });
  return (
    <animated.div style={thing} className="container1">
      <ATitle />
      <div className="aboutMe">
        <div className="am">{aboutMe}</div>
        <div className="am">
          <div className="am-i-background">
            <img className="am-image" src={portrait} />
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default AboutMe;

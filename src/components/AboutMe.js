import React from "react";
import { useGeneral } from "../context";
import { useSpring, animated } from "react-spring";
import ATitle from "./ATitle";
import portrait from "../images/portraitPic.png";
import "../About.css";

const AboutMe = () => {
  const { location, setLocation } = useGeneral();
  const thing = useSpring({
    top: location === "down" ? "0" : "-100vh",
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
        <div className="am">
          With the advancement of technology in this world, my admiration for it
          grew higher. Tech is a part of everyone's life but only a few can
          truly appreciate its magnificence. Learning how to code has been the
          best decision of my life because it brought me closer to this
          wonderful community. Gaining this ability to build applications allows
          me to bring value to others. I studied in an intensive software
          engineering program at AppAcademy. This unforgettable experience
          taught me so much and more importantly it gave me the drive to develop
          original solutions. I am skilled in several powerful programming
          languages, such as JavaScript, and Python. My capability to work with
          others is one of my key strengths as a developer because I believe
          teamwork is crucial for achieving greatness. I want to work for a
          company that is innovative and active so I can contribute my abilities
          and take on new challenges.
        </div>
        <div className="am">
          <div className="am-i-background">
            <img className="am-image" src={portrait} />
          </div>
        </div>
      </div>

      <button className="cf-button" onClick={() => setLocation("center")}>
        Go Back
      </button>
    </animated.div>
  );
};

export default AboutMe;

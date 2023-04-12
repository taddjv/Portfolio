import React, { useEffect, useState, useRef } from "react";
import { useGeneral } from "../context";
import { useSpring, animated } from "react-spring";
const ContactForm = () => {
  const { location, setLocation } = useGeneral();
  const thing = useSpring({
    top: location === "up" ? "0" : "100vh",
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
      precision: 0.0001,
    },
  });

  return (
    <animated.div style={thing} className="container">
      <div className="contact-form">
        <div className="cf-title">Contact me !</div>
        <div className="cf-data">
          <div className="cf-label">Name</div>
          <input className="cf-input" type="text"></input>
        </div>
        <div className="cf-data">
          <div className="cf-label">Subject</div>
          <input className="cf-input" type="text"></input>
        </div>
        <div className="cf-data">
          <div className="cf-label">Email</div>
          <input className="cf-input" type="email"></input>
        </div>
        <div className="cf-data">
          <div className="cf-label">Message</div>
          <textarea className="cf-input" type="text"></textarea>
        </div>
        <button onClick={() => setLocation("center")}>Send</button>
      </div>
    </animated.div>
  );
};

export default ContactForm;

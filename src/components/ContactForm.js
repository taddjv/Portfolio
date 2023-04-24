import React, { useEffect, useState, useRef } from "react";
import { useGeneral } from "../context";
import { useSpring, animated } from "react-spring";
import { inputFocusIn, inputFocusOut } from "../helper";
import FTitle from "./FTitle";
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
    <animated.div style={thing} className="container1">
      <div className="contact-form">
        {/* <div className="cf-title">Contact me !</div> */}
        <FTitle />
        <div className="cf-data">
          <div className="cf-label">Name</div>
          <input
            onFocus={() => inputFocusIn(1)}
            onBlur={(e) => inputFocusOut(1, e)}
            className="cf-input-i cf-input"
            type="text"
          ></input>
        </div>
        <div className="cf-data">
          <div className="cf-label">Subject</div>
          <input
            onFocus={() => inputFocusIn(2)}
            onBlur={(e) => inputFocusOut(2, e)}
            className="cf-input-i cf-input"
            type="text"
          ></input>
        </div>
        <div className="cf-data">
          <div className=" cf-label">Email</div>
          <input
            onFocus={() => inputFocusIn(3)}
            onBlur={(e) => inputFocusOut(3, e)}
            className="cf-input-i cf-input"
            type="email"
          ></input>
        </div>
        <div className="cf-data">
          <div className="cf-label">Message</div>
          <textarea
            onFocus={() => inputFocusIn(4)}
            onBlur={(e) => inputFocusOut(4, e)}
            className="cf-input cf-input-m"
            type="text"
          ></textarea>
        </div>
        <button className="cf-button" onClick={() => setLocation("center")}>
          Send
        </button>
      </div>
    </animated.div>
  );
};

export default ContactForm;

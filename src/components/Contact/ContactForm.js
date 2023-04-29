import React, { useState, useRef } from "react";
import { useGeneral } from "../../context";
import { useSpring, animated } from "react-spring";
import emailjs from "@emailjs/browser";
import { emailCheck } from "../../helper";
import FTitle from "./FTitle";

const ContactForm = () => {
  const { location, setLocation } = useGeneral();
  const [errors, setErrors] = useState([]);
  const form = useRef({
    name: null,
    subject: null,
    email: null,
    message: null,
    errors: [],
  });
  const final = useRef({});

  const send = (e) => {
    e.preventDefault();
    if (emailCheck(form.current).ok) {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          {
            name: form.current.name,
            subject: form.current.subject,
            email: form.current.email,
            message: form.current.message,
          },
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(() => {
          setLocation("center");
          form.current.name = "";
          form.current.subject = "";
          form.current.email = "";
          form.current.message = "";
        });
    } else {
      setErrors(emailCheck(form.current).errors);
    }
  };

  const thing = useSpring({
    top: location === "up" ? "0" : "-100vh",
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
      precision: 0.0001,
    },
  });

  return (
    <animated.div style={thing} className="container1">
      <form useRef={final} onSubmit={send} className="contact-form">
        <FTitle />
        <div
          className="cf-data"
          onChange={(e) => {
            setErrors([]);
            form.current.name = e.target.value;
          }}
          onBlur={(e) => {
            if (!e.target.value) {
              e.target.className = "cf-input-i cf-input";
              e.currentTarget.childNodes[0].style.bottom = "24px";
            }
          }}
          onFocus={(e) => {
            setErrors([]);
            e.currentTarget.childNodes[0].style.bottom = "56px";
            e.target.className = "cf-input-i cf-input-2";
          }}
        >
          <div className="cf-label">Name</div>
          <input
            className={`cf-input-i ${
              errors.includes("name") ? "cf-error-2" : "cf-input"
            }`}
            type="text"
          ></input>
        </div>
        <div
          className="cf-data"
          onChange={(e) => {
            setErrors([]);
            form.current.subject = e.target.value;
          }}
          onBlur={(e) => {
            if (!e.target.value) {
              e.target.className = "cf-input-i cf-input";
              e.currentTarget.childNodes[0].style.bottom = "24px";
            }
          }}
          onFocus={(e) => {
            setErrors([]);
            e.currentTarget.childNodes[0].style.bottom = "56px";
            e.target.className = "cf-input-i cf-input-2";
          }}
        >
          <div className="cf-label">Subject</div>
          <input className="cf-input-i cf-input" type="text"></input>
        </div>
        <div
          className="cf-data"
          onChange={(e) => {
            setErrors([]);
            form.current.email = e.target.value;
          }}
          onBlur={(e) => {
            if (!e.target.value) {
              e.target.className = "cf-input-i cf-input";
              e.currentTarget.childNodes[0].style.bottom = "24px";
            }
          }}
          onFocus={(e) => {
            setErrors([]);
            e.currentTarget.childNodes[0].style.bottom = "56px";
            e.target.className = "cf-input-i cf-input-2";
          }}
        >
          <div className=" cf-label">Email</div>
          <input
            className={`cf-input-i ${
              errors.includes("email") ? "cf-error-2" : "cf-input"
            }`}
            type="email"
          ></input>
        </div>
        <div
          className="cf-data"
          onChange={(e) => {
            setErrors([]);
            form.current.message = e.target.value;
          }}
          onBlur={(e) => {
            if (!e.target.value) {
              e.target.className = "cf-input-m cf-input";
              e.currentTarget.childNodes[0].style.bottom = "24px";
            }
          }}
          onFocus={(e) => {
            setErrors([]);
            e.currentTarget.childNodes[0].style.bottom = "216px";
            e.target.className = "cf-input-m cf-input-2";
          }}
        >
          <div className="cf-label">Message</div>
          <textarea
            className={`cf-input-m ${
              errors.includes("message") ? "cf-error-2" : "cf-input"
            }`}
            type="text"
          ></textarea>
        </div>
        <button className="cf-button-2" type="submit">
          Send
        </button>
      </form>
    </animated.div>
  );
};

export default ContactForm;

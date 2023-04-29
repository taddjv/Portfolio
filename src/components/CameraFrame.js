import React, { useEffect, useState, useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIcon from "@mui/icons-material/Assignment";

const CameraFrame = ({ location, setLocation }) => {
  const [light, setLight] = useState(false);
  const [color, setColor] = useState(null);
  const time = useRef(Date.now().toString());

  const logoStyle = useRef({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: `${window.innerWidth / 50}`,
  });
  useEffect(() => {
    time.current = new Date().toString();
    setTimeout(() => {
      setLight(!light);
    }, 1000);
  });
  useEffect(() => {
    if (location === "up") {
      setColor();
    }
  }, [location]);
  useEffect(() => {
    logoStyle.current = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: `${window.innerWidth / 50}`,
    };
  }, [window.innerWidth]);

  return (
    <div className="camera-container">
      <div className="c-top-left">
        <div className="c-t-l">
          <span
            style={{
              background: `${
                light ? "rgba(245, 14, 2, 1)" : "rgba(245, 14, 2, 0)"
              }`,
            }}
            className="camera-dot"
          ></span>
          <span className="camera-rec">REC</span>
        </div>
      </div>
      <div className="c-top-right">
        <a
          className="c-t-r-logo"
          href="https://www.linkedin.com/in/tadd-jourdain-vilbrun/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon style={logoStyle.current} />
        </a>
        <a
          className="c-t-r-logo"
          href="https://github.com/taddjv"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon style={logoStyle.current} />
        </a>
        <a
          className="c-t-r-logo"
          href="https://docs.google.com/document/d/e/2PACX-1vQm2ZPcNM3EPqDp7Q_LYG8yXGJ5XqLM1PtEbA7mQZQCjg1urFbDUn6k10YZy57-Kn5uNWurNag_enWy/pub"
          target="_blank"
          rel="noreferrer"
        >
          <AssignmentIcon style={logoStyle.current} />
        </a>
      </div>
      <div className="c-bottom-left"></div>
      <div className="c-bottom-right">
        {location !== "center" && (
          <button className="cf-button" onClick={() => setLocation("center")}>
            Go Back
          </button>
        )}
      </div>
      <div className="c-middle">
        <div className="c-m-top-left"></div>
        <div className="c-m-top-right"></div>
        <div className="c-m-bottom-left"></div>
        <div className="c-m-bottom-right"></div>
        <div className="c-bottom">{time.current.slice(0, 24)}</div>
      </div>
    </div>
  );
};

export default CameraFrame;

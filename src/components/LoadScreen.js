import React, { useState, useEffect, useRef } from "react";
import "../styles/Load.css";

const LoadScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".load-conatainer").style.display = "none";
    }, 4000);
  });
  return (
    <div className="load-conatainer">
      <div className="load-text">Loading...</div>
      <div className="load-bar">
        <div className="l-b-porgress"></div>
      </div>
    </div>
  );
};

export default LoadScreen;

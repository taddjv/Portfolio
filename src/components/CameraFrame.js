import React, { useEffect, useState, useRef } from "react";

function CameraFrame() {
  const [light, setLight] = useState(false);
  const time = useRef(Date.now().toString());
  useEffect(() => {
    time.current = new Date().toString();
    setTimeout(() => {
      setLight(!light);
    }, 1000);
  });
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
      <div className="c-top-right"></div>
      <div className="c-bottom-left"></div>
      <div className="c-bottom-right"></div>
      <div className="c-middle">
        <div className="c-m-top-left"></div>
        <div className="c-m-top-right"></div>
        <div className="c-m-bottom-left"></div>
        <div className="c-m-bottom-right"></div>
        <div className="c-bottom">{time.current.slice(0, 24)}</div>
      </div>
    </div>
  );
}

export default CameraFrame;

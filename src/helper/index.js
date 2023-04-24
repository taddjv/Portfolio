export const inputFocusIn = (n) => {
  const div = document.querySelectorAll(`.cf-data`)[n - 1];
  if (n === 4) {
    div.childNodes[0].style.bottom = "216px";
    div.childNodes[1].style.border = "solid rgba(255, 255, 255, 1) 4px";
    div.childNodes[1].style.background = "rgba(255, 255, 255, 0.2)";
  } else {
    div.childNodes[0].style.bottom = "56px";
    div.childNodes[1].style.border = "solid rgba(255, 255, 255, 1) 4px";
    div.childNodes[1].style.background = "rgba(255, 255, 255, 0.2)";
  }
};
export const inputFocusOut = (n, e) => {
  const div = document.querySelectorAll(`.cf-data`)[n - 1];

  if (!e.target.value) {
    div.childNodes[0].style.bottom = "24px";
    div.childNodes[1].style.border = "solid rgba(255, 255, 255, 0) 4px";
    div.childNodes[1].style.borderBottom = "solid white 4px";
    div.childNodes[1].style.background = "rgba(255, 255, 255, 0)";
  }
};

export const controllerTitleAnimation = () => {
  const text = document.querySelector(".main-title").childNodes;
  text.forEach((ele) => {
    setTimeout(() => {}, 1000);
  });
};

export const animations = (n, h) => {
  const colors = ["#C1121C", "#F7BA0B", "#007243", "#00387b"];
  return {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0vh",
      opacity: 1,
      transition: {
        delay: n,
        duration: 2,
        type: "spring",
        damping: 10,
        mass: 0.8,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.5,
      margin: "3.2px",
      rotate: 11.25,
      color: colors[h - 1],
      transition: {
        delay: 0.1,
        // duration: 0.5,
      },
    },
    tap: {
      scale: 0.8,
      color: "#a7a4e0",
      rotate: 0,
    },
  };
};

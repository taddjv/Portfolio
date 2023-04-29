export const controllerTitleAnimation = () => {
  const text = document.querySelector(".main-title").childNodes;
  text.forEach((ele) => {
    setTimeout(() => {}, 1000);
  });
};

export const animations = (n, h) => {
  const colors = ["rgba(193, 18, 28, 1)", "#F7BA0B", "#007243", "#00387b"];
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

export const emailCheck = (data) => {
  let errors = [];
  if (!data.name) errors.push("name");
  if (!data.email) errors.push("email");
  if (!data.message) errors.push("message");

  return { ok: errors.length === 0, errors: errors };
};

export const emailLog = () => {
  
}
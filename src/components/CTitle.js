import React, { useState, useEffect } from "react";
import { controllerTitleAnimation } from "../helper";
import { motion } from "framer-motion";
import "../Text.css";

const animations = (n, h) => {
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
      margin: "0 2%",
      rotate: 11.25,
      color: colors[h - 1],
      textShadow: "2px 2px 0px #b2b4b2",
      transition: {
        duration: 0.5,
      },
    },
    tap: {
      scale: 0.8,
      color: "#a7a4e0",
      rotate: 0,
    },
  };
};
const CTitle = () => {
  useEffect(() => {
    // console.log(color);
    controllerTitleAnimation();
  }, []);
  return (
    <>
      {/* <div className="main-title">Hi, I'm Tadd</div> */}
      {/* <h1 class="animate__animated animate__bounce main-title">
        An animated element
      </h1> */}
      <div
        // style={{ display: `${color ? "inline-block" : "none"}` }}
        class="main-title"
      >
        <motion.span
          variants={animations(1, 1)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          H
        </motion.span>
        <motion.span
          variants={animations(1.2, 2)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          i
        </motion.span>
        <motion.span
          variants={animations(1.4, 3)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          ,
        </motion.span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <motion.span
          variants={animations(1.6, 4)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          I
        </motion.span>
        <motion.span
          variants={animations(1.8, 1)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          '
        </motion.span>
        <motion.span
          variants={animations(2, 2)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          m
        </motion.span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <motion.span
          variants={animations(2.2, 3)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          T
        </motion.span>
        <motion.span
          variants={animations(2.4, 4)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          a
        </motion.span>
        <motion.span
          variants={animations(2.6, 1)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          d
        </motion.span>
        <motion.span
          variants={animations(2.8, 2)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          d
        </motion.span>
      </div>
    </>
  );
};

export default CTitle;

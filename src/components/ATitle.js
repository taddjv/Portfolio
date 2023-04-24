import React from "react";
import { motion } from "framer-motion";
import "../Text.css";
import { animations } from "../helper";
const ATitle = () => {
  return (
    <>
      <div class="main-title">
        <motion.span
          variants={animations(1, 1)}
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          A
        </motion.span>
        <motion.span
          variants={animations(1.2, 2)}
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          b
        </motion.span>
        <motion.span
          variants={animations(1.6, 4)}
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          o
        </motion.span>
        <motion.span
          variants={animations(1.8, 1)}
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          u
        </motion.span>
        <motion.span
          variants={animations(2, 2)}
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          t
        </motion.span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <motion.span
          variants={animations(2.2, 3)}
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          M
        </motion.span>
        <motion.span
          variants={animations(2.4, 4)}
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          e
        </motion.span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <motion.span
          variants={animations(2.8, 2)}
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          !
        </motion.span>
      </div>
    </>
  );
};

export default ATitle;

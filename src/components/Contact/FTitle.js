import React from "react";
import { motion } from "framer-motion";
import "../../styles/Text.css";
import { animations } from "../../helper";
const FTitle = () => {
  return (
    <>
      <div class="main-title">
        <motion.span
          variants={animations(1, 1)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          C
        </motion.span>
        <motion.span
          variants={animations(1.2, 2)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          o
        </motion.span>
        <motion.span
          variants={animations(1.6, 4)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          n
        </motion.span>
        <motion.span
          variants={animations(1.8, 1)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          t
        </motion.span>
        <motion.span
          variants={animations(2, 2)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          a
        </motion.span>
        <motion.span
          variants={animations(2.2, 3)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          c
        </motion.span>
        <motion.span
          variants={animations(2.4, 4)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          t
        </motion.span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <motion.span
          variants={animations(2.6, 1)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          m
        </motion.span>
        <motion.span
          variants={animations(2.8, 2)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        >
          e
        </motion.span>
        <motion.span
          variants={animations(2.6, 1)}
          // initial="hidden"
          // animate="visible"
          whileHover="hover"
          whileTap="tap"
          class="m-t-letter"
        ></motion.span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <motion.span
          variants={animations(2.8, 2)}
          // initial="hidden"
          // animate="visible"
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

export default FTitle;

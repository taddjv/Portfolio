import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/Text.css";
import { animations } from "../../helper";

const CTitle = () => {
  return (
    <>
      <div class="main-title">
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

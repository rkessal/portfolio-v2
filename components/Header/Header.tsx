"use client";
import React from "react";
import { Variants, easeInOut, motion } from "framer-motion";

type Props = {};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.76, 0, 0.14, 1],
      duration: 1.6,
    },
  },
};

export default function Header({}: Props) {
  return (
    <nav>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        className="flex flex-row justify-between items-center px-8 h-20 top-0 w-full fixed z-20 text-white mix-blend-difference"
      >
        <motion.li variants={item} className="uppercase font-light">
          <a href="#me">about</a>
        </motion.li>
        <motion.li variants={item} className="font-light uppercase">
          <a href="#work">work</a>
        </motion.li>
        <motion.li variants={item} className="font-light uppercase">
          <a href="#contact">contact</a>
        </motion.li>
        <motion.li variants={item} className="font-light uppercase">
          en
        </motion.li>
      </motion.ul>
    </nav>
  );
}

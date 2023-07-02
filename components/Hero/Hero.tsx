"use client";
import Image from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";

type Props = {};

const heroWhiteForeGround: Variants = {
  open: {
    height: 0,
    transition: {
      delay: 0.4,
      ease: [0.76, 0, 0.14, 1],
      duration: 1.6,
    },
  },
};

const bottomTop: Variants = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      delay: 2.1,
      ease: [0.76, 0, 0.14, 1],
      duration: 1.6,
    },
  },
};

const about: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.76, 0, 0.14, 1],
      duration: 0.6,
      delay: 4.2,
    },
  },
};

const imageContainer: Variants = {
  initial: {
    clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
    transition: {
      ease: [0.76, 0, 0.14, 1],
      duration: 1.6,
      delay: 3.7,
    },
  },
};

const image: Variants = {
  initial: {
    scale: 1.05,
  },
  animate: {
    scale: 1,
    transition: {
      ease: [0.76, 0, 0.14, 1],
      duration: 1.6,
    },
  },
};

export default function Hero({}: Props) {
  return (
    <header id="me">
      <div className="flex flex-col h-[70vh] px-8 pt-40 relative">
        <img src="errka.svg" alt="" />
        <div className="absolute bottom-8 overflow-hidden">
          <motion.p variants={bottomTop} initial="initial" animate="animate">
            © ALL RIGHTS RESERVED
          </motion.p>
        </div>
        <motion.div
          variants={heroWhiteForeGround}
          initial="initial"
          animate="open"
          exit="exit"
          className="bg-white absolute top-0 left-0 right-0 h-full"
        ></motion.div>
      </div>
      <div className="flex flex-row w-full bg-white px-8">
        <motion.div
          variants={about}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col justify-between flex-1 pt-8 pr-4 text-black h1-sans "
        >
          <div>
            <p>
              I'm <span className="h1-serif">rayhan</span>.
            </p>
          </div>
          <div className="self-end text-right ">
            <p>
              <span className="h1-serif">frontend</span> developer,
            </p>
            <p className="leading-[0.75]">
              based in <span className="h1-serif ">Paris</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-[40%] -mt-36"
          variants={imageContainer}
          initial="initial"
          animate="animate"
        >
          <motion.img
            variants={image}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.6, once: true }}
            src="me.jpg"
            alt="Rayhan"
            className=" z-10"
          />
        </motion.div>
      </div>
    </header>
  );
}

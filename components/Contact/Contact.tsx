"use client";
import React from "react";
import Markee from "../Work/Markee/Markee";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { Variants, motion } from "framer-motion";

type Props = {};

const rightSideContainer: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1.9,
    },
  },
};

const rightSide: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.76, 0, 0.14, 1],
      duration: 0.8,
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
      delay: 0.6,
    },
  },
};

export default function Contact({}: Props) {
  return (
    <section id="contact" className="bg-white text-black">
      <Markee baseVelocity={-5}>contact</Markee>
      <Markee baseVelocity={5}>contact</Markee>
      <div className="px-8 pt-36 ">
        <SectionTitle>Contact</SectionTitle>
        <div className="flex flex-col gap-16 md:gap-8 md:flex-row py-16">
          <motion.div
            className="md:w-[40%]"
            variants={imageContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.img
              variants={image}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              src="paris.png"
              className="z-10 w-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={rightSideContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col flex-1 gap-10 md:gap-20"
          >
            <motion.div variants={rightSide} className="indent-24 h1-sans">
              think <span className="h1-serif">we</span>'re, <br /> a{" "}
              <span className="h1-serif">good fit</span>? <br />
              let's work <span className="h1-serif">together</span>
            </motion.div>
            <motion.input variants={rightSide} placeholder="YOUR NAME" />
            <motion.input variants={rightSide} placeholder="YOUR EMAIL" />
            <motion.textarea
              variants={rightSide}
              placeholder="YOUR AWESOME PROJECT IDEA"
              rows={7}
            />
            <motion.div variants={rightSide} className="w-fit md:mt-8">
              <button>send it</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { Variants, motion } from "framer-motion";
import React from "react";

type Props = {
  children: string;
};

const title: Variants = {
  initial: {
    // clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    y: 120,
  },
  animate: {
    y: 0,
    // clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    transition: {
      duration: 1.6,
      delay: 0.2,
      ease: [0.76, 0, 0.14, 1],
    },
  },
};
export default function SectionTitle({ children }: Props) {
  return (
    <div className="overflow-hidden mb-24">
      <motion.h1
        variants={title}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="title"
      >
        {children}
      </motion.h1>
    </div>
  );
}

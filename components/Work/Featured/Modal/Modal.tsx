"use client";
import React, { useEffect, useRef, useState } from "react";
import { Project } from "../Featured";
import Image from "next/image";
import { Variants, motion, useMotionValue } from "framer-motion";
import { gsap } from "gsap";

type Props = {
  modal: { active: boolean; index: number };
  projects: Project[];
};

const scaleAnimation: Variants = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
  exit: {
    width: "100vh",
    transition: {
      duration: 1,
    },
  },
};

export default function Modal({ modal, projects }: Props) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const moveModalContainerX = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveModalContainerY = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveLabelX = gsap.quickTo(label.current, "left", {
      duration: 0.2,
      ease: "power3",
    });
    const moveLabelY = gsap.quickTo(label.current, "top", {
      duration: 0.2,
      ease: "power3",
    });
    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      moveModalContainerX(pageX);
      moveModalContainerY(pageY);
      moveLabelX(pageX);
      moveLabelY(pageY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        exit="exit"
        animate={active ? "open" : "closed"}
        className="h-[300px] w-[400px] flex items-center justify-center absolute overflow-hidden pointer-events-none "
      >
        <div
          className="h-full w-full absolute transition-all duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
          style={{ top: index * -100 + "%" }}
        >
          {projects.map((project) => {
            const { image, name, id } = project;
            return (
              <div
                key={id}
                className="relative h-full w-full flex items-center justify-center bg-black"
              >
                <Image
                  src={`/projects/images/${image}`}
                  alt={name}
                  fill
                  sizes="400px"
                  className="object-cover object-center"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={label}
        className="flex items-center justify-center absolute pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
      >
        <div className="flex items-center justify-center bg-white rounded-full w-24 h-24 opacity-90">
          <span className="text-black ">
            {projects.find((project) => index === project.id)?.show
              ? "view"
              : "soon"}
          </span>
        </div>
      </motion.div>
    </>
  );
}

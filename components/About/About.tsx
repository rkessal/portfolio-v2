"use client";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

type Props = {};

function About({}: Props) {
  const container = useRef<HTMLDivElement>(null);

  // bad performance
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const rgb = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [255, 0, 0, 255],
    {
      clamp: false,
    }
  );
  rgb.on("change", (val) => {
    container!.current!.style.backgroundColor = `rgb(${val - 7}, ${
      val - 4
    }, ${val})`;
  });

  return (
    <motion.div
      ref={container}
      className="bg-white px-8 py-96 uppercase flex justify-center"
    >
      <div className="max-w-2xl h2-sans text-black">
        <Paragraph>I've started graphic design when I was 13.</Paragraph>
        <Paragraph>Thought it was some cool shit.</Paragraph>
        <Paragraph>I still do.</Paragraph>
        <Paragraph>I studied software engineering</Paragraph>
        <Paragraph>I can now bring life to my ideas.</Paragraph>
        <Paragraph>I can now bring life to your ideas.</Paragraph>
        <Paragraph>
          I think that design isn't just pixels and frame animations.
        </Paragraph>
        <Paragraph>It's more of a story, a message.</Paragraph>
        <Paragraph>Do you have a story to tell?</Paragraph>
        <Paragraph>Tell me about it.</Paragraph>
        <Paragraph>I'll do the rest.</Paragraph>
        <Paragraph>With pixels and frame animations.</Paragraph>
      </div>
    </motion.div>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

function smoothSpring(value: MotionValue<number>) {
  return useSpring(value, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
}

function Paragraph({ children }: { children: string }) {
  const container = useRef(null);
  const { scrollYProgress: scrollYPosition } = useScroll({
    target: container,
    offset: ["100% 80%", "start end"],
  });
  const { scrollYProgress: scrollOpacity } = useScroll({
    target: container,
    offset: ["start 40%", "start end"],
  });
  const y = smoothSpring(useParallax(scrollYPosition, 600));
  const opacity = smoothSpring(useTransform(scrollOpacity, [0, 1], [1, 0]));

  return (
    <div
      ref={container}
      className="h-[30vh] text-white mix-blend-difference flex items-start justify-center text-center"
    >
      <motion.p className="" style={{ y, opacity }}>
        {children}
      </motion.p>
    </div>
  );
}

export default About;

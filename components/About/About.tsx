import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";

type Props = {};

function About({}: Props) {
  const { t } = useTranslation();
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

  useEffect(() => {
    return () => {
      rgb.clearListeners();
    };
  }, []);

  return (
    <motion.div
      ref={container}
      className="flex justify-center px-8 py-64 uppercase bg-white lg:py-96"
    >
      <div className="max-w-2xl text-black uppercase h2-sans">
        <Paragraph>{t("ABOUT.COPY1")}.</Paragraph>
        <Paragraph>{t("ABOUT.COPY2")}.</Paragraph>
        <Paragraph>{t("ABOUT.COPY3")}.</Paragraph>
        <Paragraph>{t("ABOUT.COPY4")}.</Paragraph>
        <Paragraph>{t("ABOUT.COPY5")}.</Paragraph>
        <Paragraph>{t("ABOUT.COPY6")}.</Paragraph>
        <Paragraph>{t("ABOUT.COPY7")}.</Paragraph>
        <Paragraph>{t("ABOUT.COPY8")}.</Paragraph>
        {/* <Paragraph>{t("ABOUT.COPY9")}?</Paragraph> */}
        {/* <Paragraph>{t("ABOUT.COPY10")}.</Paragraph>
        <Paragraph>{t("ABOUT.COPY11")}.</Paragraph>
        <Paragraph>{t("ABOUT.COPY12")}.</Paragraph> */}
      </div>
    </motion.div>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

function useSmoothSpring(value: MotionValue<number>) {
  return useSpring(value, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
}

const Paragraph = ({ children }: { children: string | string[] }) => {
  const container = useRef(null);
  const { scrollYProgress: scrollYPosition } = useScroll({
    target: container,
    offset: ["100% 80%", "start end"],
  });
  const { scrollYProgress: scrollOpacity } = useScroll({
    target: container,
    offset: ["start 40%", "start end"],
  });
  const y = useSmoothSpring(useParallax(scrollYPosition, 600));
  const opacity = useTransform(scrollOpacity, [0, 1], [1, 0]);

  useEffect(() => {
    return () => {
      y.clearListeners();
      opacity.clearListeners();
    };
  }, []);

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
};

export default About;

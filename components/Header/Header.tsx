import React from "react";
import { Variants, easeInOut, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import ChangeLanguage from "../shared/ChangeLanguage/ChangeLanguage";

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
  exit: {
    opacity: 0,
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
  const { t } = useTranslation();
  return (
    <nav>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        viewport={{ once: true }}
        className="flex flex-row justify-between items-center px-8 h-20 top-0 w-full fixed z-20 text-white mix-blend-difference"
      >
        <motion.li variants={item} className="uppercase font-light">
          <a href="#me">{t("HEADER.ABOUT")}</a>
        </motion.li>
        <motion.li variants={item} className="font-light uppercase">
          <a href="#work">{t("HEADER.WORK")}</a>
        </motion.li>
        <motion.li variants={item} className="font-light uppercase">
          <a href="#contact">{t("HEADER.CONTACT")}</a>
        </motion.li>
        <motion.li variants={item} className="font-light uppercase">
          <ChangeLanguage />
        </motion.li>
      </motion.ul>
    </nav>
  );
}

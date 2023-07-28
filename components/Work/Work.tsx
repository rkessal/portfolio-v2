"use client";
import { Variants, easeIn, easeInOut, easeOut, motion } from "framer-motion";
import React from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Featured, { Project } from "./Featured/Featured";
import Markee from "./Markee/Markee";
import { UseTranslation, useTranslation } from "next-i18next";

type Props = {};

const projects: Project[] = [
  {
    id: 0,
    name: "Org. mondiale de la solidarite",
    category: "Web development",
    image: "oms.png",
    show: true,
    stack: "Wordpress",
    link: "/oms",
  },
  {
    id: 1,
    name: "Triades",
    category: "Logo design",
    image: "triades.png",
    show: false,
    stack: "Illustrator",
  },
  {
    id: 2,
    name: "Nessnotes",
    category: "Mobile App ",
    image: "ness-notes.png",
    show: false,
    stack: "React Native",
  },
  // {
  //   id: 3,
  //   name: "Team.",
  //   category: "Web design",
  //   image: "me.jpg",
  //   show: false,
  //   stack: "Figma",
  // },
];
export default function Work({}: Props) {
  const { t } = useTranslation();
  return (
    <motion.section id="work" className="bg-white text-black uppercase ">
      <Markee baseVelocity={5}>{t("WORK.WORK")}</Markee>
      <Markee baseVelocity={-5}>{t("WORK.WORK")}</Markee>
      <div className="px-8 py-36">
        <SectionTitle>{t("WORK.WORK")}</SectionTitle>
        <Featured projects={projects} />
      </div>
    </motion.section>
  );
}

"use client";
import React from "react";
import Featured, { Project } from "./Featured/Featured";
import Markee from "./Markee/Markee";
import { Variants, motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

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
    image: "paris.png",
    show: false,
    stack: "React Native",
  },
  {
    id: 3,
    name: "Team.",
    category: "Web design",
    image: "me.jpg",
    show: false,
    stack: "Figma",
  },
];

export default function Work({}: Props) {
  return (
    <section id="work" className="bg-white text-black uppercase ">
      <Markee baseVelocity={5}>work</Markee>
      <Markee baseVelocity={-5}>work</Markee>
      <div className="px-8 py-36">
        <SectionTitle>Work</SectionTitle>
        <Featured projects={projects} />
      </div>
    </section>
  );
}

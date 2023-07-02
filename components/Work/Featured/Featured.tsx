"use client";
import Link from "next/link";
import React, { useState } from "react";
import Project from "./Project/Project";
import Modal from "./Modal/Modal";

type Props = {
  projects: Project[];
};

export type Project = {
  id: number;
  name: string;
  category: string;
  image: string;
  stack: string;
  show: boolean;
  link?: string;
};

export default function Featured({ projects }: Props) {
  const isLast = (array: any[], item: any) => {
    return array.indexOf(item) === array.length - 1;
  };

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          setModal={setModal}
          isLast={isLast(projects, project)}
        />
      ))}
      <Modal modal={modal} projects={projects} />
    </>
  );
}

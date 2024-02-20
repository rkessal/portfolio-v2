"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const reversed = [...projects].reverse()

  const isLast = (array: any[], item: any) => {
    return array.indexOf(item) === array.length - 1;
  };

  const [modal, setModal] = useState({ active: false, index: 0 });
  const [canMove, setCanMove] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    setIsMobile(() => window.innerWidth <= 768);
  }, [canMove]);

  return (
    <>
      {reversed.map((project) => (
        <Project
          key={project.id}
          project={project}
          setModal={setModal}
          canMove={setCanMove}
          isLast={isLast(reversed, project)}
        />
      ))}
      {!isMobile && (
        <Modal modal={modal} canMove={canMove} projects={projects} />
      )}
    </>
  );
}

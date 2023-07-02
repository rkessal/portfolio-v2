import Link from "next/link";
import React from "react";
import { Project } from "../Featured";

type Props = {
  project: Project;
  isLast: boolean;
  setModal: ({ active, index }: { active: boolean; index: number }) => void;
};

export default function Project({ project, setModal, isLast }: Props) {
  return (
    <Link
      href={project.link || "#"}
      scroll={false}
      onMouseEnter={() => setModal({ active: true, index: project.id })}
      onMouseLeave={() => setModal({ active: false, index: project.id })}
    >
      <div
        className={`py-16 flex flex-row items-center hover:cursor-none group  ${
          isLast ? "" : "border-b-2 border-black"
        }`}
      >
        <p className="uppercase font-medium text-3xl w-[60%] truncate group-hover:-translate-x-3 ease-linear duration-200 ">
          {project.name}
        </p>
        <p className="text-[16px] ml-auto md:ml-4 group-hover:translate-x-3 ease-linear duration-200 ">
          {project.category}
        </p>
        <p className="text-[16px] ml-auto hidden md:block group-hover:-translate-x-3 ease-linear duration-200 ">
          {project.stack}
        </p>
      </div>
    </Link>
  );
}

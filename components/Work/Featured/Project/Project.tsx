import Link from "next/link";
import React from "react";
import { Project } from "../Featured";

type Props = {
  project: Project;
  isLast: boolean;
  setModal: ({ active, index }: { active: boolean; index: number }) => void;
  canMove: (canMove: boolean) => void;
};

export default function Project({ project, setModal, isLast, canMove }: Props) {
  const handleClick = () => {
    canMove(false);
    window.localStorage.setItem("scroll", String(window.scrollY));
  };
  return (
    <Link
      href={{
        pathname: project.link || "#",
      }}
      scroll={false}
      onMouseEnter={() => setModal({ active: true, index: project.id })}
      onMouseLeave={() => setModal({ active: false, index: project.id })}
      onClick={() => handleClick()}
    >
      <div
        className={`py-16 flex flex-row items-center group  ${
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

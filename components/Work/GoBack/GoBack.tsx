import Link from "next/link";
import React from "react";

type Props = {
  section: string;
};

export default function GoBack({ section }: Props) {
  return (
    <ul className="z-10">
      <li>
        <Link href={`/#${section}`} scroll={true} className="cursor-pointer">
          GO BACK
        </Link>
      </li>
    </ul>
  );
}

import React from "react";

type Props = {};

export default function Question({}: Props) {
  return (
    <div className="h-[98vh] px-8 bg-black flex justify-center items-center">
      <div className="w-[640px] p-sans text-white">
        now that you know me and the things i do, what about you?
      </div>
    </div>
  );
}

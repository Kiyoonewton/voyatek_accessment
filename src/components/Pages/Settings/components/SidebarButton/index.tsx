"use client";
import Image from "next/image";
import React, { FC, useState } from "react";

const SidebarButton: FC<{ src: string; text: string; colorSrc: string }> = (
  props,
) => {
  const [hovered, setIsHovered] = useState("");
  return (
    <button
      className="p-3 flex flex-row gap-4 text-custom-gray-200 hover:text-custom-blue"
      onMouseEnter={() => setIsHovered(props?.text)}
      onMouseLeave={() => setIsHovered("")}
    >
      <div className="w-4 h-6">
        <Image
          src={hovered === props?.text ? props?.colorSrc : props?.src}
          alt="sidebar vector"
          fill
          className="unset-position"
        />
      </div>
      <p className="">{props?.text}</p>
    </button>
  );
};

export default SidebarButton;

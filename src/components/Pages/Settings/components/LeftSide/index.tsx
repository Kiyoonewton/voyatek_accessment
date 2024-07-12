import Image from "next/image";
import React from "react";
import SidebarButton from "../SidebarButton";
import { sidebarButtonProps } from "./data";

const LeftSide = () => {
  return (
    <div
      className="bg-white px-4 py-5 rounded-md sticky top-100"
      style={{ height: "78vh", top: "132px" }}
    >
      <p>Settings</p>
      {sidebarButtonProps.map((item, index) => (
        <SidebarButton
          key={index}
          src={item?.src}
          colorSrc={item?.colorSrc}
          text={item?.text}
        />
      ))}
      <div
        className="border border-custom-gray"
        style={{ width: "100%", height: "1px" }}
      />
      <button
        className="border border-custom-dark rounded p-3 flex flex-row gap-4 absolute bottom-6"
        style={{ boxSizing: "border-box" }}
      >
        <div className="w-4 h-6">
          <Image
            src="/Vector.svg"
            alt="sidebar vector"
            fill
            className="unset-position"
          />
        </div>
        Back to Dashboard
      </button>
    </div>
  );
};

export default LeftSide;

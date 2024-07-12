"use client";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const BreadCrumbs: FC<{ subPath: string }> = (props) => {
  const pathname = usePathname();
  return (
    <p className="text-custom-gray-300">
      <span className="capitalize">{pathname.split("/")[1]}</span>
      <span className="px-2">/</span>
      <span>{props?.subPath} Settings</span>
    </p>
  );
};

export default BreadCrumbs;

"use client";
import React, { FC, useState } from "react";
import LeftSide from "./components/LeftSide";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import TableComponent from "./components/TableComponent";
import { UserProps } from "@/app/settings/types";

const Settings: FC<{ data: UserProps[] }> = (props) => {
  const [subPath, setSubPath] = useState("Users & Roles");
  const [tableType, settableType] = useState("users");

  return (
    <section className="px-8 py-5 flex gap-10">
      <div className="w-lt-side">
        <LeftSide />
      </div>
      <div className="py-3 w-full">
        <BreadCrumbs subPath={subPath} />
        <h3 className="text-2xl mt-7">{subPath}</h3>
        <p className="pt-3 text-custom-gray-300">
          Manage all users in your business
        </p>
        <span className=" flex gap-5 mt-5 mb-2">
          <button
            onClick={() => {
              settableType("users");
            }}
            className={`text-custom-gray-300 custom-border ${
              tableType === `users` ? `custom-active-border` : ``
            }
            `}
          >
            Users
          </button>
          <button
            onClick={() => {
              settableType("Roles");
            }}
            className={`text-custom-gray-300 custom-border ${
              tableType === "Roles" && "custom-active-border"
            }
            `}
          >
            Roles
          </button>
        </span>
        <TableComponent data={props?.data} />
      </div>
    </section>
  );
};

export default Settings;

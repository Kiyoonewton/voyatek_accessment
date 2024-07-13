"use client";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import React, { FC, useState } from "react";
import TableComponent from "../TableComponent";
import { UserProps } from "@/app/settings/types";

const UsersAndRoles: FC<{ data: UserProps[]; subPath?: string }> = (props) => {
  const [tableType, settableType] = useState("users");

  return (
    <div className="py-3 w-full">
      <BreadCrumbs subPath={props?.subPath} />
      <h3 className="text-2xl mt-7">{props?.subPath}</h3>
      {props?.subPath === "Users and Roles" && (
        <p className="pt-3 text-custom-gray-300">
          Manage all users in your business
        </p>
      )}
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
      {tableType === `users` ? (
        <TableComponent data={props?.data} />
      ) : (
        <h1 className="text-3xl border-1 border-custom-blue p-7 m-auto mt-18 w-full text-center">
          Under construction
        </h1>
      )}
    </div>
  );
};

export default UsersAndRoles;

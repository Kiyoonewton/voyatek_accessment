"use client";
import React, { useState } from "react";
import LeftSide from "./components/LeftSide";
import BreadCrumbs from "@/components/Common/BreadCrumbs";
import { Table, TableHead, TableHeader } from "@/components/ui/table";

const Settings = () => {
  const [subPath, setSubPath] = useState("Users & Roles");
  const [tableType, settableType] = useState("users");

  return (
    <section className="px-8 py-5 flex gap-10">
      <div className="w-17%">
        <LeftSide />
      </div>
      <div className="py-3">
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
        <Table>
          <TableHeader>
            <TableHead className="">Name</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="">Address</TableHead>
          </TableHeader>
        </Table>
      </div>
    </section>
  );
};

export default Settings;

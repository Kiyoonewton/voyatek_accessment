"use client";
import React, { FC, useState } from "react";
import LeftSide from "./components/LeftSide";
import { UserProps } from "@/app/settings/types";
import UsersAndRoles from "./components/UsersAndRoles";
import { useAppContext } from "@/context";

const Settings: FC<{ data: UserProps[] }> = (props) => {
  const context = useAppContext();
  const value = context?.value;

  return (
    <section className="px-8 py-5 flex gap-10">
      <div className="w-lt-side">
        <LeftSide />
      </div>
      {value?.sideClicked === "Users and Roles" ? (
        <UsersAndRoles subPath={value?.sideClicked} data={props?.data} />
      ) : (
        <h1 className="text-3xl border-1 border-custom-blue p-7 m-auto mt-18">
          Under construction
        </h1>
      )}
    </section>
  );
};

export default Settings;

import Userform from "@/components/common/Forms";
import Settings from "@/components/Pages/Settings";
import React from "react";
import { UserProps } from "./types";

const SettingsPage = async () => {
  const getUsers = await fetch(
    `https://ca6f941d59d526a78e45.free.beeceptor.com/api/users/`,
  );
  const data: UserProps[] = await getUsers.json();  

  return <Settings data={data}/>;
};

export default SettingsPage;

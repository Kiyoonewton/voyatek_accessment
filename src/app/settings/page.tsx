import Settings from "@/components/Pages/Settings";
import React from "react";
import NotFound from "../not-found";
import { Metadata } from "next";

const SettingsPage = async () => {
  const url = process.env.NEXT_PUBLIC_ENDPOINT as string;
  const getUsers = await fetchUsers(url);
  return <Settings data={getUsers} />;
};

export const metadata: Metadata = {
  title: "Welcome to the the Dashboard",
  description:
    "Here we Cater for your travelling and well being, explore our website",
};

async function fetchUsers(url: string) {
  try {
    const response = await fetch(url, { next: { revalidate: 0 } });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();
    return users;
  } catch (error) {
    return <NotFound />;
  }
}

export default SettingsPage;

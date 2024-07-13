import { Metadata } from "next";
import NotFound from "./not-found";

export default function Home() {
  return <NotFound />;
}

export const metadata: Metadata = {
  title: "Welcome to the the Voyatek",
  description:
    "Here we Cater for your travelling and well being, explore our website",
};

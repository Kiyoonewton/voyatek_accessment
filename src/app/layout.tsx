"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderLayout from "@/components/Layouts/Header";
import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-custom-gray`}>
        <HeaderLayout />
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}

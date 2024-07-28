"use client";
import React, { useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyContext } from "./MyContext";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <MyContext.Provider value={{ data, setData,deleteData, setDeleteData }}>
          {children}
        </MyContext.Provider>
      </body>
    </html>
  );
}

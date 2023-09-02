"use client";
import { LevelProvider } from "@/app/context/LevelContext";
import React from "react";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header>
      <LevelProvider>{children}</LevelProvider>
    </header>
  );
};

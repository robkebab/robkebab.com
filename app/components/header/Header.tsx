import { LevelContext } from "@/app/context/LevelContext";
import React from "react";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header id="top">
      <LevelContext.Provider value={1}>{children}</LevelContext.Provider>
    </header>
  );
};

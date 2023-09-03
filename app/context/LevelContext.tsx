"use client"
import React, { createContext, useContext } from "react";

export const LevelContext = createContext(0);

export const LevelProvider = ({ children }: { children: React.ReactNode }) => {
  const level = useContext(LevelContext);
  return (
    <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
  );
};

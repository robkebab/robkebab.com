import { LevelProvider } from "@/app/context/LevelContext";
import React from "react";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <LevelProvider>{children}</LevelProvider>
    </main>
  );
};

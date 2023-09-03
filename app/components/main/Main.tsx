"use client";

import { LevelProvider } from "@/app/context/LevelContext";
import React from "react";

interface IProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export const Main = ({
  children,
  className = "",
}: IProps) => {
  return (
    <main className={className}>
      <LevelProvider>{children}</LevelProvider>
    </main>
  );
};

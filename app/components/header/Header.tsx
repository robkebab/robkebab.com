"use client";
import { LevelProvider } from "@/app/context/LevelContext";
import React from "react";

interface IProps {
  readonly className?: string;
  readonly id?: string;
  readonly children: React.ReactNode;
}

export const Header = ({ children, className = "", id = "" }: IProps) => {
  return (
    <header className={className} id={id}>
      <LevelProvider>{children}</LevelProvider>
    </header>
  );
};

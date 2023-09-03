"use client";
import { LevelProvider } from "@/app/context/LevelContext";
import React from "react";

interface IProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly id?: string;
}

export const Section = ({ children, className = "", id = "" }: IProps) => {
  return (
    <section className={className} id={id}>
      <LevelProvider>{children}</LevelProvider>
    </section>
  );
};

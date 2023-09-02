import { LevelProvider } from "@/app/context/LevelContext";
import React from "react";

interface IProps {
  readonly className?: string;
  readonly children: React.ReactNode;
  readonly id?: string;
}

export const Section = ({ className = "", children, id = "" }: IProps) => {
  return (
    <section className={className} id={id}>
      <LevelProvider>{children}</LevelProvider>
    </section>
  );
};

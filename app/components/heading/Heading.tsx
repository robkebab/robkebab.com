/* eslint-disable no-magic-numbers */
"use client";
import React, { useContext } from "react";
import { LevelContext } from "@/app/context/LevelContext";
import { concatClasses } from "@/app/utils/concatClasses";
import styles from "./Heading.module.css";

interface IProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export const Heading = ({ children, className = "" }: IProps) => {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error("Heading must be inside a Section!");
    case 1:
      return (
        <h1 className={concatClasses(styles.headingOne, className)}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={concatClasses(styles.headingTwo, className)}>
          {children}
        </h2>
      );
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error(`Unknown level: ${level}`);
  }
};

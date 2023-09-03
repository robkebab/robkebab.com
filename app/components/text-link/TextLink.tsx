import { Arrow } from "../icons/Arrow";
import Link from "next/link";
import React from "react";
import styles from "./TextLink.module.css";

interface IProps {
  readonly children: React.ReactNode;
  readonly href: string;
}

export const TextLink = ({ children, href }: IProps) => {
  return (
    <Link href={href}>
      <div className={styles.container}>
        <span className={styles.text}>{children}</span>
        <Arrow className={styles.arrow} />
      </div>
    </Link>
  );
};

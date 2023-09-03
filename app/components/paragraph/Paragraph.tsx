import React from 'react'
import { concatClasses } from "@/app/utils/concatClasses";
import styles from "./Paragraph.module.css";

interface IProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export const Paragraph = ({ className = '', children }: IProps) => {
  return <p className={concatClasses(styles.paragraph, className)}>{children}</p>;
};

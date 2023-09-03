import { JSX } from "react";
import styles from "./Social.module.css";

interface IProps {
  readonly href: string;
  readonly icon: JSX.Element;
  readonly label: string;
}

export const Social = ({ href, icon, label }: IProps) => {
  return (
    <a className={styles.social} href={href} rel="noreferrer" target="_blank">
      <span className={styles.label}>{label}</span>
      {icon}
    </a>
  );
};

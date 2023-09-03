import { concatClasses } from "@/app/utils/concatClasses";
import styles from "./Subheading.module.css";

interface IProps {
  readonly className?: string;
  readonly text: string;
}

export const Subheading = ({ className = "", text }: IProps) => {
  return <p className={concatClasses(styles.subheading, className)}>{text}</p>;
};

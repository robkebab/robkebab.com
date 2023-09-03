import { concatClasses } from "@/app/utils/concatClasses";
import styles from "./Paragraph.module.css";

interface IProps {
  readonly className?: string;
  readonly text: string;
}

export const Paragraph = ({ className = '', text }: IProps) => {
  return <p className={concatClasses(styles.paragraph, className)}>{text}</p>;
};

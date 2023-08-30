import styles from "./Heading.module.scss";
type Variant = "h1" | "h2";

interface IProps {
  readonly text: string;
  readonly variant: Variant;
}

export const Heading = ({ text, variant }: IProps) => {
  switch (variant) {
    case "h1":
      return <h1 className={styles.headingOne}>{text}</h1>;
    case "h2":
      return <h2 className={styles.headingTwo}>{text}</h2>;
    default:
      return null;
  }
};

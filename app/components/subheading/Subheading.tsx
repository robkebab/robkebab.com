import styles from "./Subheading.module.css"

export const Subheading = ({ text }: { readonly text: string }) => {
  return <p className={styles.subheading}>{text}</p>;
};

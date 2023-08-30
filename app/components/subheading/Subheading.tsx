import styles from "./Subheading.module.scss"

export const Subheading = ({ text }: { readonly text: string }) => {
  return <p className={styles.subheading}>{text}</p>;
};

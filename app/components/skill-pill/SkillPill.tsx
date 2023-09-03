import styles from "./SkillPill.module.css";

export const SkillPill = ({ label }: { label: string }) => {
  return <span className={styles.skillPill}>{label}</span>;
};

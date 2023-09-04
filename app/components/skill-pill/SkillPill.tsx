import styles from "./SkillPill.module.css";

export const SkillPill = ({ label }: { label: string }) => {
  return <div className={styles.skillPill}>{label}</div>;
};

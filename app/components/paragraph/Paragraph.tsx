import styles from "./Paragraph.module.scss"

export const Paragraph = ({text}: {text: string}) => {
  return (
    <p className={styles.paragraph}>{text}</p>
  )
}

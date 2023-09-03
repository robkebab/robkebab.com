import styles from "./Paragraph.module.css"

export const Paragraph = ({text}: {text: string}) => {
  return (
    <p className={styles.paragraph}>{text}</p>
  )
}

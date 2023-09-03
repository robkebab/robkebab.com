import { Heading } from "../heading/Heading";
import { Paragraph } from "../paragraph/Paragraph";
import { Section } from "../section/Section";
import { TextLink } from "../text-link/TextLink";
import { defaults } from "./defaults";
import styles from "./About.module.css";

export const About = () => {
  return (
    <Section id="about" className={styles.container}>
      <Heading className={styles.heading}>About</Heading>
      {defaults.paragraphs.map((p) => (
        <Paragraph className={styles.paragraph} key={p.id}>{p.text}</Paragraph>
      ))}
      <TextLink href="#about">View full resume</TextLink>
    </Section>
  );
};

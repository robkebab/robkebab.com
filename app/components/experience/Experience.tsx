import { ExperienceCardList } from "./card-list/ExperienceCardList";
import { Heading } from "../heading/Heading";
import { Section } from "../section/Section";
import { TextLink } from "../text-link/TextLink";
import { defaults } from "./defaults";
import styles from "./Experience.module.css";

export const Experiences = () => {
  return (
    <Section id="experiences" className={styles.container}>
      <Heading>Experiences</Heading>
      <ExperienceCardList cards={defaults.cards} />
      <TextLink href="#experiences">View full resume</TextLink>
    </Section>
  );
};

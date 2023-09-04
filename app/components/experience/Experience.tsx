import { ExperienceCard } from "./card/ExperienceCard";
import { Heading } from "../heading/Heading";
import { Section } from "../section/Section";
import { TextLink } from "../text-link/TextLink";
import { defaults } from "./defaults";
import styles from "./Experience.module.css";

export const Experiences = () => {
  return (
    <Section id="experiences" className={styles.container}>
      <Heading className={styles.heading}>{defaults.title}</Heading>
      <div>
        {defaults.cards.map((c) => (
          <ExperienceCard
            key={c.id}
            description={c.description}
            job={c.job}
            jobLink={c.jobLink}
            skills={c.skills}
            timeline={c.timeline}
            title={c.title}
          />
        ))}
      </div>
      <TextLink href={defaults.link.href}>{defaults.link.text}</TextLink>
    </Section>
  );
};

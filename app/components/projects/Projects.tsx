import { Heading } from "../heading/Heading";
import { ProjectCard } from "./card/ProjectCard";
import { Section } from "../section/Section";
import { TextLink } from "../text-link/TextLink";
import { defaults } from "./defaults";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <Section id="projects" className={styles.container}>
      <Heading className={styles.heading}>{defaults.title}</Heading>
      {defaults.cards.map((c) => (
        <ProjectCard
          description={c.description}
          image={c.image}
          key={crypto.randomUUID()}
          skills={c.skills}
          title={c.title}
        />
      ))}
      <TextLink href={defaults.link.href}>{defaults.link.label}</TextLink>
    </Section>
  );
};

import { Arrow } from "../../icons/Arrow";
import { Heading } from "../../heading/Heading";
import { IProjectCard } from "./IProjectCard";
import Image from "next/image";
import { Paragraph } from "../../paragraph/Paragraph";
import { Section } from "../../section/Section";
import { SkillPill } from "../../skill-pill/SkillPill";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  description,
  image,
  skills,
  title,
}: IProjectCard) => {
  return (
    <Section className={styles.container}>
      <div>
        <Heading className={styles.heading}>
          {title}
          &nbsp;
          <Arrow className={styles.arrow} />
        </Heading>
        <Paragraph className={styles.description}>{description}</Paragraph>
        <ul className={styles.pills}>
          {skills.map((sk) => (
            <li key={crypto.randomUUID()}>
              <SkillPill label={sk} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.img}>
        <Image alt={image.alt} height={60} src={image.src} width={140} />
      </div>
    </Section>
  );
};

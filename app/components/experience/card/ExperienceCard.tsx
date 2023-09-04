import { Arrow } from "../../icons/Arrow";
import { Heading } from "@/app/components/heading/Heading";
import { IExperienceCard } from "./IExperienceCard";
import Link from "next/link";
import { Paragraph } from "@/app/components/paragraph/Paragraph";
import { Section } from "@/app/components/section/Section";
import { SkillPill } from "@/app/components/skill-pill/SkillPill";
import styles from "./ExperienceCard.module.css";

export const ExperienceCard = ({
  description,
  job,
  jobLink,
  skills,
  timeline,
  title,
}: IExperienceCard) => {
  return (
    <Section id="experience" className={styles.container}>
      <div>
        <Paragraph className={styles.label}>{timeline}</Paragraph>
      </div>
      <div>
        <Heading className={styles.heading}>
          <Link href={jobLink}>
            <span>{title}</span>
            &nbsp;&#x2022;&nbsp;
            <span>{job}</span>
            &nbsp;
            <Arrow className={styles.arrow} />
          </Link>
        </Heading>
        <Paragraph className={styles.description}>{description}</Paragraph>
        <div className={styles.pills}>
          {skills.map((sk) => (
            <SkillPill key={crypto.randomUUID()} label={sk} />
          ))}
        </div>
      </div>
    </Section>
  );
};

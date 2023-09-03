import { Heading } from "@/app/components/heading/Heading";
import { IExperienceCard } from "./IExperienceCard";
import { Paragraph } from "@/app/components/paragraph/Paragraph";
import { Section } from "@/app/components/section/Section";
import { SkillPill } from "@/app/components/skill-pill/SkillPill";
import styles from "./ExperienceCard.module.css";

export const ExperienceCard = ({
  description,
  jobTitle,
  skills,
  timeline,
}: IExperienceCard) => {
  return (
    <Section id="experience" className="experience-card">
      <Paragraph>{timeline}</Paragraph>
      <Heading>{jobTitle}</Heading>
      <Paragraph>{description}</Paragraph>
      <div className="skill-pill-container">
        {skills.map((sk) => (
          <SkillPill key={crypto.randomUUID()} label={sk} />
        ))}
      </div>
    </Section>
  );
};

import { ExperienceCard } from "./card/ExperienceCard";
import { IExperienceCard } from "./card/IExperienceCard";

export const ExperienceCardList = ({ cards }: { cards: IExperienceCard[] }) => {
  return (
    <div>
      {cards.map((c) => (
        <ExperienceCard
          key={c.id}
          description={c.description}
          jobTitle={c.jobTitle}
          skills={c.skills}
          timeline={c.timeline}
        />
      ))}
    </div>
  );
};

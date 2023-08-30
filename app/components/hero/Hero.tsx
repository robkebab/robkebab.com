import { Avatar } from "../avatar/Avatar";
import { Heading } from "../heading/Heading";
import { Paragraph } from "../paragraph/Paragraph";
import { Subheading } from "../subheading/Subheading";
import { defaults } from "./defaults";

export const Hero = () => {
  return (
    <div>
      <Heading text={defaults.title} variant="h1" />
      <Subheading text={defaults.subTitle} />
      <Avatar
        alt={defaults.avatar.alt}
        height={163}
        src={defaults.avatar.src}
        width={163}
      />
      <Paragraph text={defaults.description} />
    </div>
  );
};

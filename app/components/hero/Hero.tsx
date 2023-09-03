import { Avatar } from "../avatar/Avatar";
import { Github } from "../icons/Github";
import { Heading } from "../heading/Heading";
import { LinkedIn } from "../icons/LinkedIn";
import { Paragraph } from "../paragraph/Paragraph";
import { Social } from "../social/Social";
import { Subheading } from "../subheading/Subheading";
import { defaults } from "./defaults";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <div>
      <Heading>{defaults.title}</Heading>
      <Subheading text={defaults.subTitle} />
      <Avatar
        alt={defaults.avatar.alt}
        height={163}
        src={defaults.avatar.src}
        width={163}
      />
      <Paragraph text={defaults.description} />
      <div className={styles.socials}>
        <Social 
          href="https://www.linkedin.com/in/rpc219/"
          icon={<LinkedIn />}
          label="LinkedIn"
        />
        <Social 
          href="https://github.com/robkebab"
          icon={<Github />}
          label="Github"
        />
      </div>
    </div>
  );
};

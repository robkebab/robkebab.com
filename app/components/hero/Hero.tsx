import { Avatar } from "../avatar/Avatar";
import { Github } from "../icons/Github";
import { Heading } from "../heading/Heading";
import { LinkedIn } from "../icons/LinkedIn";
import { Paragraph } from "../paragraph/Paragraph";
import { Section } from "../section/Section";
import { Social } from "../social/Social";
import { Subheading } from "../subheading/Subheading";
import { defaults } from "./defaults";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div id="hero" className={styles.container}>
      <Heading className={styles.heading}>{defaults.title}</Heading>
      <Subheading className={styles.subheading} text={defaults.subTitle} />
      <div className={styles.avatar}>
        <Avatar
          alt={defaults.avatar.alt}
          height={163}
          src={defaults.avatar.src}
          width={163}
        />
      </div>
      <Paragraph className={styles.description} text={defaults.description} />
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
      <nav id="mainNavigation" className={styles.nav}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

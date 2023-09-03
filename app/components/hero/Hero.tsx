import { Avatar } from "../avatar/Avatar";
import { Github } from "../icons/Github";
import { Header } from "../header/Header";
import { Heading } from "../heading/Heading";
import { LinkedIn } from "../icons/LinkedIn";
import { Paragraph } from "../paragraph/Paragraph";
import { Social } from "../social/Social";
import { Subheading } from "../subheading/Subheading";
import { defaults } from "./defaults";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <Header id="hero" className={styles.container} >
      <Heading className={styles.heading}>{defaults.title}</Heading>
      <Subheading className={styles.subheading} text={defaults.subTitle} />
      <Avatar
        alt={defaults.avatar.alt}
        className={styles.avatar}
        height={164}
        src={defaults.avatar.src}
        width={164}
      />
      <Paragraph className={styles.description} >{defaults.description}</Paragraph>
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
    </Header>
  );
};

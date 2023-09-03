import { Heading } from "./components/heading/Heading";
import { Hero } from "./components/hero/Hero";
import { Main } from "./components/main/Main";
import { Section } from "./components/section/Section";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Main>
        <Section id="about">
          <Heading>About</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a>
            <span>Learn more about me</span>
            <span>caret</span>
          </a>
        </Section>
        <Section id="experiences">
          <h2>Experiences</h2>
          <Section className="experience-card">
            <p>2021 - PRESENT</p>
            <h3>Sales engineer - Zeal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="skill-pill-container">
              <span className="skill-pill">React</span>
              <span className="skill-pill">Javascript</span>
              <span className="skill-pill">Vercel</span>
              <span className="skill-pill">Node</span>
              <span className="skill-pill">Tailwind Css</span>
              <span className="skill-pill">Next JS</span>
            </div>
          </Section>
          <Section className="experience-card">
            <p>2021 - PRESENT</p>
            <h3>Sales engineer - Zeal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="skill-pill-container">
              <span className="skill-pill">React</span>
              <span className="skill-pill">Javascript</span>
              <span className="skill-pill">Vercel</span>
              <span className="skill-pill">Node</span>
              <span className="skill-pill">Tailwind Css</span>
              <span className="skill-pill">Next JS</span>
            </div>
          </Section>
          <Section className="experience-card">
            <p>2021 - PRESENT</p>
            <h3>Sales engineer - Zeal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="skill-pill-container">
              <span className="skill-pill">React</span>
              <span className="skill-pill">Javascript</span>
              <span className="skill-pill">Vercel</span>
              <span className="skill-pill">Node</span>
              <span className="skill-pill">Tailwind Css</span>
              <span className="skill-pill">Next JS</span>
            </div>
          </Section>
          <a>
            <span>View full resume</span>
            <span>caret</span>
          </a>
        </Section>
        <Section id="projects">
          <Heading>
            <span>Projects</span>
          </Heading>
          <Section className="project-card">
            <img alt="card image"></img>
            <h3>BYGO</h3>
            <p>
              Mobile App that allows users to create checklists of things they
              need to bring with them before they leave the house
            </p>
            <div className="skill-pill-container">
              <span className="skill-pill">React</span>
              <span className="skill-pill">Javascript</span>
              <span className="skill-pill">Vercel</span>
              <span className="skill-pill">Node</span>
              <span className="skill-pill">Tailwind Css</span>
              <span className="skill-pill">Next JS</span>
            </div>
          </Section>
          <Section className="project-card">
            <img alt="card image"></img>
            <h3>BYGO</h3>
            <p>
              Mobile App that allows users to create checklists of things they
              need to bring with them before they leave the house
            </p>
            <div className="skill-pill-container">
              <span className="skill-pill">React</span>
              <span className="skill-pill">Javascript</span>
              <span className="skill-pill">Vercel</span>
              <span className="skill-pill">Node</span>
              <span className="skill-pill">Tailwind Css</span>
              <span className="skill-pill">Next JS</span>
            </div>
          </Section>
          <Section className="project-card">
            <img alt="card image"></img>
            <h3>BYGO</h3>
            <p>
              Mobile App that allows users to create checklists of things they
              need to bring with them before they leave the house
            </p>
            <div className="skill-pill-container">
              <span className="skill-pill">React</span>
              <span className="skill-pill">Javascript</span>
              <span className="skill-pill">Vercel</span>
              <span className="skill-pill">Node</span>
              <span className="skill-pill">Tailwind Css</span>
              <span className="skill-pill">Next JS</span>
            </div>
          </Section>
        </Section>
      </Main>
    </div>
  );
}

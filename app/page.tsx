import { About } from "./components/about/About";
import { Experiences } from "./components/experience/Experience";
import { Heading } from "./components/heading/Heading";
import { Hero } from "./components/hero/Hero";
import { Main } from "./components/main/Main";
import { Section } from "./components/section/Section";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Main className={styles.main}>
        <About />
        <Experiences />
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

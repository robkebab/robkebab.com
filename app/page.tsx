import { Header } from "./components/header/Header";
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
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I've had the privilege of
            building software for an advertising agency, a start-up, a
            student-led design studio, and a huge corporation.
          </p>
          <p>
            My main focus these days is building products and leading projects
            for our clients at Upstatement. In my free time I've also released
            an online video course that covers everything you need to know to
            build a web app with the Spotify API.
          </p>
          <p>
            When I'm not at the computer, I'm usually rock climbing, hanging out
            with my wife and two cats, or running around Hyrule searching for
            Korok seedsKorok seeds.
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

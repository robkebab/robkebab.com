"use client"
import { Avatar } from "./components/avatar/Avatar";
import { Github } from "./components/icons/Github";
import { Header } from "./components/header/Header";
import { LinkedIn } from "./components/icons/LinkedIn";
import { Social } from "./components/social/Social";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Header className="hero">
        <h1>Robert Collins</h1>
        <p>Software engineer</p>
        <Avatar
          height={163}
          alt="Profile of software engineer Robert Collins"
          src="/profile-portrait.jpg"
          width={163}
        />
        <p>
          I build accessible inclusive producs and digital experiences for the
          web.
        </p>
        <div>
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
        <nav id="mainNavigation">
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
      <section id="about">
        <h2>About</h2>
        <p>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I've had the privilege of
          building software for an advertising agency, a start-up, a student-led
          design studio, and a huge corporation.
        </p>
        <p>
          My main focus these days is building products and leading projects for
          our clients at Upstatement. In my free time I've also released an
          online video course that covers everything you need to know to build a
          web app with the Spotify API.
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
      </section>
      <section id="experiences">
        <h2>Experiences</h2>
        <section className="experience-card">
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
        </section>
        <section className="experience-card">
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
        </section>
        <section className="experience-card">
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
        </section>
        <a>
          <span>View full resume</span>
          <span>caret</span>
        </a>
      </section>
      <section id="projects">
        <h2>
          <span>Projects</span>
        </h2>
        <section className="project-card">
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
        </section>
        <section className="project-card">
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
        </section>
        <section className="project-card">
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
        </section>
      </section>
    </main>
  );
}

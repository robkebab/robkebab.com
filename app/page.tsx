import { About } from "./components/about/About";
import { Experiences } from "./components/experience/Experience";
import { Hero } from "./components/hero/Hero";
import { Main } from "./components/main/Main";
import { Projects } from "./components/projects/Projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Main className={styles.main}>
        <About />
        <Experiences />
        <Projects />
      </Main>
    </div>
  );
}

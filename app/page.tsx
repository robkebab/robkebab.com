import { Hero } from "./components/hero/Hero";
import styles from "./page.module.scss"

export default function Home() {
  return (
    <main className={styles.background}>
      <Hero />
    </main>
  );
}

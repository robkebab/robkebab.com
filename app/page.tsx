import { Header } from "./header/Header";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <div>
        <Header text="Welcome" variant="h1" />
      </div>
      <div>body</div>
    </main>
  );
}

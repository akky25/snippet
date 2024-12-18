import { Navigation } from "./component/navigation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}></nav>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.panel}></section>
        <section className={styles.panel}></section>
        <section className={styles.panel}></section>
      </main>
    </div>
  );
}

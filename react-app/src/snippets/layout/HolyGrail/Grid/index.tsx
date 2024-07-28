import styles from "./styles.module.css";
function Component() {
  return (
    <div className={styles.root}>
      <header>Header</header>
      <nav>Navigation</nav>
      <main>Main</main>
      <aside>Sidebar</aside>
      <footer>Footer</footer>
    </div>
  );
}

export default Component;

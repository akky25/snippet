import styles from "./styles.module.css";

/**
 * ヘッダーやフッター、サイドバーがコンテンツに依存
 * @returns
 */
function Component() {
  return (
    <div className={styles.root}>
      <header>Header</header>
      <div className={styles.div}>
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default Component;

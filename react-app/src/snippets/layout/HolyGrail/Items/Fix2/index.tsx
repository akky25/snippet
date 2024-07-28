import styles from "./styles.module.css";

const createItems = (num: number) =>
  Array(num)
    .fill(null)
    .map(() => <div />);

/**
 * ヘッダーやフッター、サイドバーがコンテンツに依存
 * @returns
 */
function Component() {
  return (
    <div className={styles.root}>
      <header>Header</header>
      <div className={styles.div}>
        <nav>{createItems(5)}</nav>
        <main>{createItems(100)}</main>
        <aside>{createItems(3)}</aside>
      </div>
      <footer>{createItems(60)}</footer>
    </div>
  );
}

export default Component;

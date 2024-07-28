import styles from "./styles.module.css";

const createItems = (num: number) =>
  Array(num)
    .fill(null)
    .map(() => <div />);

function Component() {
  return (
    <div className={styles.root}>
      <header>Header</header>
      <nav>{createItems(5)}</nav>
      <main>{createItems(10)}</main>
      <aside>{createItems(5)}</aside>
      <footer>{createItems(30)}</footer>
    </div>
  );
}

export default Component;

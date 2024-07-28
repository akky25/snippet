import styles from "./styles.module.css";

function Component() {
  return (
    <div className={styles.root}>
      <nav>Min: 100px / Max: 25%</nav>
      <main>
        この要素は 2 番目のグリッド位置（1
        fr）を使用します。つまり、この要素は残りのスペースを占有します。
      </main>
    </div>
  );
}

export default Component;

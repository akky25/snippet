import clsx from "clsx";
import styles from "./index.module.css";

// const array = Array(4).fill("ABCDEF");

export const XXXXX = () => {
  return (
    <div className={styles.container}>
      {/* {array.map((v) => (
        <p className={styles.item}>{v}</p>
      ))} */}
      <div className={clsx(styles.item, styles.itemA)}>A</div>
      <div className={clsx(styles.item, styles.itemB)}>B</div>
      <div className={clsx(styles.item, styles.itemC)}>C</div>
      <div className={clsx(styles.item, styles.itemD)}>D</div>
    </div>
  );
};

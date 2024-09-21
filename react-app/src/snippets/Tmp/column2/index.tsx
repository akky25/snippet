import styles from "./index.module.css";

const array = Array(10).fill("ABCDEF");

array[2] = array[2] + "12";
array[3] = array[3].slice(0, 4);

array[6] = array[6].slice(0, 4);

array[6] = "1234";
array[7] = "1234";

export const XXXXX = () => {
  return (
    <div className={styles.container2}>
      {array.map((v) => (
        <p className={styles.item}>{v}</p>
      ))}
    </div>
  );
};

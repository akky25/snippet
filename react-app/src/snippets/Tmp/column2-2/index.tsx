import styles from "./index.module.css";

const items = Array(14).fill("ABCDEF");

items[2] = items[2] + "12";
items[3] = items[3].slice(0, 4);

items[6] = items[6].slice(0, 4);

items[6] = "1234";
items[7] = "1234";

items[10] = "123";
items[11] = items[11] + "12";

export const XXXXX = () => {
  // reduceの戻り値の型を指定
  const rows: string[][] = items.reduce<string[][]>((acc, item, index) => {
    const rowIndex = Math.floor(index / 2); // 行のインデックスを計算
    if (!acc[rowIndex]) {
      acc[rowIndex] = []; // 新しい行の配列を作成
    }
    acc[rowIndex].push(item); // アイテムを行に追加
    return acc;
  }, []); // 初期値として空の二次元配列を渡す

  return (
    <div className={styles.container}>
      {rows.map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {row.map((item, itemIndex) => (
            <div className={styles.item} key={itemIndex}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

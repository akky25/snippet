import { DataCard } from "../data-card";
import styles from "./index.module.scss";

export const ColumnGrid = () => {
  return (
    <div className={styles.datacardsBento}>
      <DataCard type="1" className={styles.dataCard01} />
      <DataCard type="1" className={styles.dataCard01} />
      <DataCard type="1" className={styles.dataCard01} />
      <DataCard type="1" className={styles.dataCard01} />
      <DataCard type="2" className={styles.dataCard02} />
      <DataCard type="3" className={styles.dataCard03} />
      <DataCard type="3" className={styles.dataCard03} />
      <DataCard type="3" className={styles.dataCard03} />
      <DataCard type="2" className={styles.dataCard04} />
      <DataCard type="2" className={styles.dataCard04} />
    </div>
  );
};

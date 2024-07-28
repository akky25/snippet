import { ReactNode } from "react";
import styles from "./styles.module.css";

/**
 * marginを使った方法
 */
export function Component({ children }: { children: ReactNode }) {
  return <div className={styles.root}>{children}</div>;
}

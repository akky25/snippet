import { ReactNode } from "react";
import styles from "./styles.module.css";

/**
 * flexを使った方法
 * gridの方法と違い子要素の幅は独立する
 */
export function Component({ children }: { children: ReactNode }) {
  return <div className={styles.root}>{children}</div>;
}

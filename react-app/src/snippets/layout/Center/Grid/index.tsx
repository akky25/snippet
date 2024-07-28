import { ReactNode } from "react";
import styles from "./styles.module.css";

/**
 * gridを使った方法
 * 子要素にwidthを指定してない場合、複数子要素のうち幅が一番大きいものに他の子要素も釣られることに注意
 */
export function Component({ children }: { children: ReactNode }) {
  return <div className={styles.root}>{children}</div>;
}

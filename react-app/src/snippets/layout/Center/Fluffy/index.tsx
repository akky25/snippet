import { ReactNode } from "react";
import styles from "./styles.module.css";

/**
 * 最も単順な方法（ただ全方向にpaddingを使うだけ）
 * ボックスの幅、高さがコンテンツの大きさに連動する場合に有効
 * 例えばテキストなどをセンターにする
 */
export function Component({ children }: { children: ReactNode }) {
  return (
    <div className={styles.root}>
      <div>{children}</div>
    </div>
  );
}

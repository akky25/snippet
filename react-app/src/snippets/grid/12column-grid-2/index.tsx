import clsx from "clsx";
import styles from "./index.module.scss";
import { ReactNode } from "react";

// export const ColumnGrid = () => {
//   return (
//     <div className={styles.datacardsBento}>
//       <div className={clsx(styles.box, styles.header)}>
//         {/* <div className={styles.headerContent}></div> */}
//       </div>
//       <nav className={clsx(styles.nav)}>
//         <aside className={clsx(styles.box, styles.navContent)}>
//           <p>abc</p>
//           <p>abc</p>
//           <p>abc</p>
//           <p>abc</p>
//         </aside>
//       </nav>
//       <div className={clsx(styles.box, styles.main)}></div>
//     </div>
//     // <div className={styles.container}>
//     //   <div className={styles.content}></div>
//     // </div>
//   );
// };

const GridLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

export const ColumnGrid = () => {
  return (
    <GridLayout>
      <div className={clsx(styles.box, styles.gridHeader)}></div>
      <div className={styles.gridWrap}>
        <nav className={clsx(styles.gridNav)}>
          <aside className={clsx(styles.navContent)}>
            <div className={styles.box}>
              <p>あいうえおあい</p>
              <p>あいうえおあい</p>
              <p>あいうえおあい</p>
              <p>あいうえおあい</p>
            </div>
          </aside>
        </nav>
        <main className={clsx(styles.box, styles.gridMain)}></main>
      </div>
    </GridLayout>
  );
};

import { useState } from "react";
import styles from "./index.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export const PlayGround = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.accordionContainer}>
        <button className={styles.button} onClick={() => setIsOpen((p) => !p)}>
          Is it accessible?
          <ChevronDownIcon
            className={`${styles.icon} ${isOpen && styles.iconOpen} `}
          />
        </button>
        <div className={`${styles.textContent} ${isOpen && styles.isOpen}`}>
          <p className={styles.text}>
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern.
          </p>
        </div>
      </div>
    </div>
  );
};

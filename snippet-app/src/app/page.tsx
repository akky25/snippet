import { ReactNode } from "react";
import { NavigationItems } from "./component/navigation-items";
import { Text } from "@radix-ui/themes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav>
        <NavigationItems
          Text={({ children }: { children: ReactNode }) => (
            <Text size="8">{children}</Text>
          )}
        />
      </nav>
    </div>
  );
}

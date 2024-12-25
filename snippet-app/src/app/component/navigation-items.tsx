import { allContents } from "contentlayer/generated";
import styles from "./navigation-items.module.css";
import Link from "next/link";
import { ReactNode } from "react";

const BlankText = ({ children }: { children: ReactNode }) => <>{children}</>;

export const NavigationItems = ({ Text = BlankText }) => {
  const contents = allContents
    .filter((content) => {
      return content.url.endsWith("description");
    })
    .sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  return (
    <div className={styles.navigationItemsContainer}>
      {contents.map((content) => (
        <Link
          key={content.title}
          href={`/contents/${content._raw.sourceFileDir}`}
        >
          <Text>{content.title}</Text>
        </Link>
      ))}
    </div>
  );
};

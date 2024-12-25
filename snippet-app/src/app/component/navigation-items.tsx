import { allContents } from "contentlayer/generated";
import styles from "./navigation-items.module.css";

export const NavigationItems = () => {
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
        <a key={content.title} href={`/contents/${content._raw.sourceFileDir}`}>
          {content.title}
        </a>
      ))}
    </div>
  );
};

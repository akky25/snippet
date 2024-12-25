import { allContents } from "contentlayer/generated";
import { Mdx } from "@/app/component/mdx";
import styles from "./page.module.css";
import { Navigation } from "@/app/component/navigation";
import clsx from "clsx";

export const generateStaticParams = async () =>
  allContents.map((content) => ({ slug: content._raw.sourceFileDir }));

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const content = allContents.find(
    (content) => content._raw.flattenedPath === `${params.slug}/description`,
  );
  if (!content) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: content.title };
};

const ContentLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;

  const description = allContents.find(
    (content) => content._raw.flattenedPath === `${params.slug}/description`,
  );

  const tsCode = allContents.find(
    (content) => content._raw.flattenedPath === `${params.slug}/ts-code`,
  );
  const cssCode = allContents.find(
    (content) => content._raw.flattenedPath === `${params.slug}/css-code`,
  );

  return (
    <div className={styles.page}>
      <nav className={styles.nav}></nav>
      <Navigation />
      <main className={styles.main}>
        <section className={clsx(styles.panel, styles.description)}>
          {description && <Mdx code={description.body.code} />}
        </section>
        <section className={styles.panel}>
          {tsCode && <Mdx code={tsCode.body.code} />}
          {cssCode && <Mdx code={cssCode.body.code} />}
        </section>
        <section className={styles.panel}></section>
      </main>
    </div>
  );
};

export default ContentLayout;

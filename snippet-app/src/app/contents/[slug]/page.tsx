import { allContents } from "contentlayer/generated";
import { Mdx } from "@/app/component/mdx";

export const generateStaticParams = async () =>
  allContents.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const post = allContents.find(
    (post) => post._raw.flattenedPath === params.slug,
  );
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const ContentLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;

  const description = allContents.find(
    (post) => post._raw.flattenedPath === `${params.slug}/description`,
  );

  const tsCode = allContents.find(
    (post) => post._raw.flattenedPath === `${params.slug}/ts-code`,
  );
  const cssCode = allContents.find(
    (post) => post._raw.flattenedPath === `${params.slug}/css-code`,
  );

  return (
    <article>
      {description && <Mdx code={description.body.code} />}
      {tsCode && <Mdx code={tsCode.body.code} />}
      {cssCode && <Mdx code={cssCode.body.code} />}
    </article>
  );
};

export default ContentLayout;

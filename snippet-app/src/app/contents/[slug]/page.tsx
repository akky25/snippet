import { format, parseISO } from "date-fns";
import { allContents } from "contentlayer/generated";

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

const PostLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = allContents.find(
    (post) => post._raw.flattenedPath === params.slug,
  );
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article>
      <div>
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export default PostLayout;

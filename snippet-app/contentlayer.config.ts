import { rehypeComponent } from "@/app/component/rehype-component";
import getHighlighter from "@shikijs/compat";
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode, { LineElement } from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
  name: "Content",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/contents/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeComponent,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
          getHighlighter,
          onVisitLine(node: LineElement) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
    ],
  },
});

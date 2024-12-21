import fs from "fs";
import { UnistNode, UnistTree } from "@/types/unist";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as
          | string
          | undefined;
        const type = getNodeAttributeByName(node, "type")?.value as
          | string
          | undefined;
        try {
          let source = "";
          if (type === "tsx") {
            source = fs.readFileSync(
              `src/app/contents/[slug]/component/${name}/index.tsx`,
              "utf8",
            );
          } else if (type === "css") {
            source = fs.readFileSync(
              `src/app/contents/[slug]/component/${name}/styles.module.css`,
              "utf8",
            );
          }

          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: "",
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: [`language-${type}`],
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            }),
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

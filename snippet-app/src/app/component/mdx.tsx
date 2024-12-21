import { getMDXComponent } from "next-contentlayer2/hooks";
import React from "react";
import styles from "./mdx.module.css";
import { ComponentSource } from "./component-source";

const mdxComponents = {
  pre: ({ ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className={styles.pre} />
  ),
  ComponentSource,
};

export function Mdx({ code }: { code: string }) {
  const Component = getMDXComponent(code, {
    //style: config.style,
  });

  return <Component components={mdxComponents} />;
}

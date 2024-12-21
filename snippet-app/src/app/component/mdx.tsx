import { getMDXComponent } from "next-contentlayer2/hooks";
import React from "react";
import styles from "./mdx.module.css";

const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={className} {...props} style={{ color: "red" }} />
  ),
  // MyComponent: () => <div>Hello World!</div>,
  MyComponent: ({ children }: { children: React.ReactNode }) => {
    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const Code = Codes[0];
    return <div>{Code}</div>;
  },
  pre: ({ ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className={styles.pre} />
  ),
};

export function Mdx({ code }: { code: string }) {
  const Component = getMDXComponent(code, {
    //style: config.style,
  });

  return <Component components={mdxComponents} />;
}

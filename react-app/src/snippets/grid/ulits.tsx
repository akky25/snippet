import { StoryFn } from "@storybook/react";
import { useEffect } from "react";

export const WithGlobalCSS = (Story: StoryFn) => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    ["/public/grid-assets/base.css", "/public/grid-assets/reset.css"].forEach(
      (i) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = i; // CSSファイルへのパス
        document.head.appendChild(link);
        links.push(link);
      }
    );

    return () => {
      links.forEach((i) => document.head.removeChild(i));
    };
  }, []);

  return <Story />;
};

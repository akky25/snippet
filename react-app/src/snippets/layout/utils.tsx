import { Meta, ReactRenderer } from "@storybook/react";
import { ComponentType } from "react";
import { PartialStoryFn } from "storybook/internal/types";

// eslint-disable-next-line @typescript-eslint/ban-types
export const LayoutDecorator = (Story: PartialStoryFn<ReactRenderer, {}>) => (
  <div style={{ color: "white", fontSize: "1rem" }}>
    <Story />
  </div>
);

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const createMeta = <T extends ComponentType<any>>(Component: T) => {
  const meta = {
    component: Component,
    parameters: {
      layout: "fullscreen",
    },
    decorators: [LayoutDecorator],
  } satisfies Meta<T>;
  return meta;
};

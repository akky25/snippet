import type { Meta, StoryObj } from "@storybook/react";
import { Component } from ".";
import { createMeta } from "../../utils";

const meta = {
  ...createMeta(Component),
} satisfies Meta<typeof Component>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Child = {
  args: { children: <div>child-1</div> },
} satisfies Story;

export const Children = {
  args: {
    children: (
      <>
        <div>small</div>
        <div>big-------------</div>
      </>
    ),
  },
} satisfies Story;

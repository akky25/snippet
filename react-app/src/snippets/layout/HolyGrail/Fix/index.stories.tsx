import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";

const meta = {
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

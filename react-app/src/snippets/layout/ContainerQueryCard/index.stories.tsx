import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";
import { createMeta } from "../utils";

const meta = {
  ...createMeta(Component),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Large = {
  decorators: (Story) => (
    <div style={{ color: "white", fontSize: "1rem", width: "100vw" }}>
      <Story />
    </div>
  ),
} satisfies Story;

export const Medium = {
  decorators: (Story) => (
    <div style={{ width: "450px" }}>
      <Story />
    </div>
  ),
} satisfies Story;

export const Small = {
  decorators: (Story) => (
    <div style={{ width: "300px" }}>
      <Story />
    </div>
  ),
} satisfies Story;

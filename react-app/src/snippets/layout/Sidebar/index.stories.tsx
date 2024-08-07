import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";
import { createMeta } from "../utils";

const meta = {
  ...createMeta(Component),
} satisfies Meta<typeof Component>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

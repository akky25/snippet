import type { Meta, StoryObj } from "@storybook/react";
import { Pancake } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof Pancake> = {
  tags: ["autodocs"],
  component: Pancake,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
    layout: "fullscreen",
  },
} satisfies Meta<typeof Pancake>;

export default meta;
type Story = StoryObj<typeof Pancake>;

export const Normal: Story = {
  args: {
    type: "normal",
  },
} satisfies Story;

export const FixFooter: Story = {
  args: {
    type: "fixFooter",
  },
} satisfies Story;

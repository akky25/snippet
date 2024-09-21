import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof Card> = {
  tags: ["autodocs"],
  component: Card,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Type1: Story = {
  args: {
    type: "1",
  },
} satisfies Story;

export const Type2: Story = {
  args: {
    type: "2",
  },
} satisfies Story;

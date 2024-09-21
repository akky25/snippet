import type { Meta, StoryObj } from "@storybook/react";
import { DataCard } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof DataCard> = {
  tags: ["autodocs"],
  component: DataCard,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} satisfies Meta<typeof DataCard>;

export default meta;
type Story = StoryObj<typeof DataCard>;

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

export const Type3: Story = {
  args: {
    type: "3",
  },
} satisfies Story;

import type { Meta, StoryObj } from "@storybook/react";
import { BentoLayout } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof BentoLayout> = {
  tags: ["autodocs"],
  component: BentoLayout,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} satisfies Meta<typeof BentoLayout>;

export default meta;
type Story = StoryObj<typeof BentoLayout>;

export const Default: Story = {} satisfies Story;

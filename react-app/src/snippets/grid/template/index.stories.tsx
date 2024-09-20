import type { Meta, StoryObj } from "@storybook/react";
import { XXXXX } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof XXXXX> = {
  tags: ["autodocs"],
  component: XXXXX,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} as Meta<typeof XXXXX>;

export default meta;
type Story = StoryObj<typeof XXXXX>;

export const Default: Story = {};

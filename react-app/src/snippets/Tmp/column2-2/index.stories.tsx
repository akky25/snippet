import type { Meta, StoryObj } from "@storybook/react";
import { XXXXX } from "./index";

const meta: Meta<typeof XXXXX> = {
  tags: ["autodocs"],
  component: XXXXX,
} as Meta<typeof XXXXX>;

export default meta;
type Story = StoryObj<typeof XXXXX>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { PlayGround } from "./index";

const meta: Meta<typeof PlayGround> = {
  tags: ["autodocs"],
  component: PlayGround,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof PlayGround>;

export default meta;
type Story = StoryObj<typeof PlayGround>;

export const Default: Story = {};

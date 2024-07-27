import type { Meta, StoryObj } from "@storybook/react";
import Button from "./";

const meta = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    color: "red",
    onClick: () => console.log("click!"),
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {};

export const Primary = {
  args: {
    color: "blue",
  },
} satisfies Story;

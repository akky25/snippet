import type { Meta, StoryObj } from "@storybook/react";
import { GenerateTale } from ".";

const meta = {
  component: GenerateTale,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    color: "red",
    onClick: () => console.log("click!"),
  },
} satisfies Meta<typeof GenerateTale>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

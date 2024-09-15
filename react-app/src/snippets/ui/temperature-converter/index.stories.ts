import type { Meta, StoryObj } from "@storybook/react";
import { TemperatureConverter } from ".";

const meta = {
  component: TemperatureConverter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    color: "red",
    onClick: () => console.log("click!"),
  },
} satisfies Meta<typeof TemperatureConverter>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

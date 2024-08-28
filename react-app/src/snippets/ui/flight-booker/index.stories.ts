import type { Meta, StoryObj } from "@storybook/react";
import { FlightBooker } from ".";

const meta = {
  component: FlightBooker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    color: "red",
    onClick: () => console.log("click!"),
  },
} satisfies Meta<typeof FlightBooker>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

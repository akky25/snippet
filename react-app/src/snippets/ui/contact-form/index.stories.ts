import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "./";

const meta = {
  component: ContactForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    color: "red",
    onClick: () => console.log("click!"),
  },
} satisfies Meta<typeof ContactForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

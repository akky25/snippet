import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof Form> = {
  tags: ["autodocs"],
  component: Form,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {} satisfies Story;

import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof Header> = {
  tags: ["autodocs"],
  component: Header,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} as Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

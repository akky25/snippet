import type { Meta, StoryObj } from "@storybook/react";
import { SearchForm } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof SearchForm> = {
  tags: ["autodocs"],
  component: SearchForm,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} as Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {};

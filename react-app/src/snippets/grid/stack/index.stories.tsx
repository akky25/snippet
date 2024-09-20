import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof Stack> = {
  title: "Snippets/Grid/Stack",
  tags: ["autodocs"],
  component: Stack,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} as Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {};

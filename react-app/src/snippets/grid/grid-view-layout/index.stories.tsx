import type { Meta, StoryObj } from "@storybook/react";
import { GridViewLayout } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof GridViewLayout> = {
  tags: ["autodocs"],
  component: GridViewLayout,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} satisfies Meta<typeof GridViewLayout>;

export default meta;
type Story = StoryObj<typeof GridViewLayout>;

export const Default: Story = {} satisfies Story;

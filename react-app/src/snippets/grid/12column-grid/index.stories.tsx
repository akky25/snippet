import type { Meta, StoryObj } from "@storybook/react";
import { ColumnGrid } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof ColumnGrid> = {
  tags: ["autodocs"],
  component: ColumnGrid,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} satisfies Meta<typeof ColumnGrid>;

export default meta;
type Story = StoryObj<typeof ColumnGrid>;

export const Default: Story = {} satisfies Story;

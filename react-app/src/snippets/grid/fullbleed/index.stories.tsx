import type { Meta, StoryObj } from "@storybook/react";
import { FullBleed } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof FullBleed> = {
  tags: ["autodocs"],
  component: FullBleed,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
    layout: "fullscreen",
  },
} satisfies Meta<typeof FullBleed>;

export default meta;
type Story = StoryObj<typeof FullBleed>;

export const Default: Story = {} satisfies Story;

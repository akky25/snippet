import type { Meta, StoryObj } from "@storybook/react";
import { HolyGrail } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof HolyGrail> = {
  tags: ["autodocs"],
  component: HolyGrail,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
    layout: "fullscreen",
  },
} satisfies Meta<typeof HolyGrail>;

export default meta;
type Story = StoryObj<typeof HolyGrail>;

export const Default: Story = {} satisfies Story;

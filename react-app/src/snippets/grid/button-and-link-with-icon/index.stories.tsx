import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLinkWithIcon } from "./index";
import { WithGlobalCSS } from "../ulits";

const meta: Meta<typeof ButtonLinkWithIcon> = {
  tags: ["autodocs"],
  component: ButtonLinkWithIcon,
  decorators: [WithGlobalCSS],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} as Meta<typeof ButtonLinkWithIcon>;

export default meta;
type Story = StoryObj<typeof ButtonLinkWithIcon>;

export const Default: Story = {};

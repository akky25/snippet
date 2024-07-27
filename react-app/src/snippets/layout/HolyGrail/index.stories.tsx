import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";

const meta = {
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div id="root">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

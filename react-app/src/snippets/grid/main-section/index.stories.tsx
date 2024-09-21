import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { MainSection } from "./index";
import { WithGlobalCSS } from "../ulits";

const Wrapper = (Story: StoryFn) => (
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <Story />
  </div>
);

const meta: Meta<typeof MainSection> = {
  tags: ["autodocs"],
  component: MainSection,
  decorators: [WithGlobalCSS, Wrapper],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} satisfies Meta<typeof MainSection>;

export default meta;
type Story = StoryObj<typeof MainSection>;

export const Type1: Story = {
  args: {
    type: "1",
  },
} satisfies Story;

export const Type2: Story = {
  args: {
    type: "2",
  },
} satisfies Story;

export const Type2_1: Story = {
  args: {
    type: "2-1",
  },
} satisfies Story;

export const Type3: Story = {
  args: {
    type: "3",
  },
} satisfies Story;

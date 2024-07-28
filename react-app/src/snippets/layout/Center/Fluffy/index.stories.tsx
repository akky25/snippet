import type { Meta, StoryObj } from "@storybook/react";
import { Component } from ".";
import { createMeta } from "../../utils";
import { CSSProperties } from "react";

const meta = {
  ...createMeta(Component),
} satisfies Meta<typeof Component>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Text = {
  args: {
    children: (
      <p style={{ whiteSpace: "pre-line" }}>
        {"Fluffy Center Fluffy Center\nFluffy Center Fluffy Center"}
      </p>
    ),
  },
} satisfies Story;

const divStyle: CSSProperties = {
  display: "inline-block",
  border: "5px dotted darkkhaki",
  padding: "4rem",
};

export const Boxes = {
  args: {
    children: (
      <>
        <div style={{ ...divStyle }}>Item</div>
        <div style={{ ...divStyle, marginLeft: "1rem" }}>Item</div>
      </>
    ),
  },
} satisfies Story;

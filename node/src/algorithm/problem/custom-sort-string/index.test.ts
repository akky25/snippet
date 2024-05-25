import { XXX, XXX2 } from ".";

test.each([{ arg1: "exv", arg2: "xwvee", expected: "weexv" }])(
  "case %#",
  ({ arg1, arg2, expected }) => {
    const result = XXX(arg1, arg2);
    expect(result).toBe(expected);
  }
);

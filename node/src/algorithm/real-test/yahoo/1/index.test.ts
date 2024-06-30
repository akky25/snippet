import { XXX } from ".";

test.each([
  { arg: ["5", "3 3 3 4 3"], expected: true },
  { arg: ["5", "1 2 3 4 5 "], expected: false },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toBe(expected);
});

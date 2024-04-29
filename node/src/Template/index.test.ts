import { XXX } from ".";

test.each([
  { arg: [], expected: "" },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toBe(expected);
});

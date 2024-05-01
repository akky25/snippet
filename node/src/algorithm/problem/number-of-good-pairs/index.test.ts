import { XXX } from ".";

test.each([
  { arg: [1, 2, 3, 1, 1, 3], expected: 4 },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toBe(expected);
});

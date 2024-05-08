import { XXX } from ".";

test.each([
  { arg: [1, 2, 3, 1], k: 3, expected: true },
  // { arg: [], expected: "" },
])("case %#", ({ arg, k, expected }) => {
  const result = XXX(arg, k);
  expect(result).toBe(expected);
});

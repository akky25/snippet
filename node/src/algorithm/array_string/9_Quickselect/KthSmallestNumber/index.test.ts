import { XXX } from ".";

test.each([
  { arg: [7, 10, 4, 3, 20, 15], k: 3, expected: 7 },
  // { arg: [], expected: "" },
])("case %#", ({ arg, k, expected }) => {
  const result = XXX(arg, k);
  expect(result).toBe(expected);
});

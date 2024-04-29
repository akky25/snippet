import { XXX } from ".";

test.each([
  { arg: [], expected: "" },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = XXX([]);
  expect(result).toBe(expected);
});

import { removeElement } from ".";

test.each([
  { arg: [], val: 1, expected: "" },
  // { arg: [], expected: "" },
])("case %#", ({ arg, val, expected }) => {
  const result = removeElement(arg, val);
  expect(result).toBe(expected);
});

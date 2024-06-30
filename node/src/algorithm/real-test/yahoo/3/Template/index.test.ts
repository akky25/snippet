import { XXX } from ".";

test.each([
  { arg: ["2 3", "abc", "cba", "abb"], expected: 1 },
  // { arg: ["2 3", "abc", "cba", "ca"], expected: 1 },
  // { arg: ["3 3", "abc", "def", "ghi", "j"], expected: 0 },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toBe(expected);
});

import { reverseString } from ".";

test.each([
  { arg: "abcde", expected: "edcba" },
  { arg: "123456", expected: "654321" },
  { arg: "A", expected: "A" },
])("case %#", ({ arg, expected }) => {
  const result = reverseString(arg);
  expect(result).toBe(expected);
});

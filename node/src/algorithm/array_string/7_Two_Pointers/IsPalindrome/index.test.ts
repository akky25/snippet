import { isPalindrome } from ".";

test.each([
  { arg: "abcba", expected: true },
  { arg: "123321", expected: true },
  { arg: "A", expected: true },
  { arg: "ab", expected: false },
  { arg: "abcBA", expected: false },
  { arg: "", expected: true },
])("case %#", ({ arg, expected }) => {
  const result = isPalindrome(arg);
  expect(result).toBe(expected);
});

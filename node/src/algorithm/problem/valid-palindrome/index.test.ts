import { isPalindrome } from ".";

test.each([
  { arg: "A man, a plan, a canal: Panama", expected: true },
  { arg: "race a car", expected: false },
  { arg: " ", expected: true },
])("case %#", ({ arg, expected }) => {
  const result = isPalindrome(arg);
  expect(result).toBe(expected);
});

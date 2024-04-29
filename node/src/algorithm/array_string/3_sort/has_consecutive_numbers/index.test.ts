import { hasConsecutiveNumbers } from ".";

test.each([
  { arg: [1, 3, 4, 6], expected: true },
  { arg: [1, 3, 5, 7], expected: false },
  { arg: [1, 1], expected: false },
  { arg: [1], expected: false },
])("case %#", ({ arg, expected }) => {
  const result = hasConsecutiveNumbers(arg);
  expect(result).toBe(expected);
});

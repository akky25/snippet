import { findMaxAverage } from ".";

test.each([
  // { arg: [1, 12, -5, -6, 50, 3], k: 4, expected: 12.75 },
  // { arg: [5], k: 1, expected: 5 },
  { arg: [7, 4, 5, 8, 8, 3, 9, 8, 7, 6], k: 7, expected: 7 },
  // { arg: [], expected: "" },
])("case %#", ({ arg, k, expected }) => {
  const result = findMaxAverage(arg, k);
  expect(result).toBe(expected);
});

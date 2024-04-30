import { countSubArraysSum } from ".";

test.each([
  { nums: [1, 2, 3, 4, 5], target: 5, expected: 2 },
  { nums: [1, 2, 3, 4, 5], target: 10, expected: 1 },
  // { arg: [], expected: "" },
])("case %#", ({ nums, target, expected }) => {
  const result = countSubArraysSum(nums, target);
  expect(result).toBe(expected);
});

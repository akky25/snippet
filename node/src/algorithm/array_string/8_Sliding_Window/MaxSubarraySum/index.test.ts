import { maxSubarraySum } from ".";

test.each([
  { nums: [7, 1, 5, 9, 6, 4], k: 3, expected: 20 },
  { nums: [7, 1, 5, 9, 6, 4], k: 1, expected: 9 },
  // { arg: [], expected: "" },
])("case %#", ({ nums, k, expected }) => {
  const result = maxSubarraySum(nums, k);
  expect(result).toBe(expected);
});

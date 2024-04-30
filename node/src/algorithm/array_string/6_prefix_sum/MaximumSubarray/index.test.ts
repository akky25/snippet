import { maximumSubarray } from ".";

test.each([
  { nums: [1, 5, 6, 7, 4], k: 3, expected: 18 },
  { nums: [2, 1, 2, 3, 5, 5], k: 1, expected: 5 },
])("case %#", ({ nums, k, expected }) => {
  const result = maximumSubarray(nums, k);
  expect(result).toBe(expected);
});

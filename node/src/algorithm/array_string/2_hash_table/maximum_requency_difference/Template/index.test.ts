import { mostFrequentDiff } from ".";

test.each([
  { nums: [1, 2, 3, 2, 1], expected: 4 },
  { nums: [1, 5, 2, 3, 6], expected: 2 },
])("case %#", ({ nums, expected }) => {
  const result = mostFrequentDiff(nums);
  expect(result).toBe(expected);
});

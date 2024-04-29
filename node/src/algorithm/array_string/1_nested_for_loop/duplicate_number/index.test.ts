import { containsDuplicate, containsDuplicate2 } from ".";

test.each([
  { nums: [1, 2, 3, 1], expected: true },
  { nums: [1, 2, 3, 4], expected: false },
  { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
])("case %#", ({ nums, expected }) => {
  const result = containsDuplicate(nums);
  expect(result).toBe(expected);
});

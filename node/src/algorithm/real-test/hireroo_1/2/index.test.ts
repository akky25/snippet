import { XXX } from ".";

test.each([
  { pattern: [1, 3], items: [1, 2, 3], expected: false },
  { pattern: [1, 2], items: [1, 2, 3], expected: true },
  { pattern: [1, 2], items: [3, 1, 2], expected: true },
  // { arg: [], expected: "" },
])("case %#", ({ pattern, items, expected }) => {
  const result = XXX(pattern, items);
  expect(result).toBe(expected);
});

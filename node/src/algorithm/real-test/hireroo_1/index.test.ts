import { findRequiredTables } from ".";

test.each([
  {
    arg: [
      [0, 5],
      [2, 5],
      [5, 10],
    ],
    expected: 2,
  },
])("case %#", ({ arg, expected }) => {
  const result = findRequiredTables(arg);
  expect(result).toBe(expected);
});

import { XXX, XXX2 } from ".";

test.each([
  { arg: [100, 4, 200, 1, 3, 2], expected: 4 },
  { arg: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
  { arg: [1, 2, 0, 1], expected: 3 },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toBe(expected);
});

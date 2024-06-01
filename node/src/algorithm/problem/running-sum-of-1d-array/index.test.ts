import { XXX } from ".";

test.each([
  { arg: [1, 2, 3, 4], expected: [1, 3, 6, 10] },
  { arg: [3, 1, 2, 10, 1], expected: [3, 4, 6, 16, 17] },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toEqual(expected);
});

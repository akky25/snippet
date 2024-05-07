import { XXX } from ".";

test.each([
  { arg: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { arg: [3, 2, 4], target: 6, expected: [1, 2] },
  { arg: [3, 3], target: 6, expected: [0, 1] },
])("case %#", ({ arg, target, expected }) => {
  const result = XXX(arg, target);
  expect(result).toEqual(expected);
});

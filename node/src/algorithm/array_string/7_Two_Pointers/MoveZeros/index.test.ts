import { moveZeros } from ".";

test.each([
  { arg: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
  { arg: [4, 1, 0, 3, 0], expected: [4, 1, 3, 0, 0] },
  { arg: [1, 2, 3], expected: [1, 2, 3] },
  { arg: [0, 0], expected: [0, 0] },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = moveZeros(arg);
  expect(arg).toEqual(expected);
});

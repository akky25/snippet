import { sortSquares } from ".";

test.each([
  { arg: [-2, -1, 0, 3, 10], expected: [0, 1, 4, 9, 100] },
  { arg: [2, 4, 5], expected: [4, 16, 25] },
  { arg: [-5, -4, -3, -1, 0], expected: [0, 1, 9, 16, 25] },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = sortSquares(arg);
  expect(result).toEqual(expected);
});

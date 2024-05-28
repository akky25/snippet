import { XXX } from ".";

test.each([
  {
    arg: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: 25,
  },
  {
    arg: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    expected: 8,
  },
  {
    arg: [[3]],
    expected: 3,
  },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toBe(expected);
});

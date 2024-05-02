import { XXX } from ".";

test.each([
  {
    mat: [
      [0, 1],
      [1, 0],
    ],
    target: [
      [1, 0],
      [0, 1],
    ],
    expected: true,
  },
  // { arg: [], expected: "" },
])("case %#", ({ mat, target, expected }) => {
  const result = XXX(mat, target);
  expect(result).toBe(expected);
});

import { maxScore } from ".";

test.each([
  { arg: "011101", expected: 5 },
  // { arg: "1111", expected: 3 },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = maxScore(arg);
  expect(result).toBe(expected);
});

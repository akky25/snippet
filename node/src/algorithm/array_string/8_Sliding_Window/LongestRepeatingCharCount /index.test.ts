import { XXX } from ".";

test.each([
  { arg: "ABABABA", k: 2, expected: 5 },
  { arg: "BAB", k: 2, expected: 3 },
  { arg: "AAB", k: 2, expected: 3 },
  { arg: "AAA", k: 2, expected: 3 },
  { arg: "BBB", k: 2, expected: 2 },
  { arg: "BBBAA", k: 2, expected: 4 },
  { arg: "AAABBBB", k: 2, expected: 5 },
])("case %#", ({ arg, k, expected }) => {
  const result = XXX(arg, k);
  expect(result).toBe(expected);
});

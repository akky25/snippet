import { XXX } from ".";

test.each([
  { arg: ["2", "thirty", "tycoon"], expected: 10 },
  { arg: ["2", "dog", "cat"], expected: -1 },
  { arg: ["2", "aaa", "bbb"], expected: -1 },
  { arg: ["4", "international", "alcohol", "olive", "vehicle"], expected: 18 },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toBe(expected);
});

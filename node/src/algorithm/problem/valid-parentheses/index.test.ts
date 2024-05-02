import { XXX } from ".";

test.each([
  { arg: "()[]{}", expected: true },
  { arg: "(}", expected: false },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toBe(expected);
});

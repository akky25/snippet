import { countCarCollisions } from ".";

test.each([
  { arg: "RLRS", expected: 3 },
  { arg: "LLRR", expected: 0 },
  { arg: "RRL", expected: 3 },
  { arg: "RSS", expected: 1 },
  { arg: "RRLSRS", expected: 4 },
  { arg: "LL", expected: 0 },
  { arg: "RR", expected: 0 },
  { arg: "SS", expected: 0 },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = countCarCollisions(arg);
  expect(result).toBe(expected);
});

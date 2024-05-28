import { XXX } from ".";

test.each([
  { arg: ["d1/", "d2/", "../", "d21/", "./"], expected: 2 },
  { arg: ["d1/", "d2/", "./", "d3/", "../", "d31/"], expected: 3 },
  { arg: ["d1/", "../", "../", "../"], expected: 0 },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  expect(result).toBe(expected);
});

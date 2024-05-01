import { XXX } from ".";

test.each([
  { s: "anagram", t: "nagaram", expected: true },
  // { arg: [], expected: "" },
])("case %#", ({ s, t, expected }) => {
  const result = XXX(s, t);
  expect(result).toBe(expected);
});

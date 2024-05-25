import { commonChars, commonChars3, commonChars4 } from ".";

test.each([
  { arg: ["bella", "label", "roller"], expected: ["e", "l", "l"] },
  { arg: ["cool", "lock", "cook"], expected: ["c", "o"] },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = commonChars4(arg);
  expect(result).toEqual(expected);
});

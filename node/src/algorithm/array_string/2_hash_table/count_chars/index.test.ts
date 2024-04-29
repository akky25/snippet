import { countChars } from ".";

test.each([
  { str: "apple", expected: { a: 1, p: 2, l: 1, e: 1 } },
  { str: "", expected: {} },
])("case %#", ({ str, expected }) => {
  const result = countChars(str);
  expect(result).toStrictEqual(expected);
});

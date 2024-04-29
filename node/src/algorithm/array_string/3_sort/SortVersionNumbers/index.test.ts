import { sortVersionNumbers } from ".";

test.each([
  { arg: ["10.1.0", "1.1.0", "0.1.1"], expected: ["0.1.1", "1.1.0", "10.1.0"] },
  { arg: ["0.12.1", "0.2.1"], expected: ["0.2.1", "0.12.1"] },
])("case %#", ({ arg, expected }) => {
  const result = sortVersionNumbers(arg);
  console.log(result);
  expect(result).toEqual(expected);
});

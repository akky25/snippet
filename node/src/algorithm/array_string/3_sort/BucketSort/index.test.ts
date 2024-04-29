import { bucketSort } from ".";

test.each([
  { arg: [3, 2, 1, 2, 0, 100], expected: [0, 1, 2, 2, 3, 100] },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = bucketSort(arg);
  expect(result).toEqual(expected);
});

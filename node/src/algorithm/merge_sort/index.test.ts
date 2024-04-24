import { sort } from ".";

test("tmp", () => {
  const arr = [5, 3, 8, 4, 6];
  const res = sort(arr, 0, arr.length - 1);

  expect(res).toEqual(arr.toSorted((a, b) => a - b));
});

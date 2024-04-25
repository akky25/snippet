import { sort } from ".";

test("tmp", () => {
  const arr = [5, 3, 8, 4, 6];
  const res = sort(arr);

  expect(res).toEqual([3, 4, 5, 6, 8]);
});

import { sort } from ".";

test("tmp", () => {
  expect(sort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
});

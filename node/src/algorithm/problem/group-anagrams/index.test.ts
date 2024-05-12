import { XXX } from ".";

test.each([
  {
    arg: ["eat", "tea", "tan", "ate", "nat", "bat"],
    expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
  },
  {
    arg: [""],
    expected: [[""]],
  },
  {
    arg: ["a"],
    expected: [["a"]],
  },
  // { arg: [], expected: "" },
])("case %#", ({ arg, expected }) => {
  const result = XXX(arg);
  result.sort();

  // 各要素の配列をソートする
  const sortedArray1 = expected.map((subArray) => subArray.sort());
  const sortedArray2 = result.map((subArray) => subArray.sort());

  // ソートした配列全体をソートする
  const sortedArray1AsString = sortedArray1
    .map((subArray) => subArray.join(","))
    .sort();
  const sortedArray2AsString = sortedArray2
    .map((subArray) => subArray.join(","))
    .sort();

  expect(sortedArray2AsString).toEqual(sortedArray1AsString);
});

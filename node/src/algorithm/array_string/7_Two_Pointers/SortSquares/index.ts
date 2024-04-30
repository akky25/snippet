export function sortSquares(nums: number[]) {
  const n = nums.length;
  const newArr: number[] = new Array(n);

  let i = 0;
  let j = n - 1;
  let index = n - 1;

  while (i <= j) {
    const squareLeft = nums[i] ** 2;
    const squareRight = nums[j] ** 2;
    if (squareLeft < squareRight) {
      newArr[index] = squareRight;
      j--;
    } else {
      newArr[index] = squareLeft;
      i++;
    }
    index--;
  }
  return newArr;
}

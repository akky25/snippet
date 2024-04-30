export function moveZeros(nums: number[]) {
  let p = 0;
  nums.forEach((num, i) => {
    if (num !== 0) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      p++;
    }
  });
}

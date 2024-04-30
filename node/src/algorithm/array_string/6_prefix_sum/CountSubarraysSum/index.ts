export function countSubArraysSum(nums: number[], target: number) {
  const set = new Set<number>([0]);

  let count = 0;
  let sums = 0;
  for (let i = 0; i < nums.length; i++) {
    sums += nums[i];

    if (set.has(sums - target)) count++;

    set.add(sums);
  }

  return count;
}

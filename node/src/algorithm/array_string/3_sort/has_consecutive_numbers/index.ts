export function hasConsecutiveNumbers(nums: number[]): boolean {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] === 1) return true;
  }

  return false;
}

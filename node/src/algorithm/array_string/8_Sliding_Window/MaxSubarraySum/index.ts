export function maxSubarraySum(nums: number[], k: number) {
  let currentSum = 0;
  let maxSum = 0;

  // 初期値の設定
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  maxSum = currentSum;

  for (let i = 0; i < nums.length - k; i++) {
    currentSum -= nums[i];
    currentSum += nums[i + k];
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

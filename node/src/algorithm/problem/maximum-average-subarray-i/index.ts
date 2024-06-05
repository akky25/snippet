// スライド
export function findMaxAverage(nums: number[], k: number): number {
  // 0-kまでの合計値を初期値に
  let current = 0;
  for (let i = 0; i < k; i++) {
    current += nums[i];
  }

  // kからスライドして大きい方をセット
  let max = current;
  for (let i = k; i < nums.length; i++) {
    current += nums[i] - nums[i - k];
    max = Math.max(max, current);
  }

  return max / k;
}

// スライドを使わず累積和で
export function _findMaxAverage(nums: number[], k: number): number {
  // 累積和
  const length = nums.length;
  const sums = Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    sums[i + 1] = nums[i] + sums[i];
  }

  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < length + 1 - k; i++) {
    max = Math.max(max, (sums[i + k] - sums[i]) / k);
  }

  return max;
}

function getPrefixSum(nums: number[]) {
  const prefixSum: number[] = [0];

  nums.forEach((v, i) => {
    prefixSum.push(prefixSum[i] + v);
  });

  return prefixSum;
}

export function maximumSubarray(nums: number[], k: number) {
  const prefixSum: number[] = [0];

  nums.forEach((v, i) => {
    prefixSum.push(prefixSum[i] + v);
  });

  let max = 0;

  for (let i = 0; i < nums.length - k + 1; i++) {
    max = Math.max(max, prefixSum[i + k] - prefixSum[i]);
  }

  return max;
}

// セットを使った方法 O(n)
export function XXX(nums: number[]) {
  const numSet = new Set(nums);
  let maxScore = 0;

  for (const num of numSet) {
    if (numSet.has(num - 1)) continue;

    let count = 1;
    let current = num;
    while (numSet.has(current + 1)) {
      count++;
      current++;
    }
    maxScore = Math.max(maxScore, count);
  }

  return maxScore;
}

// ソートを使った方法
export function XXX2(nums: number[]) {
  nums.sort((a, b) => a - b);

  let max = 0;
  let count = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      count++;
    } else if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }
  max = Math.max(max, count);

  return max;
}

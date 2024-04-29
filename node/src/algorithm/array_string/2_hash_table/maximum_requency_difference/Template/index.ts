export function mostFrequentDiff(nums: number[]) {
  // mapを用意
  const hashTable = new Map();
  // 最高出現回数
  let maxCount = 0;

  // numsをループして絶対値をキーにマップにカウントを格納
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = Math.abs(nums[i] - nums[i + 1]);
    const currentCount = (hashTable.get(diff) ?? 0) + 1;
    hashTable.set(diff, currentCount);
    maxCount = Math.max(maxCount, currentCount);
  }
  return maxCount;
}

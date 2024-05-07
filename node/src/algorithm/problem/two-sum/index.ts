// 総当たり O(n^2)
export function XXX2(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

// Mapを使った方法 O(n)
export function XXX(nums: number[], target: number): number[] {
  // Map生成
  const map = new Map();
  nums.forEach((v, i) => {
    map.set(v, i);
  });

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement) && map.get(complement) !== i) {
      const sumIndex = map.get(complement);
      return [i, sumIndex];
    }
  }

  return [-1, -1];
}

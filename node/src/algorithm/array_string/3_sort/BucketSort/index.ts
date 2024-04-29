export function bucketSort(nums: number[]) {
  // 100 + 1 の２次元配列
  const bucket: number[][] = Array.from({ length: 100 + 1 }, () => []);

  // numsの各要素の値をインデックスとして2次元配列の要素にnumsの値をプッシュ
  nums.forEach((v) => {
    bucket[v].push(v);
  });

  // ２次元配列を展開
  return bucket.reduce((p, c) => [...p, ...c], []);
}

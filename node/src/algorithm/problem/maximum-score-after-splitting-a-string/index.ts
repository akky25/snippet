// O(N)
// 累積和を使った方法
export function maxScore(s: string): number {
  const length = s.length;
  const zeros = Array(length).fill(0);
  const ones = Array(length).fill(0);

  // 0の数の累積和
  zeros[0] = s[0] === "0" ? 1 : 0;
  for (let i = 1; i < length; i++) {
    zeros[i] = zeros[i - 1] + (s[i] === "0" ? 1 : 0);
  }

  // 1の数の累積和
  ones[length - 1] = s[length - 1] === "1" ? 1 : 0;
  for (let i = length - 2; i >= 0; i--) {
    ones[i] = ones[i + 1] + (s[i] === "1" ? 1 : 0);
  }

  // 全分割を累積和で計算して最大値を取得
  let max = 0;
  for (let i = 0; i < length - 1; i++) {
    max = Math.max(max, zeros[i] + ones[i + 1]);
  }

  return max;
}

// O(N)
// 累積話を使わない解法
// 要素が0の場合だけカウントしていく方法
export function maxScore2(s: string): number {
  let leftScore = s[0] === "0" ? 1 : 0;
  let rightScore = Array.from(s.slice(1)).filter((c) => c === "1").length;

  let result = leftScore + rightScore;

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === "0") {
      leftScore++;
    } else {
      rightScore--;
    }
    result = Math.max(result, leftScore + rightScore);
  }

  return result;
}

// O(N^2)
// BADな解法
export function maxScore3(s: string): number {
  let maxScore = 0;
  for (let i = 1; i < s.length; i++) {
    const left = s.slice(0, i);
    const right = s.slice(i);
    const leftScore = (left.match(/0/g) || []).length;
    const rightScore = (right.match(/1/g) || []).length;
    maxScore = Math.max(maxScore, leftScore + rightScore);
  }
  return maxScore;
}

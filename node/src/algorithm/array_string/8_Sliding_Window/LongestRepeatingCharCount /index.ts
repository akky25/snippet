export function XXX(str: string, k: number) {
  const n = str.length;
  const strArr = str.split("");

  let count = 0;
  let max = 0;

  let i = 0;
  let j = 0;

  while (j <= n) {
    if (strArr[j] === "B") count++;

    if (count > k || j === n) {
      max = Math.max(max, j - i);

      while (i < j) {
        if (strArr[i] === "B") {
          count--;
          i++;
          break;
        }
        i++;
      }
    }

    j++;
  }

  return max;
}

// より可読性を高めた方法
export function XXX2(str: string, k: number): number {
  const n = str.length;
  const strArr = str.split("");

  let bCount = 0;
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < n) {
    if (strArr[right] === "B") bCount++;

    while (bCount > k) {
      if (strArr[left] === "B") bCount--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}

// より可読性を高めた方法
export function XXX3(str: string, k: number): number {
  const n = str.length;
  const strArr = str.split("");

  let bCount = 0;
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < n) {
    if (strArr[right] === "B") bCount++;

    while (bCount > k) {
      if (strArr[left] === "B") bCount--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}

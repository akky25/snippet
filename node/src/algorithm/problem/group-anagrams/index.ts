// sortする方法
// O(N * (K * Log(K)))  N:strsの長さ、K:各文字列の値
export function XXX2(strs: string[]): string[][] {
  const map = new Map();

  for (const original of strs) {
    // O(N)
    const sortedStr = original // O(K*log(*))
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

    const mapValue = map.get(sortedStr) || [];
    mapValue.push(original);
    map.set(sortedStr, mapValue);
  }

  return [...map.values()];
}

// ハッシュ値を使う方法
// O(N * K)  N:strsの長さ、K:各文字列の値
export function XXX(strs: string[]): string[][] {
  const map = new Map();

  for (const original of strs) {
    // ハッシュコードの生成
    const charArr = new Array(26).fill(0);
    for (const c of original) {
      const code = c.charCodeAt(0) - "a".charCodeAt(0);
      charArr[code]++;
    }
    const hashCode = charArr.toString();

    const values = map.get(hashCode) || [];
    values.push(original);
    map.set(hashCode, values);
  }

  return [...map.values()];
}

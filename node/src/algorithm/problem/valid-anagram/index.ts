// ハッシュテーブルを使わない方法
// O(n^2)
export function XXX2(s: string, t: string) {
  if (s.length !== t.length) return false;

  const target: Array<string | null> = s.split("");
  for (const v of t) {
    // O(n)
    const p = target.indexOf(v); // O(n)
    if (p !== -1) {
      target[p] = null;
    } else {
      return false;
    }
  }
  return true;
}

// ハッシュテーブルを使う方法
// O(n)
export function XXX(s: string, t: string) {
  if (s.length !== t.length) return false;

  const hashTable = new Map<string, number>();

  // sの各文字のカウントをハッシュテーブルに格納
  // O(n)
  for (const v of s) {
    hashTable.set(v, (hashTable.get(v) ?? 0) + 1);
  }

  // tの各文字毎にハッシュテーブルのカウントを-1
  // O(n)
  for (const v of t) {
    const c = hashTable.get(v);

    if (!c) return false;

    hashTable.set(v, c - 1);
  }

  // O(n)
  for (const [_, c] of hashTable) {
    if (c !== 0) return false;
  }
  return true;
}

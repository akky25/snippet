export function countChars(str: string) {
  const hashTable = new Map();
  for (const char of str) {
    hashTable.set(char, (hashTable.get(char) ?? 0) + 1);
  }

  // 通常のオブジェクトに変換してリターン
  return Object.fromEntries(hashTable);
}

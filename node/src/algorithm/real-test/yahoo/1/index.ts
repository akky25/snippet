// export function XXX(input: string[]) {
//   const a = input[1].split(" ").map(Number);

//   const lengthCounts = new Map<number, number>();

//   // 各棒の長さの出現回数をカウント
//   for (const length of a) {
//     if (lengthCounts.has(length)) {
//       const lengthCount = lengthCounts.get(length) || 0;
//       lengthCounts.set(length, lengthCount + 1);
//     } else {
//       lengthCounts.set(length, 1);
//     }
//   }

//   // 出現回数が4以上の長さがあるか確認
//   for (const count of lengthCounts.values()) {
//     if (count >= 4) {
//       return true;
//     }
//   }

//   return false;
// }

/**
 * ループ中にチェックしてしまうパターン
 */
export function XXX(input: string[]) {
  const a = input[1].split(" ").map(Number);

  const lengthCounts = new Map<number, number>();

  // 各棒の長さの出現回数をカウント
  for (const length of a) {
    if (lengthCounts.has(length)) {
      const lengthCount = lengthCounts.get(length) || 0;
      lengthCounts.set(length, lengthCount + 1);
    } else {
      lengthCounts.set(length, 1);
    }

    if (lengthCounts.get(length) === 4) return true;
  }
  return false;
}

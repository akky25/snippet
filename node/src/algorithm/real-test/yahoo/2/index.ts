import { count } from "console";

// export function XXX(inputs: string[]) {
//   const n = parseInt(inputs[0]);
//   const words = inputs.slice(1);

//   const prefixMap: Map<string, number[]> = new Map();
//   const suffixMap: Map<string, number[]> = new Map();

//   // 単語の先頭2文字と語尾2文字をマップに格納
//   // O(N)
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     const prefix = word.slice(0, 2);
//     const suffix = word.slice(-2);

//     if (!prefixMap.has(prefix)) {
//       prefixMap.set(prefix, []);
//     }
//     if (!suffixMap.has(suffix)) {
//       suffixMap.set(suffix, []);
//     }

//     prefixMap.get(prefix)!.push(i);
//     suffixMap.get(suffix)!.push(i);
//   }

//   let maxLength = -1;

//   let count = 0;
//   // 語尾2文字をキーとして、対応する先頭2文字を持つ単語を探索
//   // O(N^2) ※ suffixMapと、indices, prefixMap.get(suffix)は相対で合計がNなので、全体量がN^3になることはない
//   for (const [suffix, indices] of suffixMap.entries()) {
//     if (prefixMap.has(suffix)) {
//       for (const suffixIndex of indices) {
//         for (const prefixIndex of prefixMap.get(suffix)!) {
//           count++;
//           console.log(count);
//           if (suffixIndex !== prefixIndex) {
//             const compoundLength =
//               words[suffixIndex].length + words[prefixIndex].length - 2;
//             maxLength = Math.max(maxLength, compoundLength);
//           }
//         }
//       }
//     }
//   }

//   return maxLength;
// }

/**
 * 少し改良（! を使っているところを削除）
 * @param inputs
 * @returns
 */
// export function XXX(inputs: string[]) {
//   const n = parseInt(inputs[0]);
//   const words = inputs.slice(1);

//   const prefixMap: Map<string, number[]> = new Map();
//   const suffixMap: Map<string, number[]> = new Map();

//   // 単語の先頭2文字と語尾2文字をマップに格納
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     const prefix = word.slice(0, 2);
//     const suffix = word.slice(-2);

//     if (!prefixMap.has(prefix)) {
//       prefixMap.set(prefix, []);
//     }
//     if (!suffixMap.has(suffix)) {
//       suffixMap.set(suffix, []);
//     }

//     const newPrefix = [...(prefixMap.get(prefix) || []), i];
//     const newSuffix = [...(suffixMap.get(suffix) || []), i];

//     prefixMap.set(prefix, newPrefix);
//     suffixMap.set(suffix, newSuffix);
//   }

//   let maxLength = -1;

//   // 語尾2文字をキーとして、対応する先頭2文字を持つ単語を探索
//   for (const [suffix, indices] of suffixMap.entries()) {
//     if (prefixMap.has(suffix)) {
//       for (const suffixIndex of indices) {
//         const prefixIndies = prefixMap.get(suffix) || [];
//         for (const prefixIndex of prefixIndies) {
//           if (suffixIndex !== prefixIndex) {
//             const compoundLength =
//               words[suffixIndex].length + words[prefixIndex].length - 2;
//             maxLength = Math.max(maxLength, compoundLength);
//           }
//         }
//       }
//     }
//   }

// return maxLength;
// }

// O(N)
export function XXX(inputs: string[]) {
  const n = parseInt(inputs[0]);
  const words = inputs.slice(1);

  const prefixMap: Map<string, { length: number; index: number }[]> = new Map();

  // 単語の先頭2文字をマップに格納
  // O(N)
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const prefix = word.slice(0, 2);
    const mapItem = prefixMap.get(prefix) ?? [];
    mapItem.push({ length: word.length, index: i });
    prefixMap.set(prefix, mapItem);
  }

  let maxLength = -1;

  // 単語の語尾2文字をキーとして、対応する先頭2文字を持つ単語を探索
  // O(N)
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const suffix = word.slice(-2);
    if (prefixMap.has(suffix)) {
      for (const { length, index } of prefixMap.get(suffix)!) {
        if (index !== i) {
          // 自分自身との結合を避ける
          const compoundLength = word.length + length - 2;
          maxLength = Math.max(maxLength, compoundLength);
        }
      }
    }
  }

  return maxLength;
}

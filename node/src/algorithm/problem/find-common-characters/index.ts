import { strict } from "assert";

export function commonChars(words: string[]): string[] {
  // // 結果配列
  // const result:stirng[] = [];

  // // 26文字分ループ
  // for(let i = 0; i < 26; i++) {

  // }

  // a -　z のマップ（カウンター）を用意
  const counterMap = new Map<string, number[]>();
  words.forEach((word, i) => {
    // const set = new Set(word.split(''))
    for (const char of word) {
      const currentCount = counterMap.get(char);
      if (currentCount) {
        if (currentCount[i]) {
          currentCount[i] += 1;
        } else {
          currentCount[i] = 1;
        }
        counterMap.set(char, currentCount);
      } else {
        const array = new Array(words.length).fill(0);
        array[i] = 1;
        counterMap.set(char, array);
      }
    }
  });

  const result = [];
  for (const [key, count] of counterMap) {
    if (count.every((v) => v > 0)) {
      for (let i = 0; i < count[0]; i++) {
        result.push(key);
      }
    }
  }

  return result;
}

// O(N * M)
export function commonChars3(words: string[]): string[] {
  const result: string[] = [];
  const totalCounter: number[] = new Array(26).fill(Number.MAX_SAFE_INTEGER);

  const startCharCode = "a".charCodeAt(0);
  const endCharCode = "z".charCodeAt(0);

  // O(N)
  for (const word of words) {
    const tmpCounter = new Array(26).fill(0);

    // O(M)
    for (const char of word) {
      tmpCounter[char.charCodeAt(0) - startCharCode]++;
    }

    for (let i = 0; i <= endCharCode - startCharCode; i++) {
      totalCounter[i] = Math.min(totalCounter[i], tmpCounter[i]);
    }
  }

  totalCounter.forEach((count, i) => {
    for (let j = 1; j <= count; j++) {
      result.push(String.fromCharCode(i + startCharCode));
    }
  });

  return result;
}

export function commonChars4(words: string[]): string[] {
  let result: string[] = words[0].split("");

  // O(N)
  for (let i = 1; i < words.length; i++) {
    const tmp = [];
    const target = words[i].split("");

    // O(M)
    for (const char of result) {
      const index = target.findIndex((v) => v === char);
      if (index !== -1) {
        tmp.push(char);
        target.splice(index, 1);
      }
    }
    result = tmp;
  }

  return result;
}

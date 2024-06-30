export function XXX(input: string[]) {
  const [H, W] = input[0].split(" ").map(Number);
  const S = input.slice(1, input.length - 1);
  const T = input[input.length - 1];
  const targetLength = T.length;

  let count = 0;

  // すべてのスタート位置(i, j)を試す
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      // for (let x = targetLength - 1; x >= 0; x--) {
      //   const y = targetLength - x - 1;
      //   if (j + x >= W || i + y >= H) {
      //     continue;
      //   }

      //   const xStr = S[i].slice(j, j + x + 1);
      //   let yStr = "";
      //   for (let targetY = i + 1; targetY < i + y + 1; targetY++) {
      //     yStr += S[targetY][j + x];
      //   }
      //   if (xStr + yStr === T) count++;
      // }

      let collect = "";
      for (let x = j; j < W && collect.length < targetLength; x++) {
        collect += S[i][x];

        if (collect === T) count++;
        for (let y = i + 1; y < H && collect.length < targetLength; y++) {
          collect += S[y][x];
          if (collect === T) count++;
        }
      }
    }
  }

  // 結果を出力
  return count;
}

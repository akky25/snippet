export function XXX(mat: number[][], target: number[][]): boolean {
  const n = mat.length;
  const flg = [true, true, true, true];
  for (let i = 0; i < n; i++) {
    // 90
    for (let j = 0; j < n; j++) {
      // 90
      if (mat[i][j] !== target[j][n - 1 - i]) {
        flg[0] = false;
      }

      // 180
      if (mat[i][j] !== target[n - 1 - i][n - 1 - j]) {
        flg[1] = false;
      }

      // 270
      if (mat[i][j] !== target[n - 1 - j][i]) {
        flg[2] = false;
      }

      // 360
      if (mat[i][j] !== target[i][j]) {
        flg[3] = false;
      }
    }
  }
  const res = flg.indexOf(true);
  return res === -1 ? false : true;
}

export function isMatrixRotated(
  matrix: number[][],
  target: number[][]
): boolean {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== target[j][n - 1 - i]) {
        return false;
      }
    }
  }
  return true;
}

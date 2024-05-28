export function XXX(mat: number[][]) {
  let res = 0;

  mat.forEach((v, i) => {
    if (i === v.length - 1 - i) {
      res += v[i];
    } else {
      res += v[i] + v[v.length - 1 - 1];
    }
  });

  return res;
}

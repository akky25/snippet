export function XXX(nums: number[]) {
  return nums.reduce<number[]>((p, c, i) => {
    if (i === 0) return [c];
    return [...p, p[i - 1] + c];
  }, []);
}

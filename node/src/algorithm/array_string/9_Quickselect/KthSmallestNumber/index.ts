// pivotを末尾（つまりright）とする
function partition(array: number[], left: number, right: number) {
  let i = left;
  for (let j = left; j < right; j++) {
    if (array[j] < array[right]) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  [array[i], array[right]] = [array[right], array[i]];
  return i;
}

export function XXX(nums: number[], k: number) {
  function select(array: number[], left: number, right: number) {
    const pivot = partition(array, left, right);

    if (k - 1 === pivot) {
      return array[pivot];
    } else if (k - 1 < pivot) {
      return select(array, left, pivot - 1);
    } else {
      return select(array, pivot + 1, right);
    }
  }

  return select([...nums], 0, nums.length - 1);
}

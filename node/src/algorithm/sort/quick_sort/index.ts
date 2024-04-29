// Pivotをランダムに決めてパーティションする関数
function partition(array: number[], left: number, right: number) {
  const pivot = left + Math.floor(Math.random() * (right - left + 1));
  [array[pivot], array[right]] = [array[right], array[pivot]];

  let i = left;
  let j = left;
  while (j < right) {
    if (array[j] < array[right]) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
    j++;
  }
  [array[i], array[right]] = [array[right], array[i]];
  return i;
}

// 再帰させる関数
function quickSort(array: number[], left: number, right: number) {
  if (left >= right) return;
  const pivot = partition(array, left, right);
  quickSort(array, left, pivot - 1);
  quickSort(array, pivot + 1, right);
}

export function sort(array: number[]) {
  const newArray = [...array];
  quickSort(newArray, 0, array.length - 1);
  return newArray;
}

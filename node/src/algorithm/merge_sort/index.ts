function merge(arr1: number[], arr2: number[]) {
  const result: number[] = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }

  if (index1 < arr1.length) {
    result.push(...arr1.slice(index1));
  } else if (index2 < arr2.length) {
    result.push(...arr2.slice(index2));
  }

  return result;
}

export function sort(array: number[]): number[] {
  const mid = Math.floor(array.length / 2);

  if (mid < 1) return array;

  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid);
  const result = merge(sort(leftArr), sort(rightArr));

  return result;
}

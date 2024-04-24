function merge(arr1: number[], arr2: number[]) {
  // console.log(arr1, arr2);
  const length = arr1.length + arr2.length;
  let newArr = [];
  for (let i = 0, j1 = 0, j2 = 0; i < length; i++) {
    if (arr1[j1] < arr2[j2]) {
      newArr[i] = arr1[j1];
      j1++;
    } else if (arr1[j1] > arr2[j2]) {
      newArr[i] = arr2[j2];
      j2++;
    } else {
      newArr[i] = arr1[j1];
      j1++;
      newArr[i + 1] = arr2[j2];
      j2++;

      i++;
    }

    if (j1 === arr1.length) {
      newArr = [...newArr, ...arr2.slice(j2)];
      break;
    } else if (j2 === arr2.length) {
      newArr = [...newArr, ...arr1.slice(j1)];
      break;
    }
  }
  return newArr;
}

export function sort(arr: number[], left: number, right: number) {
  console.log(arr.slice(left, right + 1));
  if (left === right) return [arr[left]];
  const mid = Math.floor((left + right) / 2);
  const res = merge(sort(arr, left, mid), sort(arr, mid + 1, right));
  return res;
}

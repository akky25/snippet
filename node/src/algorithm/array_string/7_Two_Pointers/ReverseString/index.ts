export function reverseString(str: string) {
  const strArr = str.split("");
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
  }
  return strArr.join("");
}

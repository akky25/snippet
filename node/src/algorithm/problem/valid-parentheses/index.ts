export function XXX(s: string) {
  // const stack: string[] = [];

  // for (const char of s) {
  //   if (["(", "[", "{"].includes(char)) {
  //     stack.push(char);
  //   }

  //   if (char === ")") {
  //     const pop = stack.pop();
  //     if (pop !== "(") return false;
  //   } else if (char === "]") {
  //     const pop = stack.pop();
  //     if (pop !== "[") return false;
  //   } else if (char === "}") {
  //     const pop = stack.pop();
  //     if (pop !== "{") return false;
  //   }
  // }

  // return stack.length === 0;

  // =========================================

  // const stack: string[] = [];
  // const map: Record<string, string> = {
  //   "}": "{",
  //   "]": "[",
  //   ")": "(",
  // };

  // for (const char of s) {
  //   /* Time O(N) */
  //   const isBracket = char in map;
  //   if (!isBracket) {
  //     stack.push(char);
  //     continue;
  //   } /* Space O(N) */
  //   console.log(stack);

  //   const isEqual = stack[stack.length - 1] === map[char];
  //   if (isEqual) {
  //     stack.pop();
  //     continue;
  //   }

  //   return false;
  // }

  // return stack.length === 0;

  // =========================================

  const stack: string[] = [];
  const map: Map<string, string> = new Map([
    ["}", "{"],
    ["]", "["],
    [")", "("],
  ]);

  for (const char of s) {
    /* Time O(N) */
    if (!map.has(char)) {
      stack.push(char);
      continue;
    } /* Space O(N) */

    const isEqual = stack[stack.length - 1] === map.get(char);
    if (isEqual) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.length === 0;
}

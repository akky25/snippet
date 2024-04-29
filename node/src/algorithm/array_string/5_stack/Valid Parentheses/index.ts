export function XXX(parentheses: string) {
  const stack = [];
  for (const char of parentheses) {
    if (char === "(") stack.push(char);
    else if (char === ")") stack.pop();
  }
  if (stack.length > 0) return false;
  return true;
}

export function XXX(logs: string[]): number {
  const stack: string[] = [];

  logs.forEach((log, index) => {
    switch (log) {
      case "./":
        break;
      case "../":
        stack.pop();
        break;
      default:
        stack.push(log);
    }
  });

  return stack.length;
}

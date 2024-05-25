export function XXX(order: string, s: string): string {
  return s
    .split("")
    .sort((a, b) => order.indexOf(a) - order.indexOf(b))
    .join("");
}

export function XXX2(order: string, s: string): string {
  const orderMap = new Map<string, number>();
  order.split("").forEach((v, i) => {
    orderMap.set(v, i);
  });

  const getIndex = (char: string) => orderMap.get(char) ?? -1;

  return s
    .split("")
    .sort((a, b) => getIndex(a) - getIndex(b))
    .join("");
}

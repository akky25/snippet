export default function makeCounter(initialValue: number = 0): () => number {
  let count = initialValue;
  return () => count++;
}

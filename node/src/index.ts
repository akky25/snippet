// const bucket: string[][] = Array.from({ length: 3 }, () => []);
// const bucket: string[][] =

// const bucket: string[][] = Array.from({ length: 3 }, () => Array(3).fill(0));
// const bucket: string[][] = Array.from({ length: 3 }, () => Array());

// const bucket = [...Array(3)].map(() => Array(3).fill(0));
// const bucket: string[][] = Array.from({ length: 3 }, () =>
//   new Array(3).fill(0)
// );
// const bucket: string[][] = Array(3)
//   .fill(null)
//   .map(() => Array(3).fill(0));

// const bucket: string[][] = [...Array(3)].map(() => Array(4).fill(0));
// const bucket: string[][] = Array(3)
//   .fill(null)
//   .map(() => []);
// const bucket: string[][] = [...Array(3)].map(() => []);

// const bucket: string[][] = Array(3).map(() => []);
const bucket: string[][] = Array(3).fill([...[]]);

bucket[1].push("abc");

console.log(bucket);

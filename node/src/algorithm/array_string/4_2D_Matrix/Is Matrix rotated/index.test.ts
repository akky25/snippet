import { isMatrixRotated } from ".";

const args = [
  [
    [
      [0, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ],
  ],
  [
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
  ],
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  ],
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ],
  ],
  [
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ],
  ],
];

test.each([
  { matrix: args[0][0], target: args[0][1], expected: true },
  { matrix: args[1][0], target: args[1][1], expected: true },
  { matrix: args[2][0], target: args[2][1], expected: true },
  { matrix: args[3][0], target: args[3][1], expected: false },
  { matrix: args[4][0], target: args[4][1], expected: true },
])("case %#", ({ matrix, target, expected }) => {
  const result = isMatrixRotated(matrix, target);
  expect(result).toBe(expected);
});

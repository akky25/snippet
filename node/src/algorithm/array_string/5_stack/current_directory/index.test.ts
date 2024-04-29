import { currentDirectory } from ".";

test.each([
  { arg: "/home/", expected: "home" },
  { arg: "/home", expected: "home" },
  { arg: "/home/name", expected: "name" },
  { arg: "/home/./name", expected: "name" },
  { arg: "/home/../name", expected: "name" },
  { arg: "/home/../name", expected: "name" },
  { arg: "/home/../name/.", expected: "name" },
  { arg: "/home/..", expected: "root" },
  { arg: "/home/../name/../", expected: "root" },
  { arg: "/", expected: "root" },
])("case %#", ({ arg, expected }) => {
  const result = currentDirectory(arg);
  expect(result).toBe(expected);
});

export function currentDirectory(path: string) {
  const pathArr = path.split("/");
  const pathStack: string[] = [];
  pathArr.forEach((v) => {
    if (v === "..") {
      pathStack.pop();
    } else if (v !== "." && v !== "") {
      pathStack.push(v);
    }
  });
  return pathStack.length === 0 ? "root" : pathStack[pathStack.length - 1];
}

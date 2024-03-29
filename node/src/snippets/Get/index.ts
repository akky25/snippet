export default function get<T>(
  objectParam: Record<string, any>,
  pathParam: string | Array<string>,
  defaultValue?: T
): T {
  const pathParamArr =
    typeof pathParam === "string" ? pathParam.split(".") : pathParam;

  let current: any = objectParam;
  for (let i = 0; i < pathParamArr.length; i++) {
    if (
      !current ||
      typeof current !== "object" ||
      !current.hasOwnProperty(pathParamArr[i])
    ) {
      current = defaultValue;
      break;
    }

    current = current[pathParamArr[i]];
  }
  return current;
}

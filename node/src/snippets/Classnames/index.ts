export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

export default function classNames(...args: Array<ClassValue>): string {
  let res: string[] = [];
  args.forEach((arg, i) => {
    // falsy
    if (!arg) return;

    // ClassArray
    if (Array.isArray(arg)) {
      res.push(classNames(...arg));
      return;
    }

    // ClassDictionary
    if (typeof arg === "object") {
      Object.entries(arg).forEach(([k, v]) => {
        console.log(v);
        if (!!v) res.push(k as unknown as string);
      });
      return;
    }

    // other
    res.push(String(arg));
  });
  return res.join(" ");

  throw "Not implemented!";
}

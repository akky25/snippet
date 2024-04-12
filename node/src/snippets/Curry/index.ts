export default function curry(func: Function): Function {
  return function curried(this: any, ...args: Array<any>) {
    if (args.length >= func.length) {
      return func.call(this, ...args);
    }

    return (arg: any) =>
      arg === undefined
        ? curried.call(this, ...args)
        : curried.call(this, ...args, arg);
  };
}

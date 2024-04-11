export default function debounce(func: Function, wait: number): Function {
  let id: ReturnType<typeof setTimeout> | undefined = undefined;

  function debouncedIncrement(this: any, ...args: any[]) {
    const context = this;
    clearTimeout(id);
    id = setTimeout(() => func.call(context, ...args), wait);
  }

  return debouncedIncrement;
}

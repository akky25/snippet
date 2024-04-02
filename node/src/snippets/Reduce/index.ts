interface Array<T> {
  myReduce<U>(
    callbackFn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue?: U
  ): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this.length === 0 && initialValue === undefined) throw new Error();
  let current = initialValue ?? this[0];
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      current = callbackFn(current, this[i], i, this);
    }
  }
  return current;
};

interface Array<T> {
  myFilter(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: any
  ): Array<T>;
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this))
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this))
      result.push(this[i]);
  }
  return result;
};

interface Function {
  myBind(this: Function, thisArg: any, ...argArray: any[]): Function;
}

Function.prototype.myBind = function (
  this: Function, // thisはここに書かなくてもいいが、型推論が効かないので書いている
  thisArg: any,
  ...argArray: any[]
) {
  // アロー関数で書いているのでthisはlexical scopeで決まる
  // つまり上記の引数のthis
  return (...args: any[]) => this.apply(thisArg, [...argArray, ...args]);
};

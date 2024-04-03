# Function.prototype.bind

Source: Function.prototype.bind() - JavaScript | MDN

Implement your own Function.prototype.bind without calling the native bind method. To avoid overwriting the actual Function.prototype.bind, implement the function as Function.prototype.myBind.

## Examples

```ts
const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

const unboundGetAge = john.getAge;
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42
```

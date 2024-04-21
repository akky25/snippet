classnames is a commonly-used utility in modern front end applications to conditionally join CSS class names together. If you've written React applications, you likely have used a similar library.

Implement the classnames function.

```ts
classNames("foo", "bar"); // 'foo bar'
classNames("foo", { bar: true }); // 'foo bar'
classNames({ "foo-bar": true }); // 'foo-bar'
classNames({ "foo-bar": false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
```

Arrays will be recursively flattened as per the rules above.

```ts
classNames("a", ["b", { c: true, d: false }]); // 'a b c'
```

Values can be mixed.

```ts
classNames(
  "foo",
  {
    bar: true,
    duck: false,
  },
  "baz",
  { quux: true }
); // 'foo bar baz quux'
```

Falsy values are ignored.

```ts
classNames(null, false, "bar", undefined, { baz: null }, ""); // 'bar'
```

In addition, the returned string should not have any leading or trailing whitespace.

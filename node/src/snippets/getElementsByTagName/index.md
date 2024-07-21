**`getElementsByTagName()`** is a method which exists on the [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName) and [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)objects and returns an **`HTMLCollection`** of descendant elements within the **`Document`**/**`Element`** given a tag name.

Let's implement our own [Element.getElementsByTagName()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) that is similar but slightly different:

- It is a pure function which takes in an element and a tag name string.
- Like **`Element.getElementsByTagName()`**, only descendants of the specified element are searched, not the element itself.
- Return an array of **`Element`**s, instead of an **`HTMLCollection`** of **`Element`**s.

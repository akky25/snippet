export default function getElementsByTagName(
  el: Element,
  tagNameParam: string
): Array<Element> {
  const elements: Element[] = [];
  const tagName = tagNameParam.toUpperCase();

  function traverse(element: Element) {
    if (element == null) {
      return;
    }

    if (element.tagName === tagName) {
      elements.push(element);
    }

    for (const child of element.children) {
      traverse(child);
    }
  }

  for (const child of el.children) {
    traverse(child);
  }

  return elements;
}

import getElementsByTagName from ".";

function checkResults(
  expected: HTMLCollectionOf<Element>,
  received: Array<Element>
) {
  expect(received.length).toBe(expected.length);
  // Inefficient O(n^2) check so that order doesn't matter.
  for (let i = 0; i < expected.length; i++) {
    expect(received.some((node) => node.isEqualNode(expected[i]))).toBe(true);
  }
}

// test.each([
//   { arg: [], expected: "" },
//   // { arg: [], expected: "" },
// ])("case %#", ({ arg, expected }) => {
//   const result = XXX(arg);
//   expect(result).toBe(expected);
// });

test("empty tree", () => {
  const document = new DOMParser().parseFromString(``, "text/html");
  console.log(document.body.outerHTML);
  const divs = getElementsByTagName(document.body, "div");
  const expected = document.body.getElementsByTagName("div");

  checkResults(expected, divs);
});

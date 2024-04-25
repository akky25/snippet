type ArrayValue = any | Array<ArrayValue>;

/**
 * 内部関数を作り、それを再帰させる方法。
 * ポイントは内部関数の"ブロック外"に結果を格納する配列を用意し、
 * 内部関数は要素が配列なら自身を呼び出し、そうでなければ結果配列に詰める。
 * これを繰り返せば、最終的に一番ネストした配列までチェックされる
 * @param value
 * @returns
 */
export default function flatten(value: Array<ArrayValue>): Array<any> {
  const result: any[] = [];

  function flattenHelper(element: any) {
    if (Array.isArray(element)) {
      element.forEach(flattenHelper);
    } else {
      result.push(element);
    }
  }

  flattenHelper(value);
  return result;
}

/**
 * solution2
 * 配列のコピーと結果配列を作り、コピー配列に対してループさせる
 * ループ内では、要素が配列ならそれを自身（コピー配列）の先頭に展開し、
 * "コピー配列から要素を取り出して"、配列でなければ"結果配列にpushする。
 * ポイントは、ループの条件がコピー配列の要素がある限り続ける、ということ。
 * @param value
 * @returns
 */
export function flatten2(value: Array<ArrayValue>): Array<any> {
  const result: any[] = [];
  const copy = [...value];

  while (copy.length) {
    const element = copy.shift();
    if (Array.isArray(element)) {
      copy.unshift(...element);
    } else {
      result.push(element);
    }
  }

  return result;
}

/**
 * solution3
 * Array.someで対象の配列の要素に配列がないかチェックし、ある限りループさせる
 * ループの中で、`arr = [].concat(...arr)`を使って、１つ目のネストした配列を展開する。
 * つまり、[1,[2, [3, 4]]] => [1, 2, [3, 4]]
 */
export function flatten3(value: Array<ArrayValue>): Array<any> {
  while (value.some(Array.isArray)) {
    value = [].concat(...value);
  }
  return value;
}

/**
 * solution 4
 * 直接対象の配列に対してミュータブルな方法。これは余分なメモリを必要としないので、空間複雑度はO(1)
 * 配列の要素を順にチェックしていき、要素が配列ならspliceを使って要素自身の位置に自分を展開する
 * ポイントはfor分でインクリメントせずに、要素が配列でない場合だけインクリメントするようにする
 */
export function flatten4(value: Array<ArrayValue>): Array<any> {
  for (let i = 0; i < value.length; ) {
    if (Array.isArray(value[i])) {
      value.splice(i, 1, ...value[i]);
    } else {
      i++;
    }
  }
  return value;
}

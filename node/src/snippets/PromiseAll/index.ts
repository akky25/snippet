type ReturnValue<T> = { -readonly [P in keyof T]: Awaited<T[P]> };

export default function promiseAll<T extends readonly unknown[] | []>(
  iterable: T
): Promise<ReturnValue<T>> {
  return new Promise((resolve, reject) => {
    // Promiseの結果を格納する配列
    const results = Array(iterable.length);

    // 未完了のPromiseカウンター
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve([] as ReturnValue<T>);
    }

    // iterableに格納されているPromise全てに対応するaync関数を生成
    iterable.forEach(async (p, i) => {
      try {
        const result = await p;
        results[i] = result;
        unresolved -= 1;

        // 最後のPromiseならここで全体のPromiseを終了
        if (unresolved === 0) {
          resolve(results as ReturnValue<T>);
        }
      } catch (e) {
        reject(e);
      }
    });
  });

  throw "Not implemented!";
}

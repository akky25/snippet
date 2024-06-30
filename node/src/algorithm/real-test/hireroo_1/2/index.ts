export function _XXX(pattern: number[], items: number[]): boolean {
  // パターンのインデックスを保持する変数
  let patternIndex = 0;

  // ショッピングカート内のアイテムを順番にチェックする
  for (let item of items) {
    // 現在のパターンが全てチェックされたら、クーポンが適用される
    if (patternIndex === pattern.length) {
      return true;
    }

    // パターンの現在の要素が特殊ID（-1）またはアイテムが一致する場合
    if (pattern[patternIndex] === -1 || pattern[patternIndex] === item) {
      patternIndex++;
    }
  }

  // ループが終わった後、パターンが全てチェックされていればクーポンが適用される
  return patternIndex === pattern.length;
}

export function XXX(pattern: number[], items: number[]): boolean {
  const patternLength = pattern.length;
  const itemsLength = items.length;

  if (patternLength > itemsLength) return false;

  for (let i = 0; i <= itemsLength - patternLength; i++) {
    let patternIndex = 0;
    while (
      patternIndex < patternLength &&
      pattern[patternIndex] === items[patternIndex + i]
    ) {
      patternIndex++;
    }

    if (patternIndex === patternLength) return true;
  }

  return false;
}

interface JQuery {
  css: (
    prop: string,
    value?: boolean | string | number
  ) => JQuery | string | undefined;
}

export default function $(selector: string): JQuery {
  const elem: HTMLElement | null = document.querySelector(selector);

  // ポイントは、getter と setter で処理を分けること
  // さらにメソッドチェーンを実現するために、setter で this を返すこと
  // thisを返すために、アロー関数ではなく、function を使う
  return {
    css: function (prop: string, value?: boolean | string | number) {
      // getter
      if (value === undefined) {
        if (elem == null) {
          return undefined;
        }
        const getValue = elem.style[prop as any];
        return getValue === "" ? undefined : getValue;
      }

      // setter
      if (elem != null) {
        elem.style[prop as any] = String(value);
      }
      return this;
    },
  };
}

export function isPalindrome(s: string): boolean {
  // sを小文字英数字のみに整形
  const newString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // 回文かチェック
  //   let flg = true;
  //   for (let i = 0; i < newString.length; i++) {
  //     if (newString[i] !== newString[newString.length - 1 - i]) {
  //       flg = false;
  //       break;
  //     }
  //   }
  // return flg

  // 回文かチェック（ワンライナー）
  return newString === newString.split("").reverse().join("");
}

export function sortVersionNumbers(versions: string[]) {
  const sortedVersions = versions.toSorted((a, b) => {
    // バージョンを"."で区切りさらに数字に変換
    const pre = a.split(".").map(Number);
    const next = b.split(".").map(Number);

    // バージョンレベルの数が少ない方に合わせてループを回す
    for (let i = 0; i < Math.min(pre.length, next.length); i++) {
      if (pre[i] !== next[i]) return pre[i] - next[i];
    }

    return 0;
  });

  return sortedVersions;
}

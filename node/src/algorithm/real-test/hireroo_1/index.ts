import { start } from "repl";

export function findRequiredTables2(reservations: number[][]): number {
  // 各予約の開始時刻と終了時刻を記録する
  const events: { time: number; type: string }[] = [];
  for (let reservation of reservations) {
    events.push({ time: reservation[0], type: "start" });
    events.push({ time: reservation[1], type: "end" });
  }

  // 時刻順にイベントをソート
  events.sort((a, b) => {
    if (a.time === b.time) {
      return a.type === "start" ? 1 : -1;
    }
    return a.time - b.time;
  });

  let maxTables = 0;
  let currentTables = 0;

  // イベントを順に処理
  for (let event of events) {
    if (event.type === "start") {
      currentTables += 1;
      if (currentTables > maxTables) {
        maxTables = currentTables;
      }
    } else {
      currentTables -= 1;
    }
  }

  return maxTables;
}

export function findRequiredTables(reservations: number[][]): number {
  const a: { time: number; type: "start" | "end" }[] = [];
  for (const res of reservations) {
    a.push({ time: res[0], type: "start" });
    a.push({ time: res[1], type: "end" });
  }

  a.sort((a, b) => {
    if (a.time === b.time) {
      return a.type === "start" ? 1 : -1;
    } else {
      return a.time - b.time;
    }
  });

  let max = 0;
  let current = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i].type === "start") {
      current++;
      max = Math.max(max, current);
    } else {
      current--;
    }
  }

  return max;
}

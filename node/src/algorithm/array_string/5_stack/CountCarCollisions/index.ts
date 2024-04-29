export function countCarCollisions2(directions: string) {
  const directionsArray = directions.split("");

  let collisionCount = 0;
  let rightCars = 0;
  let stopFlg = false;

  directionsArray.forEach((direction) => {
    if (direction === "R") {
      // Rの場合、rightCarsをインクリメント
      rightCars++;
    } else if (direction === "S") {
      // Sの場合、rightCarsの数だけ、collisionCountに追加
      // stopFlgをtrue
      if (rightCars > 0) {
        collisionCount += rightCars;
        rightCars = 0;
      }
      stopFlg = true;
    } else if (direction === "L") {
      if (rightCars > 0) {
        // rightCarsの数だけ衝突回数を追加、さらに+1
        collisionCount += rightCars + 1;
        rightCars = 0;
        stopFlg = true;
      } else if (stopFlg) {
        // Stopしていたら衝突回数を+1
        collisionCount++;
      }
    }
  });

  return collisionCount;
}

export function countCarCollisions(directions: string) {
  const stack: string[] = [];
  let count = 0;

  for (let current of directions) {
    console.log(stack, count);
    // Rの場合
    if (current === "R" || (stack.length === 0 && current === "S")) {
      stack.push(current);
      continue;
    }

    // 衝突するパターン
    // 1. [..., R] <-> L : +2 => [...., ?] ->? S
    // 2. [..., R] -> S : +1 => [..., ?] ->? S
    // 3. [..., S] <- L : +1 => [..., S] break
    do {
      const top = stack[stack.length - 1];
      if (top === "R" && current === "L") {
        count += 2;
        current = "S";
        stack.pop();
      } else if (top === "R" && current === "S") {
        count += 1;
        current = "S";
        stack.pop();
      } else if (top === "S" && current === "L") {
        count += 1;
        current = "S";
        break;
      } else if (top === "S" && current === "S") {
        break;
      }
    } while (stack.length > 0);
  }

  return count;
}

class CustomStack {
  private maxSize: number;
  private stack: number[];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  public push(x: number) {
    if (this.stack.length < this.maxSize) this.stack.push(x);
  }

  public pop() {
    return this.stack.pop() ?? -1;
  }

  public decrement(k: number, val: number) {
    this.stack[k - 1] -= val;
  }
}

export function XXX(nums: number[]) {
  return;
}

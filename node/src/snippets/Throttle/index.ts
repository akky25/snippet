type ThrottleFunction<T extends any[]> = (...args: T) => any;

export default function throttle<T extends any[]>(
  func: ThrottleFunction<T>,
  wait: number
): ThrottleFunction<T> {
  let shouldThrottle = false;
  const throttle = function (this: any, ...arg: T) {
    if (shouldThrottle) {
      return;
    }
    shouldThrottle = true;
    setTimeout(() => (shouldThrottle = false), wait);
    return func.apply(this, arg);
  };

  return throttle;
}

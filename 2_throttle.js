// 2.  Write a throttle function

// Answer
// #region
function throttle(func, wait = 200) {
  let throttled;
  return function (...args) {
    const context = this;

    if (!throttled) {
      func.apply(context, args);
      throttled = true;
      setTimeout(() => (throttled = false), wait);
    }
  };
}
// #endregion

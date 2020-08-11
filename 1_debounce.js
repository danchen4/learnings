// 1.  Write a debounce function
// With immediate flag, function will be executed at beginning rather than end of timeout

// Answer
// #region
function debounce(func, wait = 200, immediate = true) {
  let timeout;
  return function (...args) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
// #endregion

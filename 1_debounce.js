// 1.  Write a debounce function
// With immediate flag, function will be executed at beginning rather than end of timeout

// Answer
// #region
function debounce(callback, wait = 200, immediate = true) {
  let timeout;
  return function (...args) {
    // If callback has 'this' in it, then you need to preserve 'this' via closure when it's executed after setTimeout
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) callback.apply(context, args);
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) callback.apply(context, args);
  };
}
// #endregion

// Memoize any function

function memoize(callback) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    } else {
    }
  };
}

// Answer
//#region
function Memoize(func) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    } else {
      const value = func(...args);
      cache[args] = value;
      return value;
    }
  };
}
//#endregion

// 1.  Polyfill Reduce
// 2.  Polyfill forEach
// 3.  Polyfill Map
// 4.  Polyfill Filter
// 5.  Polyfill Some

// NOTE: for all answers, would still need to check if: callback is a function, Array isn't empty, add to skip large gaps in indexes

var arr = ['biggy smalls', 'bif tannin', 'boo radley', 'hans gruber'];

//1. Polyfill a reduce function

// Answer
// #region
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};
// #endregion

console.log(arr.myReduce((a, b) => `${a}, ${b}`, 'start'));

//2. Polyfill a forEach function

// Answer
// #region
Array.prototype.myForEach = function (callback, context = null) {
  for (let i = 0; i < this.length; i++) {
    callback.call(context, this[i], i, this);
  }
};
// #endregion

console.log(arr.myForEach((item) => console.log(item)));

//3. Polyfill Map

// Answer
// #region
Array.prototype.myMap = function (callback, context = null) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(callback.call(context, this[i], i, this));
  }

  return arr;
};
// #endregion

console.log(arr.myMap((item) => item + 'MAPS'));

// 4. Filter

// Answer
// #region
Array.prototype.myFilter = function (callback, context = null) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
};
// #endregion

// 5.  Some

//Answer
// #region
Array.prototype.mySome = function (callback, context = null) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      return true;
    }
  }
  return false;
};
// #endregion

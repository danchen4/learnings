// 1.  add(1)(2)(3)

// Answer
// #region
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// #endregion

// 2. add(1)(2)(3)..(n)()

// Answer
// #region
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
// #endregion

// 3.  sum(1,2)(3,4)

// Answer
// #region
function sum(a, b) {
  return function (d, c) {
    return a + b + c + d;
  };
}
// #endregion

// 4.  add(1,2,...,n)(5,6,...n)...(n)();

// Answer
// #region
function add(...args) {
  let a = args.reduce((a, b) => a + b);
  return function (...args) {
    let b = args.reduce((a, b) => a + b);
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
// #endregion

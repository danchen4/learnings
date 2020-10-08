// Benefits of closure
// 1.  Memory efficient
// 2.  Encapsulation

// Explanation of Closure
// Definition:  A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain.
// Closure has access to variables in three scopes:
// 1. variable in its own scope
// 2. variables in the enclosing function's scope
// 3. global variables

// ** Since all functions are written in the global environment, they all have access to global variables in the global execution context.

// Best explanation at minute 20:00 - https://www.youtube.com/watch?v=Nt-qa_LlUH0

count = 0;

function outer(x) {
  return function inner(y) {
    return x + y;
  };
}

var add5 = outer(5);
count += add5(2);
console.log(count); // 7
count += add5(3);
console.log(count); // 7 + 8 = 15

// the outer functions execution context consists of:
// arguments: {0: 5, length: 1}
// this: window
// x: 5

// When outer returns (or gets popped off the execution stack), the inner function creates a closure around the outer function's execution context
// When add5(2) gets executed, it'll be nested in the closure scope that was just created.  When it looks for variable x, it won't find it, so it will move up the scope chain and find x = 5 in the closure scope

// Source: https://dev.to/macmacky/70-javascript-interview-questions-5gfi#2-what-does-the-ampamp-operator-do
// Example 1

var globalVar = 'global';
var outerVar = 'outer';

function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam);
  }
  return innerFunc;
}

const x = outerFunc(outerVar);
outerVar = 'outer-2';
globalVar = 'guess';
x('inner'); // guess outer inner

// Example 2

const arrFuncs = [];
for (var i = 0; i < 5; i++) {
  arrFuncs.push(function () {
    return i;
  });
}

// Solution
//#region

// Using an IIFE
for (var i = 0; i < 5; i++) {
  arrFuncs.push(
    (function (i) {
      return function () {
        return i;
      };
    })(i)
  );
}
//#endregion

console.log(i); // i is 5

for (let i = 0; i < arrFuncs.length; i++) {
  console.log(arrFuncs[i]()); // all logs "5", because var is not blocked scoped, and when the function returns i, it'll return global variable i, which is '5',
}

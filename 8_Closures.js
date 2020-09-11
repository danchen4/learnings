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

console.log(i); // i is 5
console.log(arrFuncs);

for (let i = 0; i < arrFuncs.length; i++) {
  console.log(arrFuncs[i]()); // all logs "5", because var is not blocked scoped, and when the function returns i, it'll return global variable i, which is '5',
}

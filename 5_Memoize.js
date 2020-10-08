// Create a fib function
// Run the fib and determine start and end time
// Memoize fib function
// Run the memoized fib and dtermine start and end time

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

// Test
let start = new Date();
console.log(fib(40));
let end = new Date();
let time = (end.getTime() - start.getTime()) / 1000;
console.log(`Non memoized time: ${time} seconds`);

fib = memoize(fib);

start = new Date();
console.log(fib(40));
end = new Date();
time = (end.getTime() - start.getTime()) / 1000;
console.log(`Memoized time: ${time} seconds`);

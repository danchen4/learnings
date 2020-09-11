// Why does b in this code become a global variable when you call this function
function myFunc() {
  let a = (b = 0);
}

myFunc();

// Since b is not declared, JS makes global variable b
// a gets assigned (b = 0 ), or a = 0;

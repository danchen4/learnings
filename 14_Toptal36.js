/*
1.  What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

  1.  Prevents accidental globals.  
  Non-strict:
  Undeclared variables will become global variable (e.g. b = 3 )

  Strict:
  Error


  2. Eliminates 'this' coercion
  Non-strict: 
  Reference to 'this' value of null or undefined is coerced to global

  Strict:
  Error

*/

// 2.  What does the code below output?

console.log(0.1 + 0.2);

// 0.30000000000000004 (Javascript uses 64-bit floating point precision)

// 3.  How to make recursive code not stack overflow

var list = readHugeList();

var nextListItem = function () {
  var item = list.pop();

  if (item) {
    // process the list item...
    nextListItem();
    // setTimeout(nextListItem,0)
  }
};

// 4.  What is output of:

var a = {},
  b = { key: 'b' },
  c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// 456
// Keys are converted to strings, so b and c are converted to "[Object object]"

/*

5.  Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

The arguments to the function should be:

a DOM element
a callback function (that takes a DOM element as its argument)
*/

function Traverse(p_element, p_callback) {
  p_callback(p_element);
  var list = p_element.children;
  for (var i = 0; i < list.length; i++) {
    Traverse(list[i], p_callback); // recursive call
  }
}

// 6. What is out put of:

var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1);

// 10, 2
// First fn is passed as a paremeber, therefore the scope of the function is window
// arguments[0]() is calling fn().  Inside fn, the scope of this function becomes the arguments array, and length of arguments is 2.

// 7.  Output of:
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

// undefined
// Even thought var x = 20 is hoisted, only the DECLARATION is hoisted

// 8.  What will happen?
var a = [1, 2, 3];

a[10] = 99; // [ 1, 2, 3, <7 empty items>, 99 ]
console.log(a[6]); // Undefined.


// 9.  What will display?
console.log(typeof typeof 1);

// String.  typeof 1 is 'number', which is a string
## &&, ||

The && or Logical AND operator finds the first falsy expression in its operands and returns it and if it does not find any falsy expression it returns the last expression.

The || or Logical OR operator finds the first truthy expression in its operands and returns it.

## !!

Coerces value into boolean

console.log(!!null); //false
console.log(!!undefined); //alse
console.log(!!''); //false
console.log(!!0); //false
console.log(!!NaN); //false
console.log(!!' '); //true
console.log(!!{}); //true
console.log(!![]); //true
console.log(!!1); //true
console.log(!![].length); //false

# innerHTML vs textContent

# appendChild

# classList.add

# Closures

Function always remembers the lexical environment in which it is created (or declared).

Environment consists of any local variables that were in-scope at the time the closure was created

Closure gives you acces to outer functions' scope from inner function

# Scope

The area where we have valid access to variables or functions
Three types:

1. Global
2. Functional
3. Block

Available data + variables based on where the function was written.

Lexical Environemnt == [[scope]]

- in Chrome, there is [[Scopes]] property pointing to outside lexical environment

# Scope Chain

1.  If variable does not exist in current scope, look up variable in outer scope
    Stop if:
1.  You reach the global scope (if it doesn't exist, throw an error)
1.  You find the variable

# Hoisting

1. Variables and function **declarations** are moved to the top of their scope before code execution
2. Only var and functions are hoisted.
3. Only **declartions** are hoisted

Explain:

var a = 1;

function b() {
a = 10;
return;
function a() {}
}
b();
console.log(a); // 1

1.  function a() {} will be hoisted. Same as var a = function () {}. Hence, in local scope, a is created.
2.  local scope trumps global scope (or parent scope) in scope chain.
3.  When setting a = 10, setting local variaable (not global)

# Execution Context

1.  Creation (or initialization) phase

- if global, Global object is determined
- 'this' is determined
- Variable environment
- Memory is allocated for variables and functions
- Hoisting

2.  Execution Phase

# Capturing and Bubbling

3 phases of event propogation

1. Capturing phase - event goes from window down to element
2. Target phase - event reaches target element
3. Bubbling phase - event bubbles up from element to window

When event happens, calls handler on target, then on parent, all the way up to root.

# Falsy values

const falsyValues = ['', 0, null, undefined, NaN, false];

# Other

- Properties that don't exist in an object or it's prototype has default value of undefined.

# How to scale a website

1.  CDN - serve all your static and dynamic assets through its servers across the world.
2.  Load Balancing - a server sitting in front of other servers that distribute network traffic across servers. Done using a couple of algorithms: round robin, IP Hash, etc.
3.  Caching - Local caching, server-side caching. Centralized Caching (Redis);
4.  More Servers
5.  Reduce Bandwidth Usage - Whenever your server receives a lot of traffic, it's important to decrease bandwidth usage. This effectively leads to increase in page speed, as load on server decreases. This can be done by compressing your code and other resources.

# How does Babel work

1.  Parses code to AST (Abstract Syntax Tree) usying Babylon Parser
2.  Transforms AST using Babel plugin/presets + Babel Traverse to new AST that is backward
3.  Babel Generator turns modified AST to source code.

# Monolithic vs Microservice

A **monolithic** architecture means that your app is written as one cohesive unit of code whose components are designed to work together, sharing the same memory space and resources.

A **microservice** architecture means that your app is made up of lots of smaller, independent applications capable of running in their own memory space and scaling independently from each other across potentially many separate machines

# What is asynchronous programming, and why is it important in JavaScript?

Asynchronous programming means that the engine runs in an event loop. When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result. When the response is ready, an interrupt is fired, which causes an event handler to be run, where the control flow continues. In this way, a single program thread can handle many concurrent operations.

# Event Bubble

Capture: Goes from Window -> document -> HTML tag -> body -> element
Target: Goes to lowest level element and checks if there is an event handler
Bubbling: Handler runs on target, then browser will continue moving up elements and executing handlers (if they exist) until it reaches the root

# Reflow

Generally, when you change the size or position of an element, all the elements after it will also need to change their position / size, which will cause a reflow

- Reflow is bad;

Avoiding reflow:

- Change layout (geometry of page)
- Change width/height of an element
- Changing font / font size

# Repaint

When changing look, without change size or position (background color, text color, visibility: hidden)

# DOM ready / Async / Defer

Normally, wihtout async/defer script tag, parser will pause parsing, script would be downloaded and exectuted. After that parsing resume.

- 'script defer' - executes when DOM is ready, but before DOMContentLoaded
- 'script async' - script is completely independent. Page doesn't wait for async scripts and script doesn't wait for page.

document.addEventListener('DOMContentLoaded', func);

document.onreadystatechange = function () {  
 if (document.readyState == "complete") {
//put your script here
}
}

# DOM

DOM is hierarchy of nodes
Element is a type of node. There are other nodes: text, comment, document

# window vs document

Window is Javascript's global object in a browser. Document is property of window object.

window.onload = when DOM is ready and all contents (images, css, scripts) are finished loading
document.onload = DOM is ready, but can be ready before other content has loaded (images, scripts, etc.)

# undeclared, undefined, null

Undeclared: variable has not been declared previously
Undefined: variable is declared but not assigned
Null: Primitive value that represents 'no value'.

# Hoisting

Explain:

var a = 1;
function b() {
a = 10;
return;
function a() {}
}
b();
console.log(a);

1.  function a() {} will be hoisted. Same as var a = function () {}. Hence, in local scope, a is created.
2.  local scope trumps global scope (or parent scope) in scope chain.
3.  When setting a = 10, setting local variaable (not global)

# closures inside loops

for(var i = 0; i < 10; i++) {
setTimeout(function() {
console.log(i);  
 }, 10);
}

1.  The console log is inside the anonymous function of setTimeout and setTimeout is executed when current call stack is over. So, the loop finishes and before setTimeout get the chance to execute.
2.  However, anonymous functions keep a reference to i by creating a closure.
3.  Since, the loop is already finished, the value i has been set to 10.
4.  When setTimeout use the value of i by reference, it gets the value of i as 10. Hence, you see 10 ten times.

# Pass by value or by reference

1.  Primitive type (string, number, etc.) are passed by value and objects are passed by reference.
2.  If you change a property of the passed object, the change will be affected. However, you assign a new object to the passed object, the changes will not be reflected.

# display: none vs visibility: hidden

Display removes document from flow (and from rendering tree).
Visiblity: hidden tag is rendered, takes space in normal flow but doesn't show it.

# inline, inline-block, block;

inline: Does not break flow. margin/padding pushing horizontally, not vertically. No width/height.
inline-block: Does not break flow. Has vertical margin/padding and width/height.
block: Breaks flow. Doesn't sit inline.

# Box model

box-sizing: content-box (default), border-box (most common)
Everything in a web page is a box where you can control size, position, background, etc

# Psuedo Classes / Pseudo Elements

pseudo elements generates content where as pseudo class deals with state of the element

**pseudo class** tells you specific state of an element. allow to style element dynamically.
Examples - :hover, :visited, :focus, :nth-child, nth-of-type, :link, etc.

**pseudo elements** helps you add cosmetic content.
Examples - :first-letter, :first-line, :before, :after

# CSS specificity

Four levels: inline styles, IDs, classes / attributes (.classes, [input], :hover, :focus), and elements (<div>, :before, :after)

# CSS

[role=navigation] > ul a:not([href^=mailto]) {}
This selects anchor links that are not email links that are decedents of an unordered list that is the direct child of any element with a role attribute of 'navigation'. this answer copied from

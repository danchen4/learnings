// 1.  Write a debounce function
// With immediate flag, function will be executed at beginning rather than end of timeout

// Answer
// #region
function debounce1(callback, wait = 200, immediate = true) {
  let timeout;
  // console.log(this); // global object
  return function (...args) {
    // If callback has 'this' in it, then you need to preserve 'this' via closure when it's executed after setTimeout
    const context = this;
    console.log(context);

    const later = () => {
      timeout = null;
      if (!immediate) callback.apply(context, args);
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) callback.apply(context, args);
  };
}

// No context = this
function debounce2(callback, interval = 200, immediate = true) {
  let timeout;

  return function (...args) {
    console.log(this);

    const later = () => {
      timeout = null;
      if (!immediate) callback(...args);
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, interval);
    if (callNow) callback(...args);
  };
}

// #endregion

// The need to const context = this;
obj = {
  data: 'hello object method',
  hello() {
    console.log(this.data);
  },
};

function hello() {
  console.log('hello function');
}

// hello = debounce(obj.hello, 2000, false);
// hello();
//Window (global) object
//undefined

obj.talk1 = debounce1(obj.hello, 2000, false);
obj.talk1();
/*
{
  data: 'hello object method',
  hello: [Function: hello],
  talk: [Function]
}
*/
//('hello object method');

obj.talk2 = debounce2(obj.hello, 2000, false);
obj.talk2();
/*
{
  data: 'hello object method',
  hello: [Function: hello],
  talk: [Function]
}
*/
//undefined

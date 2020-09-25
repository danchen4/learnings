# Elements

The object representation of React Element would be as follows:

```
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
```

The above React.createElement() function returns an object:

```
Returns an object
{
type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}
```

And finally it renders to the DOM using ReactDOM.render():

<div id='login-btn'>Login</div>

# State

1. Sources of data for Components that persists between renders
2. Objects resonsible for determining component behavior and rendering

## Virtual DOM

In memory object representation of real DOM.

1.  Whenever underlying data changes, entire UI is re-rendered in Virtual DOM representation

## **Reconciliation**

1.  Creates new Virtual DOM
2.  Heurtistic diffing algorithm with old Virtual DOM
3.  Creates list of minimum possible changes to the browser DOM
4.  Once list it's completed, it will fire all possible changes

## Component Life Cycle

Three distinct lifecycles:

1.  Mounting

- Render Phase

  1. function body executes
  2. return ()

- Commit Phase
  1. React updates DOM and refs
  2. useEffect(), useLayoutEffect()

2.  Updating

- Render Phase
  1. useState(), useReducer(), useContext()
- Commit Phase
  1. React updates DOM and refs
  2. useEffect(), useLayoutEffect()

3.  UnMounting

- Render Phase
  1. nothing
- Commit Phase
  1. useEffect(), useLayoutEffect()

Function Component Diagram
https://github.com/Wavez/react-hooks-lifecycle

## Create React App (CRA)

1. React, JSX, ES6, and Flow syntax support.
2. Language extras beyond ES6 like the object spread operator.
3. Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
4. A fast interactive unit test runner with built-in support for coverage reporting.
5. A live development server that warns about common mistakes.
6. A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.

# React vs React DOM

Whenever we use component, classes, elements, etc. We’re using React
Whenever we use methods like render() or findDOMNode() we’re using React-DOM

# Hooks

1.  Functions (unlike classes) can't have local React state inside of them.
2.  Hooks are fully encapsulated — each time you call a Hook, it gets isolated local state within the currently executing component
3.  Each Hook may contain some local state and side effects

_Where does React keep state of hooks?_
The answer is it’s kept in the exact same place where React keeps state for classes. React has an internal update queue which is the source of truth for any state, no matter how you define your components.

# useCallback

hook returns the same function instance between renderings:

1.  When inside a React component body a function is defined (e.g. a callback or event handler), **this function is re-created on every rendering**
2.  handleClick is a different function object on every rendering

Cases when you need to keep one instance of a function:

1. A component wrapped inside React.memo() and accepts a callback prop
2. When the function is used as a dependency to other hooks, e.g. useEffect(..., [callback])

# Controlled vs Uncontrolled

Controlled

1.  Don't maintain own state
2.  Data controlled by parent component
3.  Current value from props and notify changes via callback

Uncontrolled

1. Maintain own state
2. Data controlled by DOM
3. Refs used to get current values

# Flux

1. Flux is an application design paradigm with unidirectional Data Flow
2. Controls derived data and enables communication between multiple components using central Store

# Redux

Core principals

1. Single source of truth
2. State is read-only (need to emit actions)
3. Changes are made with pure functions (aka reducers)

Reducers are pure functions that take in the previous state and action, and then it returns a new state.

Simple store:

```
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({}); // dummy dispatch

  return { getState, dispatch, subscribe };

};
```

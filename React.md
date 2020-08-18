# Elements

The object representation of React Element would be as follows:

const element = React.createElement(
'div',
{id: 'login-btn'},
'Login'
)

The above React.createElement() function returns an object:
Returns an object
{
type: 'div',
props: {
children: 'Login',
id: 'login-btn'
}
}

And finally it renders to the DOM using ReactDOM.render():

<div id='login-btn'>Login</div>

# State

Sources of data for Components
Objects resonsible for determining component behavior and rendering

## Virtual DOM

In memory object representation of real DOM.

1.  Whenever underlying data changes, entire UI is re-rendered in Virtual DOM representation

## **Reconciliation**

1.  Creates new Virtual DOM
2.  Heurtistic diffing algorithm with old Virtual DOM
3.  Creates list of minimum possible changes to the browser DOM
4.  Once list it's completed, it will fire all possible changes

## Component Life Cycle

Three distinct phases

1.  Mounting
2.  Updating
3.  UnMounting

Function Component Diagram
https://github.com/Wavez/react-hooks-lifecycle

Internally, React has concept of phase

1.  Render - component will render without any side-effects
2.  Pre-commit
3.  Commit

Boils down to

1.  Function() {} (function body is executed)
2.  Return ()
3.  React updates DOM and refs
4.  Side effects (useEffect(), useLayoutEffect)

Update

1.  useState(), useReducer(), useContext()
2.  React updates DOM and refs
3.  Side effects (useEffect(), useLayoutEffect)

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

# Flux

Flux is an application design paradigm

Unidirectional Data Flow

# Redux

Core principals

1. Single source of truth
2. State is read-only (need to emit actions)
3. Changes are made with pure functions (aka reducers)

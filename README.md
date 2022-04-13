# Utah ReactJS Meetup - April 12, 2022

A presentation about managing component state with `useState` and `useRef`.

## Branches

### local-variable

A naive (incorrect) attempt at updating state using a local variable.

### use-state

A first look at `useState`. Discussion of how hooks work and how `useState` re-renders the component.

### use-state-with-timeout

The state value get "trapped" in a closure. In this case, it won't represent the _latest_ state.

### use-state-with-fn-and-timeout

The same as the last branch, except now we're passing an update function into `setState` so we can set new state based on the latest state.

### improper-state-1

An (incorrect) example of trying to update a child through props when the value is not controlled using `useState`. If the parent doesn't re-render, neither will the child.

### improper-state-2

An (incorrect) example of to update the state with the same object in memory that was already in state. Because it's the same object in memory, React won't re-render the component.

### batched

An example in React 17 where multiple `setState` calls are batched into a single render.

### unbatched

An example in React 17 where multiple `setState` calls are _not_ batched into a single render. In React 18, these are batched.

### use-ref

An intro to use-ref. How to use it to avoid re-renders. How to use it to ensure you're always accessing the latest "variable" value. Discussion of why React decided to use a `current` property on the ref instead of having use change the ref itself.

### set-state-after-unmount

An example of setting state after unmount and the resulting warning in the console from React.

### set-state-after-unmount-fixed

An example of fixing the warning in previous branch by properly clearing the timeout.

### use-ref-focus

How `useRef` and be used to access a DOM element.

## Links

### https://github.com/adobe/reactor-extension-alloy/blob/84a061595f557cda77d0f0f6d82d15f083e90368/src/view/utils/usePagedComboBox.js

A custom hook I struggled with building until I used `useRef` for most everything instead of `useState`. This allowed me to always operate on the latest values, but left me in charge of doing some bookkeeping and manually re-rendering.

### https://twitter.com/tannerlinsley/status/1504854824952610818

Tanner Linsley's tweet about managing his own state and manually re-rendering the component.


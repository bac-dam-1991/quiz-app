# Deep dive: Javascript and React

- By: Bac Trach Dam

# Table of content

# Lecture 1: Introduction to React

# Lecture 2: States

# Lecture 3: Conditional rendering

## `boolean` evaluation

### `and` evaluation

|       | True  | False |
| ----- | ----- | ----- |
| True  | True  | False |
| False | False | False |

### `or` evaluation

|       | True | False |
| ----- | ---- | ----- |
| True  | True | True  |
| False | True | False |

## `if`, `else if` and `else`

```javascript
if (expression_01) {
  // Do something
} else if (expression_02) {
  // Do something else
} else {
  // Do anything else
}
```

## `ternary` operator

Using `if` and `else`

```javascript
const number = 2;

let isPositive;

if (number > 0) {
  isPositive = "yes";
} else {
  isPositive = "no";
}
```

Using `ternary` operator

```javascript
const number = 2;

const isPositive = number > 0 ? "yes" : "no";
```

## Review questions

1. Which of the following correctly describes the result of the `and` evaluation when both operands are `True`?

   - A) `False`
   - B) `True`
   - C) `Null`
   - D) `Undefined`

2. In the context of `or` evaluation, what would be the result if the first operand is `False` and the second operand is `True`?

   - A) `True`
   - B) `False`
   - C) `Null`
   - D) `Undefined`

3. When using an `if` statement in JavaScript, what happens if `expression_01` evaluates to `True`?

   - A) The code inside `else if` block executes.
   - B) The code inside `else` block executes.
   - C) The code inside `if` block executes.
   - D) No code block executes.

```javascript
if (expression_01) {
  // Do something
} else if (expression_02) {
  // Do something else
} else {
  // Do anything else
}
```

4. Which of the following ternary expressions is equivalent to the following piece of code

   - A) `const a = n === true ? 1 : 2`
   - B) `const a = n === true ? 2 : 1`
   - C) `const a = true ? 1 ? 2`
   - D) `const a = n ? 1 : 2`

```javascript
let a;
if (n === true) {
  a = 1;
} else {
  a = 2;
}
```

# Lecture 4: Introduction to git

The advent of Git has revolutionized the way developers manage and track code changes in software development. Created by Linus Torvalds in 2005, Git is a distributed **version control system** that enables efficient, flexible, and collaborative coding practices. This brief aims to introduce the core concepts of Git, its significance, and basic operations.

> Note from Roi: Never use a GUI. Use the terminal.

## Key terms in git

- branch
  - Series of commits
- commit
  - Usually represented as circles on a diagram
  - Similar to save points in games
- staging
  - Preparing the changes to become a commit
  - Local-only term
- remote
  - Anywhere that is not your local machine
  - E.g. Github, Bitbucket, Gitlab
- local
  - Your machine

## Common git commands

```bash
git init

git clone
git pull
git fetch
git checkout

git add
git commit
git push
```

## Review questions

1. What is Git?

   - A) A web hosting service for version control
   - B) A distributed version control system
   - C) A programming language
   - D) A type of computer virus

2. Which command creates a new Git repository locally?

   - A) git init
   - B) git clone
   - C) git commit
   - D) git branch

3. How do you switch to a different branch in Git?

   - A) git branch [branch-name]
   - B) git checkout [branch-name]
   - C) git merge [branch-name]
   - D) git switch [branch-name]

# Lecture 5: States

Essentially, React is a **state management library**.

It is important to understand the lifecycle of React component.

To create a state in React, we need to use the `useState` hook.

## What is a state in React

> What's the difference between a state and a plain old Javascript variable?

A state is a container that holds a value and when that value changes, it causes React to re-render.

State is an object that represents the parts of the app that can change. Each component can maintain its own state, which allows your app to respond to user inputs, server responses, and other events by rendering dynamic content.

States are managed within the component that affects how that component behaves or looks. It's local and encapsulated to the component, meaning it cannot be accessed or modified outside the component directly.

## Reconciliation

### Virtual DOM vs the DOM

React keeps a light-weight copy of the Document Object Model (DOM) in memory. This copy is called the Virtual DOM.

When the value of a state changes, the components that depends on the state will be re-rendered.

This process is called reconciliation.

# Multiple Choice Questions on React States and Components

1. What is the primary difference between a state in React and a plain old JavaScript variable?

   - A) There is no difference; states in React are just JavaScript variables.
   - B) A state in React is a persistent storage mechanism that exists across different browser sessions.
   - C) A state in React is an object that, when changed, causes the component to re-render, unlike a regular JavaScript variable that does not cause re-rendering.
   - D) React states are globally available across all components, whereas JavaScript variables are scoped locally within functions.

2. What does the reconciliation process in React involve?

   - A) Comparing the current state and props to determine if a component should re-render.
   - B) Updating the browser's URL without reloading the page.
   - C) Comparing the Virtual DOM with the actual DOM and updating the actual DOM with the minimum number of operations required.
   - D) Merging the state of two components into a single state.

3. How is a React component different from a regular JavaScript function?

   - A) A React component cannot return anything, while a JavaScript function can return values or objects.
   - B) A React component is specifically designed to work with the DOM, whereas a JavaScript function is not.
   - C) A React component can return JSX and can utilize React hooks to manage state and side effects, unlike a regular JavaScript function.
   - D) There is no difference; React components are just JavaScript functions with a different name.

# Lecture 6: React Component

> What is the difference between a Javascript function and a React component?

A React component is a Javascript function that returns JSX.

A hook in React is a Javascript function that uses React states.

# Lecture 7: State and component lifecycle

## What is State?

It's an object managed within the component that affects how that component behaves or looks. It's local and encapsulated to the component, meaning it cannot be accessed or modified outside the component directly.
https://prod.liveshare.vsengsaas.visualstudio.com/join?4CAFF932C948B858018FA170EAE9E77EDAB6

## Managing State

React provides a useState hook in functional components to define and manipulate state. It gives you two things: the current state and a function to update it.

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## Component Lifecycle

The lifecycle of a React component can be defined as the series of events that happen from the moment the component is first rendered on the DOM (Mounting) to the time it is destroyed (Unmounting). Understanding these lifecycle phases is crucial for effective and efficient React applications.

## Mounting

This is the phase when the component is being created and inserted into the DOM. Key lifecycle methods include constructor(), static getDerivedStateFromProps(), render(), and componentDidMount().

## Updating

Occurs when a component is being re-rendered as a result of changes to either its props or state. Key methods include static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), and componentDidUpdate().

## Unmounting

This is the final phase of a component's lifecycle as it's being removed from the DOM. The key method here is componentWillUnmount(), which is called before the component is destroyed.

## React Hooks for Lifecycle Management

In functional components, React Hooks like `useEffect` allow you to perform side effects in your components, essentially enabling you to handle lifecycle events. The `useEffect` hook can replicate the behavior of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods.

```javascript
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (count % 2 === 0) {
      console.log("Even number");
    }

    return () => {
      console.log("Component is unmounting");
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

# Lecture 8: Variable and scope

Scope is visibility.

```javascript
const rdj = "Robert Downey Jnr";

const myHouse = () => {
  const me = "Sad old me";
  console.log("Everyone in my house knows", rdj);
  console.log("Everyone in my house knows", me);
};

console.log("Everyone in the world knows", rdj);
console.log("No one in the world knows", me); // Throws ReferenceError
```

# Lecture 9: Passing by reference or passing by value

## Primitives

- `string`
- `number`
  - Other languages may have more discrete number types, e.g., int, float, double
- `boolean`
- `null`
- `undefined`

```javascript
// Instantiation
let age;

// This is the same as
// let age = undefined;

// Initialisation
age = 42;

// Instantiation and initialisation
let age = 42;
```

## Non-primitives (complex data types)

- Object (JSON)
- Classes
- Functions

```javascript
const name = "Robert";
const age = 42;
const gender = "M";

const person = {
  name: "Robert",
  age: 42,
  gender: "M",
  address: {
    streetName: "Fake",
    streetType: "St",
    suburb: "Neverland",
  },
};

console.log(person.name); // "Robert"
console.log(person.age); // 42
console.log(person.address.streetName); // "Fake"
```

## Exercise

Create a person object with attributes about you:

- name, first name, last name
- age,
- address

## Tin

```javascript
const tin = {
  name: "Tin",
  age: 20,
  gender: "M",
  attributes: {
    handedness: "R",
    iq: "500",
  },
};
```

## Mei

```javascript
const mei = {
  name: "Mei",
  age: 32,
  address: { streetName: "Sesame", streetType: "St", suburb: "Garbage" },
};
```

## Andrew

```javascript
const Andrew = {
  name: "Andrew";
  age: 31;
  address {
    streetName: "Jull";
    streetType: "Parade";
    suburb: "Ringwood";
  }
};
```

## Terminologies

Function: method, callback, predicate,
Variable: constant, argument, parameter

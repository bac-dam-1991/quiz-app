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

## Reconciliation

### Virtual DOM vs the DOM

React keeps a light-weight copy of the Document Object Model (DOM) in memory. This copy is called the Virtual DOM.

When the value of a state changes, the components that depends on the state will be re-rendered.

This process is called reconciliation.

# Lecture 6: React Component

> What is the difference between a Javascript function and a React component?

A React component is a Javascript function that returns JSX.

A hook in React is a Javascript function that uses React states.

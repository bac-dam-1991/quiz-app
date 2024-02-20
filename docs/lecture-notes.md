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

// Passing by value vs Passing by reference

let _firstName = "John";

const person = {
  firstName: _firstName,
};

console.log("_firstName", _firstName);
console.log("person.firstName", person.firstName);

_firstName = "Jane";

console.log("_firstName", _firstName);
console.log("person.firstName", person.firstName); // 1 x John, 2 x Jane

// 1. Answer what will be printed to console
// 2. Visually draw what happens
const person02 = person01;

person02.name = "Jack";
console.log("person.name", person.name);
console.log("person02.name", person02.name);

//* Variables - const
// Use const by default
// Use let only if the value needs to change

console.log('%cVariables - const', 'color: #1e3a8a; font-weight: bold;');

const firstName = 'Gael';
const lastName = 'Pompa Ciambrino';
const age = 2;
const fullName = `${firstName} ${lastName}`;
const isAwesome = true;

// const declarations must be initialized
// Error! Uncaught SyntaxError: Missing initializer in const declaration
// const nursery;

// Can't be reassigned
// Error! Uncaught TypeError: Assignment to constant variable.
// firstName = "Daniel";
// lastName = 'Pompa Pareja';
// fullName = `${name} ${lastName}`;
// age = 49;

console.log({ firstName, lastName, age, isAwesome });
console.log({ fullName });

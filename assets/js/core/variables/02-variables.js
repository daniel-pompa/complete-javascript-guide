//* Variables - let
// Use let if you need to reassign a variable

console.log('%cVariables - let', 'color: #1e3a8a; font-weight: bold;');

// Can be declared and initialized at the same time
let firstName = 'Daniel';
let lastName = 'Pompa Pareja';
let age = 49;

console.log({ firstName, lastName, age });

// Can be declared without initialized
let fullName;
let isAwesome;

// Reassignment of variables
firstName = 'Gael';
lastName = 'Pompa Ciambrino';
age = 2;
isAwesome = true;
fullName = `${firstName} ${lastName}`;

console.log({ firstName, lastName, age, isAwesome });
console.log({ fullName });

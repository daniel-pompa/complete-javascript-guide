//* Variables - var
// Don't use var
// The use of var in JavaScript is not recommended
// Use var only if you need to support older browsers
// Use let or const instead

console.log('%cVariables - var', 'color: #1e3a8a; font-weight: bold;');

// Can be declared multiple times
var firstName = 'Daniel';
var firstName = 'Gael';

// Prints an object with the value of the variable
console.log({ firstName }); // Prints {firstName: 'Gael'}

// Can be declared and initialized at the same time
var firstName = 'Daniel';
var lastName = 'Pompa Pareja';
var age = 49;

// Prints an object with the values of the variables
console.log({ firstName, lastName, age });

// Can be declared without initialized
var fullName;
var isAwesome;

// Reassignment of variables
firstName = 'Gael';
lastName = 'Pompa Ciambrino';
age = 2;
isAwesome = true;
fullName = `${firstName} ${lastName}`;

console.log({ firstName, lastName, age, isAwesome });
console.log({ fullName });

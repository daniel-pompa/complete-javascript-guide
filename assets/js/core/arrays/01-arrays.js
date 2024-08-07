//* Arrays
// Arrays are ordered collections of elements in JavaScript
// The elements can be of any type: numbers, strings, objects, other arrays, etc.
// They can be accessed by their position in the array (0, 1, 2, 3, etc.)
// Arrays can be nested, allowing the creation of multidimensional arrays
// Arrays have built-in methods for manipulating elements
// Arrays are dynamic, meaning they can grow and shrink in size as needed
// Iteration over arrays can be done using loops or array methods like forEach

console.log('%cArrays', 'color: #1e3a8a; font-weight: bold;');

// Example array with a mixture of data types
const mixOfDataTypes = [
  'JavaScript',
  20,
  true,
  function () {},
  () => {},
  { firstName: 'Gael', lastName: 'Pompa Ciambrino', age: 2 },
  [1, 2, 3, 4],
  ['JavaScript', 'MongoDB', 'Express.js', 'React', 'Node.js'],
];

console.log({ mixOfDataTypes });

// Get the length of the array
console.log(`Array length: ${mixOfDataTypes.length}`);

// Access an array element by its position
console.log(`Element at index 3: ${mixOfDataTypes[3]}`);

// Access a property of an object in the array
console.log(`First name: ${mixOfDataTypes[5].firstName}`);
console.log(`Age: ${mixOfDataTypes[5]['age']}`);

// Get an element of an array within another array
console.log(`Element of the nested array: ${mixOfDataTypes[7][2]}`);

// Arrays can also contain other arrays
const nestedArray = [
  'string',
  20,
  true,
  [1, 2, 3],
  ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  [null, undefined, function () {}, { firstName: 'Gael', age: 2 }],
];

console.log({ nestedArray });

// Arrays can also contain functions
const functionsArray = [
  function () {
    console.log('Hello from a function inside an array');
  },
  () => {
    console.log('Hello from an arrow function inside an array');
  },
];

console.log({ functionsArray });

// Access a function in an array
functionsArray.forEach(func => func()); // Execute all functions

// Arrays can also contain objects
const objectsArray = [
  { fullName: 'Daniel Pompa Pareja', age: 49 },
  { fullName: 'Emma Ciambrino Baz', age: 42 },
  {
    fullName: 'Gael Pompa Ciambrino',
    age: 2,
    sayHello: function () {
      console.log(`Hello, my name is ${this.fullName}`);
    },
  },
];

console.log({ objectsArray });

// Access an object in an array
console.log(objectsArray[0]);
console.log(objectsArray[1]);
console.log(objectsArray[2]);

// Access a property of an object in an array
console.log('Full name:', objectsArray[1].fullName);
console.log('Age:', objectsArray[1].age);

// Access a method of an object in an array
objectsArray[2].sayHello();

// Update the method of an object in an array
objectsArray[2].sayHello = function () {
  console.log(`Hello, my name is ${this.fullName} and I'm ${this.age} years old`);
};

objectsArray[2].sayHello();

// Update the method of an object in an array with a parameter
objectsArray[2].sayHello = function (greeting) {
  console.log(`${greeting}, my name is ${this.fullName} and I'm ${this.age} years old`);
};

objectsArray[2].sayHello('Hello');

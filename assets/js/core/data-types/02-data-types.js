//* Non-primitive Data Types
// Object: a collection of key-value pairs
// Array: a collection of values
// Function: a block of code that performs a specific task
// Set: a collection of unique values
// WeakSet: a collection of objects; not iterable and held weakly
// Map: a collection of key-value pairs that can be accessed by their keys
// WeakMap: a collection of key-value pairs with object keys, held weakly

console.log('%cNon-primitive data types', 'color: #1e3a8a; font-weight: bold;');

// Object
const mySon = {
  firstName: 'Gael',
  lastName: 'Pompa Ciambrino',
  age: 2,
  birthday: new Date('2022-03-22').toLocaleDateString(),
  isAwesome: true,
  friends: ['Noa', 'Luca', 'Leo'],
};

console.log({ mySon }, typeof mySon);

// Array
const friends = mySon.friends;
console.log({ friends }, typeof friends);

// Function
const helloWorld = () => {
  console.log('Hola mundo!');
};

console.log({ helloWorld }, typeof helloWorld);

helloWorld();

// Set
const languages = new Set(['JavaScript', 'TypeScript']);
console.log({ languages }, typeof languages);
console.log('languages.size:', languages.size);
console.log('languages.has("JavaScript")', languages.has('JavaScript'));

const numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
console.log({ numbers }, typeof numbers);

const noDuplicates = new Set(numbers);
console.log({ noDuplicates }, typeof noDuplicates);

// WeakSet
const myWife = {
  firstName: 'Emma',
  lastName: 'Ciambrino Baz',
  age: 42,
};

const weakSet = new WeakSet([myWife, mySon]);
console.log(weakSet);
console.log({ weakSet }, typeof weakSet);
console.log('weakSet.has(mySon)', weakSet.has(mySon));
console.log('weakSet.has(myWife)', weakSet.has(myWife));

// Map
const map = new Map([
  ['firstName', 'Daniel'],
  ['lastName', 'Pompa Pareja'],
  ['age', 49],
]);

console.log({ map }, typeof map);
console.log('map.size:', map.size);
console.log('map.has("firstName")', map.has('lastName'));

// WeakMap
const weakMap = new WeakMap([
  [mySon, 'son'],
  [myWife, 'wife'],
]);

console.log(weakMap);
console.log({ weakMap }, typeof weakMap);
console.log('weakMap.has(mySon)', weakMap.has(mySon));
console.log('weakMap.has(myWife)', weakMap.has(myWife));

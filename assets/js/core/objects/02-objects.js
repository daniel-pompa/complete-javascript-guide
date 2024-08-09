console.log('%cObject Manipulation', 'color: #1e3a8a; font-weight: bold;');

// Object examples
const product = {
  name: 'PC Basic',
  price: 800,
  available: false,
};

console.log('Initial Product:', product);

// Modify the properties of an object
product.name = 'PC Workstation';
product.price = 2500;
product.available = true;

// Add properties to an object
product.image = 'image.jpg';

console.log('Modified Product:', product);

// Delete properties of an object
delete product.image;

console.log('Product after deleting the image:', product);

// Object that can't be modified
const person = Object.freeze({
  firstName: 'Daniel',
  lastName: 'Pompa Pareja',
  age: 49,
  email: 'daniel.pompa@example.com',
});

console.log('Initial Person:', person);

// Determines if an object is frozen
const isFrozen = Object.isFrozen(person);

console.log('Is the person object frozen:', isFrozen);

// Modify properties of a frozen object (should not be possible)
person.firstName = 'Óscar'; // No effect
person.age = 44; // No effect
person.email = 'oscar.pompa@example.com'; // No effect
person.phone = '648 11 99 47'; // No effect
delete person.email; // No effect

console.log('Person after attempting modifications:', person);

// Returns an array containing all property names
const properties = Object.getOwnPropertyNames(person);

console.log('Properties of the person object:', properties);

// Returns an array containing all values corresponding to properties
const values = Object.values(person);

console.log('Values of the properties of the person object:', values);

// Returns an array containing all the [key, value] pairs of the properties
const keyValue = Object.entries(person);

console.log('Key-Value pairs of the person object:', keyValue);

// Object that allows modification of existing properties, but not deletion or addition of new properties
const student = {
  firstName: 'Carmen',
  lastName: 'Ciambrino Baz',
  age: 37,
  email: 'carmen.ciambrino@example.com',
};

console.log('Initial Student:', student);

Object.seal(student);

// Determines if an object is sealed
const isSealed = Object.isSealed(student);

console.log('Is the student object sealed:', isSealed);

// Modify properties of a sealed object (should be possible)
student.firstName = 'Emma'; // Possible
student.age = 42; // Possible
student.email = 'emma.ciambrino@example.com'; // Possible

// Add and delete property of a sealed object (should not be possible)
student.phone = '669 97 90 20'; // No effect
delete student.email; // No effect

console.log('Student after attempting modifications:', student);

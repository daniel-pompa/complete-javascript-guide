//* Classes
// Classes are a blueprint for creating objects.
// They encapsulate data and methods to work with that data.
// In JavaScript, classes are built on prototypes but offer a more intuitive syntax and semantics.

console.log('%cClass usage example', 'color: #1e3a8a; font-weight: bold;');

/**
 * Person class
 * @class
 * @classdesc A class to represent a person.
 * @extends {Object}
 * @see {@link Object}
 */
class Person {
  /**
   * Creates an instance of Person.
   * @constructor
   * @param {string} firstName - The first name of the person.
   * @param {string} lastName - The last name of the person.
   * @param {number} age - The age of the person.
   * @example
   * const person = new Person('John', 'Doe', 30);
   */
  constructor(firstName, lastName, age) {
    /** @type {string} - The first name of the person. */
    this.firstName = firstName;

    /** @type {string} - The last name of the person. */
    this.lastName = lastName;

    /** @type {number} - The age of the person. */
    this.age = age;
  }

  /** Method to greet someone. */
  sayHello() {
    console.log(`Hello, my name is ${this.firstName} and I am ${this.age} years old.`);
  }

  /**
   * Method to get the full name of the person.
   * @returns {string} The full name of the person.
   */
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create new instances of the Person class
const daniel = new Person('Daniel', 'Pompa Pareja', 49);
console.log(daniel);
daniel.sayHello();

const emma = new Person('Emma', 'Ciambrino Baz', 42);
console.log(emma);
emma.sayHello();

const gael = new Person('Gael', 'Pompa Ciambrino', 2);
console.log(gael);
gael.sayHello();

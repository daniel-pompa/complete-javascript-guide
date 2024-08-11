import { validateEmail } from '../../utils/validate-email.js';

//* Getters and Setters
// Getters and setters are methods that allow you to access and modify object properties.
// They can include validation and other logic to control how properties are set and retrieved.

console.log('%cClasses with Getters and Setters', 'color: #1e3a8a; font-weight: bold;');

/**
 * Person class
 * @class
 * @classdesc A class to represent a person with validation on certain properties.
 * @extends {Object}
 * @see {@link Object}
 */
class Person {
  /**
   * Creates an instance of Person.
   * @constructor
   * @param {string} [firstName=''] - The first name of the person.
   * @param {string} [lastName=''] - The last name of the person.
   * @param {number} [age=0] - The age of the person.
   * @param {string} [email=''] - The email of the person.
   * @example
   * const person = new Person('John', 'Doe', 30, 'john.doe@example.com');
   */
  constructor(firstName = '', lastName = '', age = 0, email = '') {
    this._firstName = firstName;
    this._lastName = lastName;
    this.age = age; // Uses setter to validate age
    this.email = email; // Uses setter to validate email
  }

  /**
   * Gets the first name of the person.
   * @returns {string} The first name of the person.
   */
  get firstName() {
    return this._firstName;
  }

  /**
   * Sets the first name of the person.
   * @param {string} value - The new first name.
   */
  set firstName(value) {
    this._firstName = value;
  }

  /**
   * Gets the last name of the person.
   * @returns {string} The last name of the person.
   */
  get lastName() {
    return this._lastName;
  }

  /**
   * Sets the last name of the person.
   * @param {string} value - The new last name.
   */
  set lastName(value) {
    this._lastName = value;
  }

  /**
   * Gets the age of the person.
   * @returns {number} The age of the person.
   */
  get age() {
    return this._age;
  }

  /**
   * Sets the age of the person with validation.
   * @param {number} value - The new age.
   * @throws {Error} If the age is not a number between 0 and 100.
   */
  set age(value) {
    if (typeof value !== 'number' || value < 0 || value > 100) {
      throw new Error('Age must be a number between 0 and 100.');
    }
    this._age = value;
  }

  /**
   * Gets the email of the person.
   * @returns {string} The email of the person.
   */
  get email() {
    return this._email;
  }

  /**
   * Sets the email of the person with validation.
   * @param {string} value - The new email.
   * @throws {Error} If the email is not valid.
   */
  set email(value) {
    this._email = validateEmail(value);
  }

  /** Greets the person. */
  greet() {
    console.log(`Hello, my name is ${this.firstName}`);
  }

  /** Displays all data of the person. */
  showData() {
    console.log(`- First name: ${this.firstName}`);
    console.log(`- Last name: ${this.lastName}`);
    console.log(`- Age: ${this.age}`);
    console.log(`- Email: ${this.email}`);
  }
}

// Create a new instance of Person with initial values
const person = new Person('Daniel', 'Pompa Pareja', 49);

// Call the greet method on the person object
person.greet();

// Display initial data
console.log('%cInitial data using getters', 'color: #1e3a8a; font-weight: bold;');
person.showData();

// Use setters to update the person's email
person.email = 'daniel.pompa@example.com';

// Display updated data
console.log('%cUpdated data using setter', 'color: #1e3a8a; font-weight: bold;');
person.showData();

// Example of setting an invalid age
try {
  person.age = 120; // This will throw an error
} catch (error) {
  console.error('Error updating age:', error);
}

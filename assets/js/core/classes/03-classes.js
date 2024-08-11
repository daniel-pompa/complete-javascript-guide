import { validateEmail } from '../../utils/validate-email.js';

console.log(
  '%cClasses with Static Properties and Methods',
  'color: #1e3a8a; font-weight: bold;'
);

/**
 * Class representing a person.
 * @class
 * @classdesc A class to represent a person with validation on properties and static methods.
 */
class Person {
  // Static property to keep track of the number of instances
  static numberOfInstances = 0;

  /**
   * Gets the number of instances of the Person class.
   * @static
   * @returns {number} The number of instances of the Person class.
   */
  static get instances() {
    return Person.numberOfInstances;
  }

  /**
   * Prints the key-value pairs of an object to the console.
   * For array values, it joins the elements with a comma and a space.
   * If a value is undefined, it prints 'Not available'.
   * @static
   * @method
   * @param {Object} object - The object to print.
   * @example
   * Person.printObjectToConsole({ name: 'John', age: 30 });
   */
  static printObjectToConsole(object) {
    // Iterate over the keys of the object
    for (let key in object) {
      // Check if the object has the current key as its own property
      if (object.hasOwnProperty(key)) {
        // Get the value of the current key
        const value = object[key];
        // Determine the value to display
        const displayValue = Array.isArray(value)
          ? value.join(', ')
          : value !== undefined
          ? value
          : 'Not available';
        // Print the key-value pair to the console
        console.log(`${key}: ${displayValue}`);
      }
    }
  }

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
    this.age = age; // Uses setter for validation
    this.email = email; // Uses setter for validation
    Person.numberOfInstances++;
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
   * Gets the e-mail of the person.
   * @returns {string} The e-mail of the person.
   */
  get email() {
    return this._email;
  }

  /**
   * Sets the e-mail of the person.
   * @param {string} value - The new e-mail.
   * @throws {Error} Throws an error if the email is not valid.
   */
  set email(value) {
    this._email = validateEmail(value);
  }

  /** Logs a greeting message including the person's first name. */
  greet() {
    console.log(`Hello, my name is ${this.firstName}`);
  }

  /** Displays all data of the person. */
  displayData() {
    console.log(`First name: ${this.firstName}`);
    console.log(`Last name: ${this.lastName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
  }
}

// Create new instances of the Person class
const daniel = new Person('Daniel', 'Pompa Pareja', 49, 'daniel.pompa@example.com');
console.log(
  `%cPerson instance: ${daniel.firstName}`,
  'color: #1e40af; font-weight: bold;'
);
daniel.displayData();

const emma = new Person('Emma', 'Ciambrino Baz', 42, 'emma.ciambrino@example.com');
console.log(`%cPerson instance: ${emma.firstName}`, 'color: #1e3a8a; font-weight: bold;');
emma.displayData();

const gael = new Person('Gael', 'Pompa Ciambrino', 2);
console.log(`%cPerson instance: ${gael.firstName}`, 'color: #1e3a8a; font-weight: bold;');
gael.displayData();

// Print the number of instances of the Person class
console.log('%cNumber of instances', 'color: #1e3a8a; font-weight: bold;');
console.log('Number of Person class instances:', Person.numberOfInstances);
console.log('Number of Person class instances:', Person.instances);

console.log('%cStatic method', 'color: #1e3a8a; font-weight: bold;');

Person.printObjectToConsole(gael);

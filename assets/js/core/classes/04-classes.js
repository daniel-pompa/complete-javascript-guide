import { validateEmail } from '../../utils/validate-email.js';

//* Inheritance
// Inheritance allows one class to inherit properties and methods from another class, promoting code reuse and organization.
// Inheritance is a fundamental concept in object-oriented programming.

console.log('%cClasses with Inheritance', 'color: #1e3a8a; font-weight: bold;');

/**
 * Class representing a person.
 * @class
 * @classdesc A class to represent a person with validation on properties.
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
   * @param {string|null} [email=''] - The email of the person.
   * @example
   * const person = new Person('John', 'Doe', 30);
   */
  constructor(firstName = '', lastName = '', age = 0, email = '') {
    this._firstName = firstName;
    this._lastName = lastName;
    this.age = age; // Use setter for validation
    this.email = email; // Use setter for validation
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
   * @returns {string|null} The e-mail of the person.
   */
  get email() {
    return this._email;
  }

  /**
   * Sets the e-mail of the person.
   * @param {string} value - The new e-mail.
   * @throws {Error} If the e-mail is not a valid email address.
   */
  set email(value) {
    this._email = validateEmail(value);
  }

  /** Logs a greeting message including the person's first name. */
  sayHello() {
    console.log(`Hello, my name is ${this.firstName}`);
  }

  /** Logs all data of the person. */
  displayData() {
    console.log(`First name: ${this.firstName}`);
    console.log(`Last name: ${this.lastName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
  }
}

/**
 * Class representing a developer, extending Person.
 * @class
 * @classdesc A class to represent a developer with additional properties for profession and technologies.
 * @extends {Person}
 * @see {@link Person}
 */
class Developer extends Person {
  /**
   * Creates an instance of Developer.
   * @constructor
   * @param {string} [firstName=''] - The first name of the developer.
   * @param {string} [lastName=''] - The last name of the developer.
   * @param {number} [age=0] - The age of the developer.
   * @param {string|null} [email=''] - The email of the developer.
   * @param {string} [profession=''] - The profession of the developer.
   * @param {string[]} [languages=[]] - The programming languages of the developer.
   * @param {string[]} [frontEndTechnologies=[]] - The front-end technologies of the developer.
   * @param {string[]} [backEndTechnologies=[]] - The back-end technologies of the developer.
   * @example
   * const developer = new Developer(
   *   'John', 'Doe', 30,
   *   'john.doe@example.com',
   *   'Software Developer',
   *   ['JavaScript', 'Python'],
   *   ['React', 'Vue'],
   *   ['Node.js', 'Express', 'MongoDB']
   * );
   */
  constructor(
    firstName = '',
    lastName = '',
    age = 0,
    email = '',
    profession = '',
    languages = [],
    frontEndTechnologies = [],
    backEndTechnologies = []
  ) {
    super(firstName, lastName, age, email);
    this._profession = profession;
    this.languages = languages; // Uses setter to validate programming languages
    this.frontEndTechnologies = frontEndTechnologies; // Uses setter to validate front-end technologies
    this.backEndTechnologies = backEndTechnologies; // Uses setter to validate back-end technologies
  }

  /**
   * Gets the profession of the developer.
   * @returns {string} The profession of the developer.
   */
  get profession() {
    return this._profession;
  }

  /**
   * Sets the profession of the developer.
   * @param {string} value - The new profession.
   */
  set profession(value) {
    this._profession = value;
  }

  /**
   * Gets the languages of the developer.
   * @returns {string[]} The programming languages of the developer.
   */
  get languages() {
    return this._languages;
  }

  /**
   * Sets the programming languages of the developer.
   * @param {string[]} value - The programming languages of the developer.
   * @throws {Error} If value is not an array.
   */
  set languages(value) {
    if (!Array.isArray(value)) {
      throw new Error('Programming languages must be an array.');
    }
    this._languages = value;
  }

  /**
   * Gets the front-end technologies of the developer.
   * @returns {string[]} The front-end technologies of the developer.
   */
  get frontEndTechnologies() {
    return this._frontEndTechnologies;
  }

  /**
   * Sets the front-end technologies of the developer.
   * @param {string[]} value - The front-end technologies of the developer.
   * @throws {Error} If value is not an array.
   */
  set frontEndTechnologies(value) {
    if (!Array.isArray(value)) {
      throw new Error('Front-end technologies must be an array.');
    }
    this._frontEndTechnologies = value;
  }

  /**
   * Gets the back-end technologies of the developer.
   * @returns {string[]} The back-end technologies of the developer.
   */
  get backEndTechnologies() {
    return this._backEndTechnologies;
  }

  /**
   * Sets the back-end technologies of the developer.
   * @param {string[]} value - The back-end technologies of the developer.
   * @throws {Error} If value is not an array.
   */
  set backEndTechnologies(value) {
    if (!Array.isArray(value)) {
      throw new Error('Back-end technologies must be an array.');
    }
    this._backEndTechnologies = value;
  }

  /** Logs a greeting message including the developer's profession. */
  sayHello() {
    console.log(`Hello, my name is ${this.firstName}. I am a ${this.profession}`);
  }

  /** Logs all data of the developer, including inherited and additional properties. */
  displayData() {
    super.displayData();
    console.log(`Profession: ${this._profession}`);

    /**
     * Displays the label and the elements of an array separated by commas.
     * @param {string} label - The label of the array.
     * @param {Array} array - The array to be logged.
     */
    const printArray = (label, array) => console.log(`${label}: ${array.join(', ')}`);

    printArray('Programming Languages', this._languages);
    printArray('Front-End Technologies', this._frontEndTechnologies);
    printArray('Back-End Technologies', this._backEndTechnologies);
  }
}

// Create a new instance of the Person class
const person = new Person('Emma', 'Ciambrino Baz', 42, 'emma.ciambrino@example.com');

console.log('%cPerson class - Superclass', 'color: #1e3a8a; font-weight: bold;');

person.sayHello();
person.displayData();

// Create a new instance of the Developer class
const developer = new Developer(
  'Daniel',
  'Pompa Pareja',
  49,
  'daniel.pompa@example.com',
  'MERN Stack Developer',
  ['JavaScript', 'TypeScript'],
  ['HTML5', 'CSS3', 'React.js', 'Redux', 'Bootstrap', 'Tailwind CSS'],
  ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM']
);

console.log('%cDeveloper class - Subclass', 'color: #1e3a8a; font-weight: bold;');

developer.sayHello();
developer.displayData();

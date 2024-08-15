import { validateEmail } from '../../../utils/validate-email.js';

/**
 * Class representing a person.
 * @class
 * @classdesc A class to represent a person with validation on properties.
 */
export class Person {
  #firstName;
  #lastName;
  #age;
  #email;
  #profession;

  /**
   * Creates an instance of Person.
   * @constructor
   * @param {string} [firstName=''] - The person's first name.
   * @param {string} [lastName=''] - The person's last name.
   * @param {number} [age=0] - The person's age.
   * @param {string|null} [email=''] - The person's e-mail.
   * @param {string} [profession=''] - The person's profession.
   */
  constructor(firstName = '', lastName = '', age = 0, email = '', profession = '') {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.age = age;
    this.email = email;
    this.#profession = profession;
  }

  // Getters and setters
  get firstName() {
    return this.#firstName;
  }
  set firstName(value) {
    this.#firstName = value;
  }

  get lastName() {
    return this.#lastName;
  }
  set lastName(value) {
    this.#lastName = value;
  }

  get age() {
    return this.#age;
  }
  set age(value) {
    if (typeof value !== 'number' || value < 0 || value > 100) {
      throw new Error('The age must be a number between 0 and 100.');
    }
    this.#age = value;
  }

  get email() {
    return this.#email;
  }
  set email(value) {
    this.#email = validateEmail(value);
  }

  get profession() {
    return this.#profession;
  }
  set profession(value) {
    this.#profession = value;
  }

  /** Greets and prints the person's name and profession. */
  sayHello() {
    console.log(`Hello, my name is ${this.firstName}. I'm ${this.profession}.`);
  }

  /** Displays the person's data. */
  displayData() {
    console.log(`%c${this.profession} data`, 'color: #1e3a8a; font-weight: bold;');
    console.log(`Name: ${this.firstName}`);
    console.log(`Last name: ${this.lastName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email address: ${this.email}`);
  }
}

/**
 * Class representing a developer.
 * @class
 * @extends Person
 */
export class Developer extends Person {
  #languages;

  /**
   * Creates an instance of Developer.
   * @param {string} firstName - The developer's first name.
   * @param {string} lastName - The developer's last name.
   * @param {number} age - The developer's age.
   * @param {string} email - The developer's email.
   * @param {string} [profession='Developer'] - The developer's profession.
   * @param {string[]} languages - The developer's programming languages.
   */
  constructor(firstName, lastName, age, email, profession = 'Developer', languages = []) {
    super(firstName, lastName, age, email, profession);
    this.languages = languages; // Uses setter to validate languages.
  }

  get languages() {
    return this.#languages;
  }
  set languages(value) {
    if (!Array.isArray(value)) {
      throw new Error('Programming languages must be an array.');
    }
    this.#languages = value;
  }

  /** Displays the developer's data. */
  displayData() {
    super.displayData();
    console.log('Programming languages:', this.languages.join(', '));
  }

  /**
   * Adds a new programming language.
   * @param {string} language - The new programming language.
   */
  addLanguage(language) {
    if (typeof language !== 'string' || language.trim() === '') {
      throw new Error('The programming language must be a non-empty string.');
    }
    this.languages = [...this.languages, language];
  }
}

/**
 * Class representing a Back-End developer.
 * @class
 * @extends Developer
 */
export class BackEndDeveloper extends Developer {
  #backEndTechnologies;

  /**
   * Creates an instance of BackEndDeveloper.
   * @param {string} firstName - The developer's first name.
   * @param {string} lastName - The developer's last name.
   * @param {number} age - The developer's age.
   * @param {string} email - The developer's email.
   * @param {string[]} languages - The developer's programming languages.
   * @param {string[]} backEndTechnologies - The back-end technologies.
   */
  constructor(firstName, lastName, age, email, languages = [], backEndTechnologies = []) {
    super(firstName, lastName, age, email, 'Back-End Developer', languages);
    this.backEndTechnologies = backEndTechnologies; // Uses setter to validate back-end technologies.
  }

  get backEndTechnologies() {
    return this.#backEndTechnologies;
  }
  set backEndTechnologies(value) {
    if (!Array.isArray(value)) {
      throw new Error('Back-End technologies should be an array.');
    }
    this.#backEndTechnologies = value;
  }

  /** Displays the Back-End developer's data. */
  displayData() {
    super.displayData();
    console.log('Back-End technologies:', this.backEndTechnologies.join(', '));
  }
}

/**
 * Class representing a Front-End developer.
 * @class
 * @extends Developer
 */
export class FrontEndDeveloper extends Developer {
  #frontEndTechnologies;

  /**
   * Creates an instance of FrontEndDeveloper.
   * @param {string} firstName - The developer's first name.
   * @param {string} lastName - The developer's last name.
   * @param {number} age - The developer's age.
   * @param {string} email - The developer's email.
   * @param {string[]} languages - The developer's programming languages.
   * @param {string[]} frontEndTechnologies - The front-end technologies.
   */
  constructor(
    firstName,
    lastName,
    age,
    email,
    languages = [],
    frontEndTechnologies = []
  ) {
    super(firstName, lastName, age, email, 'Front-End Developer', languages);
    this.frontEndTechnologies = frontEndTechnologies; // Uses setter to validate front-end technologies.
  }

  get frontEndTechnologies() {
    return this.#frontEndTechnologies;
  }
  set frontEndTechnologies(value) {
    if (!Array.isArray(value)) {
      throw new Error('Front-End technologies must be an array.');
    }
    this.#frontEndTechnologies = value;
  }

  /** Displays the Front-End developer's data. */
  displayData() {
    super.displayData();
    console.log('Front-End technologies:', this.frontEndTechnologies.join(', '));
  }
}

/**
 * Class representing a Full-Stack developer.
 * @class
 * @extends Developer
 */
export class FullStackDeveloper extends Developer {
  #frontEndTechnologies;
  #backEndTechnologies;

  /**
   * Creates an instance of FullStackDeveloper.
   * @param {string} firstName - The developer's first name.
   * @param {string} lastName - The developer's last name.
   * @param {number} age - The developer's age.
   * @param {string} email - The developer's email.
   * @param {string[]} languages - The developer's programming languages.
   * @param {string[]} frontEndTechnologies - The front-end technologies.
   * @param {string[]} backEndTechnologies - The back-end technologies.
   */
  constructor(
    firstName,
    lastName,
    age,
    email,
    languages = [],
    frontEndTechnologies = [],
    backEndTechnologies = []
  ) {
    super(firstName, lastName, age, email, 'Full-Stack Developer', languages);
    this.frontEndTechnologies = frontEndTechnologies; // Uses setter to validate front-end technologies.
    this.backEndTechnologies = backEndTechnologies; // Uses setter to validate back-end technologies.
  }

  get frontEndTechnologies() {
    return this.#frontEndTechnologies;
  }
  set frontEndTechnologies(value) {
    if (!Array.isArray(value)) {
      throw new Error('Front-End technologies must be an array.');
    }
    this.#frontEndTechnologies = value;
  }

  get backEndTechnologies() {
    return this.#backEndTechnologies;
  }
  set backEndTechnologies(value) {
    if (!Array.isArray(value)) {
      throw new Error('Back-End technologies should be an array.');
    }
    this.#backEndTechnologies = value;
  }

  /** Displays the Full-Stack developer's data. */
  displayData() {
    super.displayData();
    console.log('Front-End technologies:', this.frontEndTechnologies.join(', '));
    console.log('Back-End technologies:', this.backEndTechnologies.join(', '));
  }
}

/**
 * Class representing a QA engineer.
 * @class
 * @extends Person
 */
export class QAEngineer extends Person {
  #qaTools;

  /**
   * Creates an instance of QAEngineer.
   * @param {string} firstName - The QA engineer's first name.
   * @param {string} lastName - The QA engineer's last name.
   * @param {number} age - The QA engineer's age.
   * @param {string} email - The QA engineer's email.
   * @param {string[]} qaTools - The QA tools.
   */
  constructor(firstName, lastName, age, email, qaTools = []) {
    super(firstName, lastName, age, email, 'QA Engineer');
    this.qaTools = qaTools; // Uses setter to validate QA tools.
  }

  get qaTools() {
    return this.#qaTools;
  }
  set qaTools(value) {
    if (!Array.isArray(value)) {
      throw new Error('QA tools must be an array.');
    }
    this.#qaTools = value;
  }

  /** Displays the QA engineer's data. */
  displayData() {
    super.displayData();
    console.log('QA Tools:', this.qaTools.join(', '));
  }
}

/**
 * Class representing a Manager.
 * @class
 * @extends Person
 */
export class Manager extends Person {
  #department;

  /**
   * Creates an instance of Manager.
   * @param {string} firstName - The manager's first name.
   * @param {string} lastName - The manager's last name.
   * @param {number} age - The manager's age.
   * @param {string} email - The manager's email.
   * @param {string} department - The department managed.
   */
  constructor(firstName, lastName, age, email, department) {
    super(firstName, lastName, age, email, 'Development Manager');
    this.department = department; // Uses setter to validate department.
  }

  get department() {
    return this.#department;
  }
  set department(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('The department must be a non-empty string.');
    }
    this.#department = value;
  }

  /** Displays the manager's data. */
  displayData() {
    super.displayData();
    console.log('Department:', this.department);
  }
}

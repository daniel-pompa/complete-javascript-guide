import { validateEmail } from '../../utils/validate-email.js';

console.log(
  '%cClasses with inheritance and polymorphism',
  'color: #1e3a8a; font-weight: bold;'
);

/**
 * Class representing a person.
 * @class
 * @classdesc A class to represent a person with validation on properties.
 * @extends {Object}
 * @see {@link Object}
 */
class Person {
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
   * @example
   * const person = new Person('John', 'Doe', 30);
   */
  constructor(firstName = '', lastName = '', age = 0, email = '', profession = '') {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.age = age;
    this.email = email;
    this.#profession = profession;
  }

  /**
   * Gets the person's first name.
   * @returns {string} The first name.
   */
  get firstName() {
    return this.#firstName;
  }

  /**
   * Sets the person's first name.
   * @param {string} value - The new first name.
   */
  set firstName(value) {
    this.#firstName = value;
  }

  /**
   * Gets the person's last name.
   * @returns {string} The last name.
   */
  get lastName() {
    return this.#lastName;
  }

  /**
   * Sets the person's last name.
   * @param {string} value - The new last name.
   */
  set lastName(value) {
    this.#lastName = value;
  }

  /**
   * Gets the person's age.
   * @returns {number} The age.
   */
  get age() {
    return this.#age;
  }

  /**
   * Sets the person's age.
   * @param {number} value - The new age.
   * @throws {Error} Throws an error if the age is not a number between 0 and 100.
   */
  set age(value) {
    if (typeof value !== 'number' || value < 0 || value > 100) {
      throw new Error('The age must be a number between 0 and 100.');
    }
    this.#age = value;
  }

  /**
   * Gets the person's e-mail.
   * @returns {string} The e-mail.
   */
  get email() {
    return this.#email;
  }

  /**
   * Sets the person's e-mail.
   * @param {string} value - The new e-mail.
   * @throws {Error} Throws an error if the email is not valid.
   */
  set email(value) {
    this.#email = validateEmail(value);
  }

  /**
   * Gets the person's profession.
   * @returns {string} The profession.
   */
  get profession() {
    return this.#profession;
  }

  /**
   * Sets the person's profession.
   * @param {string} value - The new profession.
   */
  set profession(value) {
    this.#profession = value;
  }

  /** Greets and prints the person's name and profession. */
  sayHello() {
    console.log(`Hello, my name is ${this.firstName}. I'm ${this.profession}.`);
  }

  /** Displays the person's data. */
  displayData() {
    console.log(`%c${this.profession} data:`, 'color: #1e3a8a; font-weight: bold;');
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
 * @classdesc A class to represent a developer with additional properties for profession and technologies.
 * @see {@link Person}
 * @example
 * const developer = new Developer('John', 'Doe', 30, 'john.doe@example.com', 'Developer', ['JavaScript', 'Python']);
 */
class Developer extends Person {
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

  /**
   * Gets the programming languages.
   * @returns {string[]} The programming languages.
   */
  get languages() {
    return this.#languages;
  }

  /**
   * Sets the programming languages.
   * @param {string[]} value - The new programming languages.
   * @throws {Error} Throws an error if the languages is not an array.
   */
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
   * @throws {Error} Throws an error if the language is not a non-empty string.
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
 * @classdesc A class to represent a Back-End developer with additional properties for back-end technologies.
 * @extends Developer
 * @see {@link Developer}
 * @example
 * const backEndDeveloper = new BackEndDeveloper(
 *  'John', 'Doe',
 *  30,
 *  'john.doe@example.com',
 *  ['JavaScript', 'Python'],
 *  ['Node.js', 'Express']
 * );
 */
class BackEndDeveloper extends Developer {
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

  /**
   * Gets the back-end technologies.
   * @returns {string[]} The back-end technologies.
   */
  get backEndTechnologies() {
    return this.#backEndTechnologies;
  }

  /**
   * Sets the back-end technologies.
   * @param {string[]} value - The new back-end technologies.
   * @throws {Error} Throws an error if the back-end technologies is not an array.
   */
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
 * @classdesc A class to represent a Front-End developer with additional properties for front-end technologies.
 * @extends Developer
 * @see {@link Developer}
 * @example
 * const frontEndDeveloper = new FrontEndDeveloper(
 *  'John', 'Doe',
 *  30,
 *  'john.doe@example.com',
 *  ['JavaScript', 'TypeScript'],
 *  ['HTML5', 'CSS3', 'React', 'Bootstrap', 'Tailwind CSS']
 * );
 *
 */
class FrontEndDeveloper extends Developer {
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

  // Getters

  /**
   * Gets the front-end technologies.
   * @returns {string[]} The front-end technologies.
   */
  get frontEndTechnologies() {
    return this.#frontEndTechnologies;
  }

  /**
   * Sets the front-end technologies.
   * @param {string[]} value - The new front-end technologies.
   * @throws {Error} Throws an error if the front-end technologies is not an array.
   */
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
 * @classdesc A class to represent a Full-Stack developer with additional properties for front-end and back-end technologies.
 * @extends Developer
 * @see {@link Developer}
 * @example
 * const fullStackDeveloper = new FullStackDeveloper(
 *  'John', 'Doe',
 *  30,
 *  'john.doe@example.com',
 *  ['JavaScript', 'TypeScript'],
 *  ['HTML5', 'CSS3', 'React', 'Redux', 'Bootstrap', 'Tailwind CSS'],
 *  ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM']
 * );
 */
class FullStackDeveloper extends Developer {
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

  /**
   * Gets the front-end technologies.
   * @returns {string[]} The front-end technologies.
   */
  get frontEndTechnologies() {
    return this.#frontEndTechnologies;
  }

  /**
   * Sets the front-end technologies.
   * @param {string[]} value - The new front-end technologies.
   * @throws {Error} Throws an error if the front-end technologies is not an array.
   */
  set frontEndTechnologies(value) {
    if (!Array.isArray(value)) {
      throw new Error('Front-End technologies must be an array.');
    }
    this.#frontEndTechnologies = value;
  }

  /**
   * Gets the back-end technologies.
   * @returns {string[]} The back-end technologies.
   */
  get backEndTechnologies() {
    return this.#backEndTechnologies;
  }

  /**
   * Sets the back-end technologies.
   * @param {string[]} value - The new back-end technologies.
   * @throws {Error} Throws an error if the back-end technologies is not an array.
   */
  set backEndTechnologies(value) {
    if (!Array.isArray(value)) {
      throw new Error('Back-End technologies should be an array.');
    }
    this.#backEndTechnologies = value;
  }

  /** Displays the Full-Stack developer's data. */
  displayData() {
    super.displayData();

    /**
     * Displays the label and the elements of an array separated by commas.
     * @param {string} label - The label of the array.
     * @param {Array} array - The array to be logged.
     */
    const printArray = (label, array) => console.log(`${label}: ${array.join(', ')}`);

    printArray('Front-End technologies', this.frontEndTechnologies);
    printArray('Back-End technologies', this.backEndTechnologies);
  }
}

/**
 * Class representing a QA engineer.
 * @class
 * @classdesc A class to represent a QA engineer with additional properties for tools.
 * @extends Person
 * @see {@link Person}
 * @example
 * const qaEngineer = new QAEngineer(
 *  'John', 'Doe',
 *  30,
 *  'john.doe@example.com',
 *  ['Selenium', 'Jenkins', 'TestRail', 'Jira', 'Appium']
 * );
 */
class QAEngineer extends Person {
  #tools;

  /**
   * Creates an instance of QAEngineer.
   * @param {string} firstName - The QA engineer's first name.
   * @param {string} lastName - The QA engineer's last name.
   * @param {number} age - The QA engineer's age.
   * @param {string} email - The QA engineer's email.
   * @param {string[]} tools - The QA engineer's tools.
   */
  constructor(firstName, lastName, age, email, tools = []) {
    super(firstName, lastName, age, email, 'QA Engineer'); // Set profession directly
    this.tools = tools; // Uses setter to validate tools.
  }

  /**
   * Gets the QA engineer's tools.
   * @returns {string[]} The QA engineer's tools.
   */
  get tools() {
    return this.#tools;
  }

  /**
   * Sets the QA engineer's tools.
   * @param {string[]} value - The new tools.
   * @throws {Error} Throws an error if the tools is not an array.
   */
  set tools(value) {
    if (!Array.isArray(value)) {
      throw new Error('QA tools should be an array.');
    }
    this.#tools = value;
  }

  /** Displays the QA engineer's data. */
  displayData() {
    super.displayData();
    console.log('QA Tools:', this.tools.join(', '));
  }
}

/**
 * Class representing a Manager.
 * @class
 * @classdesc A class to represent a manager with additional properties for department.
 * @extends Person
 * @see {@link Person}
 * @example
 * const manager = new Manager('John', 'Doe', 30, 'john.doe@example.com', 'Development Team');
 */
class Manager extends Person {
  #department;

  /**
   * Creates an instance of Manager.
   * @param {string} firstName - The manager's first name.
   * @param {string} lastName - The manager's last name.
   * @param {number} age - The manager's age.
   * @param {string} email - The manager's email.
   * @param {string} department - The department the manager oversees.
   */
  constructor(firstName, lastName, age, email, department = '') {
    super(firstName, lastName, age, email, "Head of the development team's");
    this.#department = department;
  }

  /**
   * Gets the department.
   * @returns {string} The department.
   */
  get department() {
    return this.#department;
  }

  /**
   * Sets the department.
   * @param {string} value - The new department.
   */
  set department(value) {
    this.#department = value;
  }

  /** Displays the Manager's data. */
  displayData() {
    console.log(
      `%cManager's details in ${this.department}`,
      'color: #1e3a8a; font-weight: bold;'
    );
    super.displayData();
    console.log(`Department: ${this.department}`);
  }
}

// Create instances of each class
const backEndDeveloper = new BackEndDeveloper(
  'Razvan',
  'Ilies',
  37,
  'razvan.ilies@company.com',
  ['JavaScript', 'TypeScript', 'Python'],
  ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'PostgreSQL']
);

const frontEndDeveloper = new FrontEndDeveloper(
  'Carmen',
  'Ciambrino Baz',
  36,
  'carmen.ciambrino@company.com',
  ['JavaScript', 'TypeScript'],
  ['HTML5', 'CSS3', 'React.js', 'Redux', 'Bootstrap', 'Tailwind CSS']
);

const fullStackDeveloper = new FullStackDeveloper(
  'Daniel',
  'Pompa Pareja',
  49,
  'daniel.pompa@company.com',
  ['JavaScript', 'TypeScript'],
  ['HTML5', 'CSS3', 'React.js', 'Redux', 'Bootstrap', 'Tailwind CSS'],
  ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM']
);

const qaEngineer = new QAEngineer(
  'Adrián',
  'Cividanes Fernández',
  30,
  'adrian.cividanes@company.com',
  ['Selenium', 'Jenkins', 'TestRail', 'Jira', 'Appium']
);

const manager = new Manager(
  'Emma',
  'Ciambrino Baz',
  42,
  'emma.ciambrino@company.com',
  'Development'
);

// Display information
const employees = [
  backEndDeveloper,
  frontEndDeveloper,
  fullStackDeveloper,
  qaEngineer,
  manager,
];

employees.forEach(employee => {
  employee.sayHello();
  employee.displayData();
  console.log('\n');
});

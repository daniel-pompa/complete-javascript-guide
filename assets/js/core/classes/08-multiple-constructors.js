console.log('%cMultiple Constructors', 'color: #1e3a8a; font-weight: bold;');

/**
 * Represents a person.
 * @class
 * @classdesc A class to represent a person.
 */
class Person {
  /**
   * Creates an instance of Person.
   * @param {string} [firstName=''] - The person's first name.
   * @param {string} [lastName=''] - The person's last name.
   * @param {number} [age=0] - The person's age.
   */
  constructor(firstName = '', lastName = '', age = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  /**
   * Creates a new Person instance using individual parameters.
   * @param {string} firstName - The person's first name.
   * @param {string} lastName - The person's last name.
   * @param {number} age - The person's age.
   * @returns {Person} The new Person instance.
   */
  static createPerson(firstName, lastName, age) {
    return new Person(firstName, lastName, age);
  }

  /**
   * Creates a new Person instance using an object.
   * @param {Object} person - An object containing the person's data.
   * @param {string} person.firstName - The person's first name.
   * @param {string} person.lastName - The person's last name.
   * @param {number} person.age - The person's age.
   * @returns {Person} The new Person instance.
   */
  static createPersonByObject({ firstName, lastName, age }) {
    return new Person(firstName, lastName, age);
  }

  /**
   * Returns information about the person as a string.
   * @returns {string} The person's information.
   */
  getInfo() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`;
  }
}

// Create a new Person instance with specific details and display info
const person1 = new Person('Daniel', 'Pompa Pareja', 49);
console.log(
  '%cInstance created with the constructor',
  'color: #1e3a8a; font-weight: bold;'
);
console.log(person1.getInfo());

// Create another new Person instance with different details using a static method
const person2 = Person.createPerson('Emma', 'Ciambrino Baz', 42);
console.log(
  '%cInstance created with a static method',
  'color: #1e3a8a; font-weight: bold;'
);
console.log(person2.getInfo());

// Create an object with details and use the static method to create a new Person instance
const gael = {
  firstName: 'Gael',
  lastName: 'Pompa Ciambrino',
  age: 2,
};

const person3 = Person.createPersonByObject(gael);
console.log(
  '%cInstance created with another static method',
  'color: #1e3a8a; font-weight: bold;'
);
console.log(person3.getInfo());

//* Singleton Pattern
// A singleton ensures that only one instance of a class exists throughout the application.
// If another instance is attempted to be created, the existing instance is returned.
// This pattern is useful when exactly one object is needed to coordinate actions or states across a system.

console.log('%cSingleton Pattern', 'color: #1e3a8a; font-weight: bold;');

/**
 * Singleton class that ensures only one instance exists.
 * @class
 */
class Singleton {
  /**
   * Holds the single instance of the class.
   * @type {Singleton|null}
   * @private
   */
  static #instance = null;

  /**
   * Creates an instance of Singleton.
   * @param {string} name - The name associated with the Singleton instance.
   */
  constructor(name = '') {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }

    Singleton.#instance = this;
    this.name = name;
  }

  /**
   * Gets the single instance of the Singleton class.
   * @param {string} [name=''] - The name to set for the Singleton instance if it's being created.
   * @returns {Singleton} The single instance of the Singleton class.
   */
  static getInstance(name = '') {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton(name);
    }
    return Singleton.#instance;
  }
}

// Create instances of the Singleton class
const instance1 = Singleton.getInstance('Gael');
const instance2 = Singleton.getInstance('Daniel');
const instance3 = Singleton.getInstance('Emma');

// Test the instances
console.log('Name in instance 1 is:', instance1.name); // Expected: Gael
console.log('Name in instance 2 is:', instance2.name); // Expected: Gael
console.log('Name in instance 3 is:', instance3.name); // Expected: Gael

// Check if all instances are the same
const areInstancesSame = instance1 === instance2 && instance2 === instance3;

console.log('Are all instances the same?', areInstancesSame); // Expected: true

// Verify that all instances point to the same object
console.log('Instance 1:', instance1);
console.log('Instance 2:', instance2);
console.log('Instance 3:', instance3);

if (areInstancesSame) {
  console.log('All instances are the same object.');
} else {
  console.log('Instances are not the same object.');
}

// Expected output:
// Name in instance 1 is: Gael
// Name in instance 2 is: Gael
// Name in instance 3 is: Gael
// Are all instances the same? true
// Instance 1: Singleton { name: 'Gael' }
// Instance 2: Singleton { name: 'Gael' }
// Instance 3: Singleton { name: 'Gael' }
// All instances are the same object.

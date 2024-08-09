//* Objects
// Objects are collections of properties and methods
// Properties are variables attached to the object
// Methods are functions attached to the object
// Objects are key-value pairs
// The key is the name of the property
// The value is the value of the property

console.log('%cObject Creation', 'color: #1e3a8a; font-weight: bold;');

// Object literal
const gael = {
  firstName: 'Gael',
  lastName: 'Pompa Ciambrino',
  age: 2,
  friends: ['Lucía', 'Noa', 'Luca', 'Leo'],
};

console.log({ gael });

// Object constructor
const emma = new Object();

// Adding properties to the object with dot notation
emma.firstName = 'Emma';
emma.lastName = 'Ciambrino Baz';
emma.age = 42;
emma.email = 'emma.ciambrino@example.com';
emma.address = {
  street: 'False Street 20',
  city: 'Madrid',
};
emma.sons = [gael];

console.log({ emma });

// Adding Methods to Object
const daniel = {
  firstName: 'Daniel',
  lastName: 'Pompa Pareja',
  age: 49,
  email: 'daniel.pompa@example.com',
  address: {
    street: 'False Street 20',
    city: 'Madrid',
  },
  profession: 'MERN stack Developer',
  technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  available: true,
  sons: [gael],

  //* Methods
  // Greeting method of person object
  greeting() {
    console.log(`Hello, my name is ${this.firstName}`);
  },

  // Info method of person object
  displayFullInfo() {
    const { firstName, lastName, age, email, address, sons, profession } = this;

    // Basic profile information
    console.log(`Full name: ${firstName} ${lastName}`);
    console.log(`Age: ${age} years old`);
    console.log(`Email: ${email}`);

    // Address information (only if available)
    console.log(
      `Address: ${address ? `${address.street}, ${address.city}` : 'Not available'}`
    );

    // Children's information (only if available)
    if (sons.length) {
      console.log(`Children (${sons.length}):`);
      sons.forEach(({ firstName, lastName, age }) => {
        console.log(
          `- Name: ${firstName} ${lastName}, Age: ${
            age !== undefined ? `${age} ${age === 1 ? 'year' : 'years'}` : 'Not available'
          }`
        );
      });
    } else {
      console.log('Children: No children');
    }

    // Profession information
    console.log(`Profession: ${profession}`);
  },

  // Method for printing technologies associated with the person object
  printTechnologies() {
    console.log('Technologies:', this.technologies.join(' - '));
  },
};

console.log({ daniel });

daniel.greeting();
daniel.displayFullInfo();
daniel.printTechnologies();

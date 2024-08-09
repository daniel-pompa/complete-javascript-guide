console.log('%cAdvanced object usage', 'color: #1e3a8a; font-weight: bold;');

// Define an object for representing a Full Stack Developer
const fullStackDeveloper = {
  firstName: 'Daniel',
  lastName: 'Pompa Pareja',
  age: 49,
  technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],

  // Method to display information about the developer
  displayInfo: () => {
    Object.keys(fullStackDeveloper).forEach(key => {
      const value = fullStackDeveloper[key];
      if (typeof value !== 'function') {
        if (key === 'technologies') {
          console.log(`Technologies: ${value.join(' - ')}`); // Format technologies as a string
        } else if (key === 'age') {
          console.log(`Age: ${value} years`);
        } else {
          console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
        }
      }
    });
  },

  // Method to add a new technology to the developer's stack
  addTechnology: technology => {
    const { technologies, firstName } = fullStackDeveloper;
    if (!technologies.includes(technology)) {
      technologies.push(technology);
      console.log(`${technology} has been added to ${firstName}'s tech stack`);
    } else {
      console.log(`${firstName} is already familiar with ${technology}`);
    }
  },

  // Method to check if developer is proficient in the MERN stack
  isMernStackProficient: () => {
    const { technologies, firstName } = fullStackDeveloper;
    const requiredTechnologies = ['MongoDB', 'Express.js', 'React', 'Node.js'];
    for (let tech of requiredTechnologies) {
      if (!technologies.includes(tech)) {
        console.log(`${firstName} is not proficient in ${tech}`);
        return false;
      }
    }
    console.log(`${firstName} is proficient in the MERN stack`);
    return true;
  },
};

// Define an object for additional developer information
const additionalInfo = {
  experienceYears: 2,
  company: 'Tech Solutions',
  location: 'Madrid',
};

// Merge additional developer information into fullStackDeveloper using object spread operator
const developerWithAdditionalInfo = {
  ...fullStackDeveloper,
  ...additionalInfo,
  technologies: fullStackDeveloper.technologies.join(' - '), // Format technologies as a string
};

// Method to display additional information about the developer
const displayAdditionalInfo = () => {
  Object.entries(developerWithAdditionalInfo).forEach(([key, value]) => {
    if (typeof value !== 'function') {
      const formattedValue =
        key === 'experienceYears' || key === 'age'
          ? `${value} years`
          : key === 'technologies'
          ? value
          : value;

      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${formattedValue}`);
    }
  });
};

// Demonstrate usage
console.log('%cDeveloper information', 'color: #1d4ed8; font-weight: bold;');
fullStackDeveloper.displayInfo();

console.log('%cAdd a new technology', 'color: #1d4ed8; font-weight: bold;');
fullStackDeveloper.addTechnology('GraphQL');
fullStackDeveloper.addTechnology('React');

// Update the technologies in developerWithAdditionalInfo
developerWithAdditionalInfo.technologies = fullStackDeveloper.technologies.join(' - ');

console.log('%cCheck MERN stack proficiency', 'color: #1d4ed8; font-weight: bold;');
fullStackDeveloper.isMernStackProficient();

console.log(
  '%cDeveloper with additional information',
  'color: #1d4ed8; font-weight: bold;'
);
displayAdditionalInfo();

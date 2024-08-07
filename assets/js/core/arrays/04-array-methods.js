console.log('%cArray Methods in JavaScript (ES6+)', 'color: #1e3a8a; font-weight: bold;');

// Define an array of technologies
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
  'Mongoose ODM',
];

// Define an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Print the technologies and numbers arrays
console.log('Technologies:', technologies);
console.log('Numbers:', numbers);

// Print a heading for array iteration section
console.log('%cArray Iteration', 'color: #1e3a8a; font-weight: bold;');

// Iterate over each element of technologies array and log its index and value
technologies.forEach((element, index) => console.log(`[${index}] ${element}`));

// Print a heading for array filtering section
console.log('%cArray Filtering', 'color: #1e3a8a; font-weight: bold;');

// Create a new array with technologies that contain the letter 'a'
const technologiesWithA = technologies.filter(element => element.includes('a'));
console.log('Technologies that contain "a":', technologiesWithA);

// Create a new array with numbers that are greater than 25
const filteredNumbers = numbers.filter(number => number > 25);
console.log('Numbers greater than 25:', filteredNumbers);

// Print a heading for array mapping section
console.log('%cArray Mapping', 'color: #1e3a8a; font-weight: bold;');

// Create a new array with each technology name in uppercase
const uppercaseTechnologies = technologies.map(tech => tech.toUpperCase());
console.log('Technologies in uppercase:', uppercaseTechnologies);

// Create a new array with each number squared
const squaredNumbers = numbers.map(number => number ** 2);
console.log('Squared numbers:', squaredNumbers);

// Print a heading for array reducing section
console.log('%cArray Reducing', 'color: #1e3a8a; font-weight: bold;');

// Get the total length of all characters in the technologies array
const totalCharLength = technologies.reduce((total, tech) => total + tech.length, 0);
console.log('Total character length:', totalCharLength);

// Get the sum of all numbers in the numbers array
const sumOfNumbers = numbers.reduce((sum, number) => sum + number, 0);
console.log('Sum of numbers:', sumOfNumbers);

// Print a heading for array finding section
console.log('%cArray Finding', 'color: #1e3a8a; font-weight: bold;');

// Find the first technology that starts with 'J'
const techStartingWithJ = technologies.find(tech => tech.startsWith('J'));
console.log('First technology starting with "J":', techStartingWithJ);

// Find the index of the first number greater than 30
const indexOfNumberGreaterThan30 = numbers.findIndex(number => number > 30);
console.log('Index of first number greater than 30:', indexOfNumberGreaterThan30);

// Print a heading for array every and some section
console.log('%cArray Every and Some', 'color: #1e3a8a; font-weight: bold;');

// Check if every technology includes the letter 'e'
const everyTechHasE = technologies.every(tech => tech.includes('e'));
console.log('Every technology has an "e":', everyTechHasE);

// Check if some numbers are even
const someNumbersAreEven = numbers.some(number => number % 2 === 0);
console.log('Some numbers are even:', someNumbersAreEven);

// Print a heading for array sorting section
console.log('%cArray Sorting', 'color: #1e3a8a; font-weight: bold;');

// Sort technologies alphabetically
const sortedTechnologies = [...technologies].sort();
console.log('Sorted technologies:', sortedTechnologies);

// Sort numbers in descending order
const sortedNumbersDescending = [...numbers].sort((a, b) => b - a);
console.log('Numbers sorted in descending order:', sortedNumbersDescending);

// Print a heading for array slicing and splicing section
console.log('%cArray Slicing and Splicing', 'color: #1e3a8a; font-weight: bold;');

// Slice the first 3 technologies
const firstThreeTechnologies = technologies.slice(0, 3);
console.log('First three technologies:', firstThreeTechnologies);

// Remove and insert elements using splice
const splicedTechnologies = [...technologies];
splicedTechnologies.splice(2, 2, 'GraphQL', 'Next.js');
console.log('Technologies after splice:', splicedTechnologies);

//* Advanced: Combining Array Methods
// Print a heading for advanced array method combinations section
console.log('%cAdvanced: Combining Array Methods', 'color: #1e3a8a; font-weight: bold;');

// Filter numbers greater than 20, then map to their double values, and finally reduce to get their sum
const combinedResult = numbers
  .filter(number => number > 20)
  .map(number => number * 2)
  .reduce((sum, number) => sum + number, 0);
console.log('Combined result (Filter > 20, Map * 2, Reduce Sum):', combinedResult);

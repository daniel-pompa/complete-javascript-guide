console.log('%cArray Manipulation', 'color: #1e3a8a; font-weight: bold;');

// Define an array of technologies
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'MongoDB',
  'Express.js',
  'React',
  'Node.js',
];

// Add elements to the beginning and end of the array using the spread operator
const arrayWithTypeScriptAtStart = ['TypeScript', ...technologies];
const arrayWithTypeScriptAtEnd = [...technologies, 'TypeScript'];

// Print the new arrays
console.log('Array with TypeScript at the beginning:', arrayWithTypeScriptAtStart);
console.log('Array with TypeScript at the end:', arrayWithTypeScriptAtEnd);

// Delete elements from the array using the filter method
// Removing 'HTML5' from the array
const filteredArray = technologies.filter(technology => technology !== 'HTML5');
console.log('Filtered array without HTML5:', filteredArray);

// Replace array elements using the map method
// Replacing 'HTML5' with 'TypeScript'
const updatedArray = technologies.map(tech => (tech === 'HTML5' ? 'TypeScript' : tech));
console.log('Updated array with TypeScript instead of HTML5:', updatedArray);

console.log('%cArray Destructuring', 'color: #1e3a8a; font-weight: bold;');

// Destructure specific array elements into individual variables
const [, , , mongodb, express, react, node] = technologies;

// Print the original array and the variables assigned using destructuring
console.log('Original array:', technologies);
console.log('Destructured technologies:', { mongodb, express, react, node });

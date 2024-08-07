console.log('%cArray Operations', 'color: #1e3a8a; font-weight: bold;');

// Array of programming languages
const languages = ['JavaScript', 'TypeScript'];
console.log('Programming languages:', languages);

// Array of front-end technologies
const frontEnd = ['HTML5', 'CSS3', 'React', 'Redux', 'Tailwind CSS'];
console.log('Front-End technologies:', frontEnd);

// Array of back-end technologies
const backEnd = ['MongoDB', 'Node.js', 'Express.js', 'Mongoose ODM'];
console.log('Back-End technologies:', backEnd);

// Concatenate arrays into a new array
const technologies = [...languages, ...frontEnd, ...backEnd];
console.log('All technologies:', technologies);

// Get the length of the array
console.log('Technologies array length:', technologies.length);

// Get the first and last elements of the array
console.log('First technology:', technologies[0]);
console.log('Last technology:', technologies[technologies.length - 1]);

// Get the index of an element in the array
console.log('Index of React:', technologies.indexOf('React'));

// Remove the first and last elements of the array
console.log('Removed first element:', technologies.shift());
console.log('Removed last element:', technologies.pop());

// Add elements to the beginning and end of the array
console.log('New length after unshift:', technologies.unshift('JavaScript'));
console.log('New length after push:', technologies.push('Mongoose ODM'));

// Get a slice of the array from index 0 to index 2 (exclusive)
console.log('Slice of technologies from index 0 to 2:', technologies.slice(0, 2));

// Modify the original array
// Replace the element at index 0 in the 'languages' array with 'Java'
languages.splice(0, 1, 'Java');
console.log('Programming languages after replacement:', languages);

// Insert the element 'JavaScript' at the beginning of the 'languages' array
languages.splice(0, 0, 'JavaScript');
console.log('Programming languages after insertion:', languages);

// Filter the technologies array to include only the elements of the MERN stack
const filteredMern = technologies.filter(tech =>
  ['MongoDB', 'Express.js', 'React', 'Node.js'].includes(tech)
);

// Sort the filtered array according to the desired MERN stack order
const sortedMern = filteredMern.sort((a, b) => {
  const order = ['MongoDB', 'Express.js', 'React', 'Node.js'];
  return order.indexOf(a) - order.indexOf(b);
});

console.log('Filtered MERN stack technologies:', sortedMern);

// Reverse the array
console.log('Reversed MERN stack:', sortedMern.reverse());

// Sort the array in ascending and descending order
console.log(
  'Ascending sorted MERN stack:',
  sortedMern.sort((a, b) => a.localeCompare(b))
);
console.log(
  'Descending sorted MERN stack:',
  sortedMern.sort((a, b) => b.localeCompare(a))
);

// Find the position of an element in the array
console.log('Last index of Vue (not found):', sortedMern.lastIndexOf('Vue')); // -1
console.log('Last index of React:', sortedMern.lastIndexOf('React')); // 0

// Check if an element exists in the array
console.log('Includes Vue:', sortedMern.includes('Vue')); // false
console.log('Includes React:', sortedMern.includes('React')); // true

// Flatten nested arrays
const newArray = [frontEnd, ['Angular', 'Vue']];
console.log('Flattened array:', newArray.flat());

// Check if a value is an array
console.log('Is newArray an array?', Array.isArray(newArray)); // true
console.log('Is "Hello" an array?', Array.isArray('Hello')); // false

// Convert an array to a string
console.log('Convert an array to a string:');
console.log(sortedMern.toString());
console.log(sortedMern.join(' - '));

//* Useful array methods that do not modify the original array
// https://doesitmutate.xyz/

console.log(
  '%cArray methods that do not modify the original array',
  'color: #1e3a8a; font-weight: bold;'
);

// Function to check if a number is prime
const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Define an array of technologies
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'MongoDB',
  'Express',
  'React',
  'Node.js',
];

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 20, 30, 40, 99];

// Print the technologies and numbers arrays
console.log('Technologies:', technologies);
console.log('Numbers:', numbers);

// Print a heading for array iteration section
console.log('%cArray Iteration', 'color: #1e3a8a; font-weight: bold;');

// Iterate over each element of technologies array and log its index and value
technologies.forEach((element, index) => console.log(`[${index}] ${element}`));

// Print a heading for array filtering section
console.log('%cArray Filtering', 'color: #1e3a8a; font-weight: bold;');

// Create a new array with technologies that are not 'HTML5' and 'CSS3'
const filteredTechnologies = technologies.filter(
  element => element !== 'HTML5' && element !== 'CSS3'
);
console.log('Filtered technologies:', filteredTechnologies);

// Create a new array with numbers that are greater than 15
const filteredNumbers = numbers.filter(number => number > 15);
console.log('Numbers greater than 15:', filteredNumbers);

// Filter and print all prime numbers and find their sum
const primeNumbers = numbers.filter(isPrime);
console.log('Prime numbers found:', primeNumbers);

// Print a heading for array mapping section
console.log('%cArray Mapping', 'color: #1e3a8a; font-weight: bold;');

// Create a new array by adding 5 to each element of numbers
const addedNumbers = numbers.map(number => number + 5);
console.log('Added 5:', addedNumbers);

// Create a new array by subtracting 5 from each element of numbers
const subtractedNumbers = numbers.map(number => number - 5);
console.log('Subtracted 5:', subtractedNumbers);

// Create a new array by multiplying each element of numbers by 20
const multipliedNumbers = numbers.map(number => number * 20);
console.log('Multiplied by 20:', multipliedNumbers);

// Create a new array by dividing each element of numbers by 2
const dividedNumbers = numbers.map(number => number / 2);
console.log('Divided by 2:', dividedNumbers);

// Print a heading for array reducing section
console.log('%cArray Reducing', 'color: #1e3a8a; font-weight: bold;');

// Reduce to find the maximum number
const maxNumber = numbers.reduce(
  (max, current) => (current > max ? current : max),
  numbers[0]
);
console.log('Maximum number:', maxNumber);

// Get the sum of numbers array
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum:', sum);

// Get the product of numbers array
const product = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log('Product:', product);

// Get the total length of all characters in technologies array
const totalCharacters = technologies.reduce(
  (accumulator, current) => accumulator + current.length,
  0
);
console.log('Total characters:', totalCharacters);

// Print a heading for array every and some section
console.log('%cArray Every and Some', 'color: #1e3a8a; font-weight: bold;');

// Check if every element of numbers array is greater than 10
const greaterThanTen = numbers.every(number => number > 10);
console.log('Every number is greater than ten:', greaterThanTen);

// Check if every element of numbers array is less than 50
const lessThanFifty = numbers.every(number => number < 50);
console.log('Every number is less than fifty:', lessThanFifty);

// Check if there is at least one number greater than 15 in numbers array
const greaterThanFifteen = numbers.some(number => number > 15);
console.log('At least one number is greater than fifteen:', greaterThanFifteen);

// Check if some of the elements of numbers array are even numbers
const evenNumbers = numbers.some(number => number % 2 === 0);
console.log('Some numbers are even:', evenNumbers);

// Check if some of the elements of numbers array are odd numbers
const oddNumbers = numbers.some(number => number % 2 !== 0);
console.log('Some numbers are odd:', oddNumbers);

//* Advanced: Combining Array Methods
// Print a heading for advanced combination section
console.log('%cAdvanced: Combining Array Methods', 'color: #1e3a8a; font-weight: bold;');

// Filter numbers greater than 10, then map to their square values
const filteredAndSquared = numbers
  .filter(number => number > 10)
  .map(number => number ** 2);
console.log('Numbers greater than ten and squared:', filteredAndSquared);

// Chain map and reduce to get the sum of squared numbers
const sumOfSquares = numbers
  .map(number => number ** 2)
  .reduce((sum, current) => sum + current, 0);
console.log('Sum of squared numbers:', sumOfSquares);

// Chain filter and reduce to get the sum of prime numbers
const sumOfPrimes = numbers.filter(isPrime).reduce((sum, prime) => sum + prime, 0);
console.log('Sum of prime numbers found:', sumOfPrimes);

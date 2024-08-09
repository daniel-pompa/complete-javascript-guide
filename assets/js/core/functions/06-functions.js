console.log('%cComplete example on function usage', 'color: #1e3a8a; font-weight: bold;');

/**
 * Finds the maximum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The maximum of a and b.
 */
const maxOfTwoNumbers = (a, b) => (a > b ? a : b);

console.log('The greater number is:', maxOfTwoNumbers(49, 20));

/**
 * Finds the minimum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The minimum of a and b.
 */
const minOfTwoNumbers = (a, b) => (a < b ? a : b);

console.log('The smaller number is:', minOfTwoNumbers(49, 42));

// Array of words
const words = ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'];

/**
 * Finds the longest word in an array of words.
 * @param {string[]} array - The array of words.
 * @returns {string} The longest word in the array.
 */
const findLongestWord = array => {
  let longestWord = '';
  for (let word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log('The longest word is:', longestWord);
  return longestWord;
};

console.log('Array of words:', words);

findLongestWord(words);

// Array of numbers
const numbers = [49, 42, 1, 29, 31, 20, 23, 26, 2, 19];

console.log('Array of numbers:', numbers);

/**
 * Sums the numbers in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number} The sum of the numbers in the array.
 */
const sumArray = array => {
  if (array.length === 0) {
    return 0; // Return 0 if the array is empty
  }
  const sum = array.reduce((a, b) => a + b); // Use the reduce method to calculate the sum of the numbers
  return sum;
};

console.log(`The sum of the numbers in the array is:`, sumArray(numbers));

// Array of numbers for averaging
const averageNumbersArray = [3, 6, 7, 5, 10, 4, 1, 9];

console.log('Array of numbers for the average:', averageNumbersArray);

/**
 * Calculates the average of numbers in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number} The average of the numbers in the array.
 */
const averageNumbers = array => {
  if (array.length === 0) {
    return; // Return undefined if the array is empty
  }
  const sum = array.reduce((a, b) => a + b); // Calculate the sum of the numbers using the reduce method
  const average = sum / array.length; // Calculate the average by dividing the sum by the number of elements
  return Number(average.toFixed(1)); // Return the average with one decimal place
};

console.log(
  `The average of the numbers in the array is:`,
  averageNumbers(averageNumbersArray)
);

// Array of technologies
const technologies = [
  'JavaScript',
  'MongoDB',
  'Node.js',
  'Express.js',
  'React',
  'JavaScript',
];

console.log('Array of technologies:', technologies);

/**
 * Counts how many times a word appears in an array.
 * @param {string[]} array - The array of words.
 * @param {string} word - The word to count.
 * @returns {number} The number of times the word appears in the array.
 */
const howManyTimes = (array, word) => {
  let counter = 0; // Initialize a counter variable to keep track of the number of occurrences
  if (array.length === 0) {
    return false; // Return false if the array is empty
  }
  array.forEach(w => {
    // Iterate over each word in the array
    if (w === word) {
      counter++; // Increment the counter if the word matches the specified word
    }
  });
  console.log(`The word ${word} appears ${counter} times`); // Display the result
  return counter; // Return the number of times the word appears
};

howManyTimes(technologies, 'JavaScript');

// Array of project objects
const projects = [
  { name: 'Corporate website design', duration: 40, budget: 5000 },
  {
    name: 'Mobile application development',
    duration: 60,
    budget: 7000,
  },
  { name: 'Integration of the CRM system API', duration: 45, budget: 10000 },
  {
    name: 'Development of an e-commerce platform',
    duration: 120,
    budget: 30000,
  },
  { name: 'Data migration from systems', duration: 65, budget: 18000 },
];

console.log('Projects:', projects);

/**
 * Finds the project with the maximum budget.
 * @param {Object[]} projects - The array of project objects.
 * @returns {Object} The project with the maximum budget.
 */
const maxBudgetProject = projects => {
  let maxBudget = 0;
  let projectWithMaxBudget = null;
  projects.forEach(project => {
    if (project.budget > maxBudget) {
      maxBudget = project.budget;
      projectWithMaxBudget = project;
    }
  });
  console.log('The project with the highest budget is:', projectWithMaxBudget);
  return projectWithMaxBudget;
};

maxBudgetProject(projects);

/**
 * Calculates the average budget of all projects.
 * @param {Object[]} projects - The array of project objects.
 * @returns {number} The average budget of the projects.
 */
const averageBudget = projects => {
  const totalBudget = projects.reduce((sum, project) => sum + project.budget, 0);
  const average = totalBudget / projects.length;
  return Number(average.toFixed(2)); // Return the average budget with two decimal places.
};

console.log(`The average budget of the projects is:`, averageBudget(projects));

/**
 * Filters projects by minimum duration.
 * @param {Object[]} projects - The array of project objects.
 * @param {number} minDuration - The minimum duration to filter projects by.
 * @returns {Object[]} The filtered array of projects with duration greater than or equal to minDuration.
 */
const filterProjectsByDuration = (projects, minDuration) => {
  const filteredProjects = projects.filter(project => project.duration >= minDuration);
  console.log(
    `Projects with a minimum duration of ${minDuration} days:`,
    filteredProjects
  );
  return filteredProjects;
};

filterProjectsByDuration(projects, 60);

//* Fetch API
// Fetch API is a browser interface that allows HTTP requests.
// Fetch API is a promise-based API, so we can use .then() and .catch() to handle the response.
// We need to use .json() to convert the response into a JS object.

//* API used in this example
// https://jsonplaceholder.typicode.com/

// Define the URL of the API
const url = 'https://jsonplaceholder.typicode.com/users';

/**
 * Fetches data from the specified URL and logs each user object to the console.
 * @returns {Promise} A Promise that resolves when the data has been fetched and logged.
 */
const getData = () => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      result.forEach(user => {
        console.log(user);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

getData();

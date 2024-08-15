//* The Promise.race method
// Receives an array of promises.
// Returns a new promise that is resolved or rejected when the first promise in the array is resolved or rejected.
// This method is useful when you want to get the result of the first promise that is resolved or rejected.

import {
  getHeroById,
  getHeroByName,
  getHeroesByOwner,
} from '../modules/export/export.js';

/**
 * Returns a promise that resolves with a hero object if found, or rejects with an error message if not found.
 * @param {number} id - The id of the hero to retrieve.
 * @returns {Promise<Object>} A promise that resolves with the hero object if found, or rejects with an error message if not found.
 */
const getHeroByIdAsync = id => {
  return new Promise((resolve, reject) => {
    // Set a timeout to simulate an asynchronous operation
    setTimeout(() => {
      // Call the getHeroById function to retrieve a hero based their id
      const heroe = getHeroById(id);
      // If hero is found, resolve the promise with the hero object
      if (heroe) {
        resolve(heroe);
      } else {
        // If hero is not found, reject the promise with an error message
        reject(`There is no hero with id ${id}`);
      }
    }, 1000);
  });
};

/**
 * Returns a promise that resolves with a hero object if found, or rejects with an error message if not found.
 * @param {string} name - The name of the hero to retrieve.
 * @returns {Promise<Object>} A promise that resolves with the hero object if found, or rejects with an error message if not found.
 */
const getHeroByNameAsync = name => {
  return new Promise((resolve, reject) => {
    // Set a timeout to simulate an asynchronous operation
    setTimeout(() => {
      // Call the getHeroByName function to retrieve a hero based their name
      const heroe = getHeroByName(name);
      // If hero is found, resolve the promise with the hero object
      if (heroe) {
        resolve(heroe);
      } else {
        // If hero is not found, reject the promise with an error message
        reject(`No existe ningún héroe con el nombre ${name}`);
      }
    }, 500);
  });
};

/**
 * Returns a promise that resolves with an array of heroes that belong to the specified owner.
 * @param {string} owner - The owner of the heroes to retrieve.
 * @returns {Promise<Array>}
 */
const getHeroesByOwnerAsync = owner => {
  return new Promise((resolve, reject) => {
    // Set a timeout to simulate an asynchronous operation
    setTimeout(() => {
      // Call the getHeroesByOwner function to retrieve heroes based on owner
      const heroes = getHeroesByOwner(owner);
      // Check if heroes were found
      if (heroes.length > 0) {
        // Resolve the promise with the array of heroes if found
        resolve(heroes);
      } else {
        // Reject the promise with an error message if no heroes found
        reject(`There are no heroes with the owner: ${owner}`);
      }
    }, 2000);
  });
};

/**
 * Executes multiple asynchronous functions concurrently and returns the result of the first completed function.
 * @return {Promise}
 */
Promise.race([
  getHeroByIdAsync(1),
  getHeroByNameAsync('Batman'),
  getHeroesByOwnerAsync('Marvel'),
])
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Output: {id: 2, name: 'Batman', owner: 'DC'}

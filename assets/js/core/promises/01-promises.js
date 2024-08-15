//* Promises
// Promises are a way to work with asynchronous processes in a simpler way.
// A promise is an object that represents a value that may be available now, in the future, or never.
// A promise can be in one of three states: pending, fulfilled, or rejected.

import { getHeroById } from '../modules/export/export.js';

/**
 * Returns a promise that resolves with a hero object if found, or rejects with an error message if not found.
 * @param {number} id - The id of the hero to retrieve.
 * @returns {Promise<Object>}
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
        reject(`There is no hero with ID ${id}`);
      }
    }, 1000);
  });
};

// Calling the getHeroeByIdAsync function with id 3
getHeroByIdAsync(3)
  .then(heroe => console.log('Hero:', heroe))
  .catch(error => console.error(error));

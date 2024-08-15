//* The Promise.all method
// Receives an array of promises and returns a new promise that is resolved when all promises in the array are resolved.
// If any of the promises in the array is rejected, the Promise.all method returntes a rejecd promise.

import { getHeroById, getHeroesByOwner } from '../modules/export/export.js';

/**
 * Function that returns a promise to get a hero by id.
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
        reject(`There is no hero with id${id}`);
      }
    }, 1000);
  });
};

/**
 * Function that returns a promise to get heroes by owner
 * @param {string} owner - The owner of the heroes to retrieve
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
        resolve(heroes); // Resolve the promise with the array of heroes if found
      } else {
        reject(`No hay héroes con el propietario: ${owner}`); // Reject the promise with an error message if no heroes found
      }
    }, 1000);
  });
};

/**
 * Uses Promise.all to retrieve a hero by ID and heroes by owner.
 * Logs the found hero and heroes to the console.
 * Handles any errors that occur during the promise execution.
 */
Promise.all([getHeroByIdAsync(1), getHeroesByOwnerAsync('DC')])
  .then(([hero, heroes]) => {
    console.log(`The hero found is: ${hero.name}`);
    console.log(`The heroes found are: ${heroes.map(hero => hero.name)}`);
  })
  .catch(error => {
    console.log(error);
  });

// Output:
// The hero found is: Wolverine
// The heroes found are: Batman,Superman,Flash,Cyborg,Aquaman

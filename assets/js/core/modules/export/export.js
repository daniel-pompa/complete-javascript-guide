//* Export
// The export statement is used to export functions, objects, or primitive values from a given file (or module).

//* Importing the heroes data from an external file
import heroes from '../../../../data/heroes.js';

/**
 * Find a hero by their ID.
 * @param {number} id - The ID of the hero to find.
 * @returns {Object|undefined} The hero object if found, undefined otherwise.
 */
export const getHeroById = id => heroes.find(hero => hero.id === id);

/**
 * Find a hero by their name.
 * @param {string} name - The name of the hero to find.
 * @returns {Object|undefined} The hero object if found, undefined otherwise.
 */
export const getHeroByName = name => heroes.find(hero => hero.name === name);

/**
 * Find heroes by their owner.
 * @param {string} owner - The owner of the heroes to find.
 * @returns {Array} An array of hero objects if found, an empty array otherwise.
 */
export const getHeroesByOwner = owner => heroes.filter(hero => hero.owner === owner);

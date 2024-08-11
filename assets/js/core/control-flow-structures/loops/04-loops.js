/**
 * The for...of loop is used to iterate over iterable objects, such as arrays, maps, sets, and arguments.
 * In each iteration, it executes a specified block of code, providing the value of each distinct property.
 */

console.log('%cThe for...of loop', 'color: #1e3a8a; font-weight: bold;');

// Array of heroes
const heroes = [
  'Achilles',
  'Hector',
  'Paris',
  'Agamemnon',
  'Menelaus',
  'Patroclus',
  'Odysseus',
  'Nestor',
  'Diomedes',
  'Ajax',
];

for (let hero of heroes) {
  console.log(hero);
}

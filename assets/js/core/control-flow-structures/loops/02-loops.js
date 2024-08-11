// The do...while loop runs the code block at least once and then continues to run as long as the condition is true.

console.log('%cThe do...while loop', 'color: #1e3a8a; font-weight: bold;');

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

let i = 0;

do {
  console.log(heroes[i]);
  i++;
} while (i < heroes.length);

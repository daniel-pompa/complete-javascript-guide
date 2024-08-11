// The while loop is used to execute a block of code as long as the specified condition is true.

console.log('%cThe while loop', 'color: #1e3a8a; font-weight: bold;');

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

while (i < heroes.length) {
  console.log(heroes[i]);
  i++;
}

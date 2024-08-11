// This example simulates a battle between two heroes, displaying attack messages, tracking health, and announcing the winner.

// Array of heroes
const heroes = [
  { name: 'Achilles', health: 100 },
  { name: 'Hector', health: 100 },
];

// Styles for the console
const styles = [
  'background: linear-gradient(#004aad, #002d4e)',
  'border: none',
  'border-radius: 3px',
  'color: #fff',
  'padding: 8px 16px',
  'text-align: center',
  'font-size: 14px',
  'font-weight: bold',
].join(';');

/**
 * Function to simulate an attack.
 * @param {Object} attacker - The object representing the attacker.
 * @param {Object} target - The object representing the target.
 */
const attack = (attacker, target) => {
  const damage = Math.floor(Math.random() * 30) + 1;
  console.log(`${attacker.name} attacks ${target.name} causing ${damage} damage.`);
  // Reduce target health
  target.health -= damage;
  // Check if target is down
  if (target.health <= 0) {
    console.log(`${target.name} has fallen! The gods weep for him.`);
  } else {
    console.log(`${target.name}'s health is now ${target.health}.`);
  }
};

/**
 * Function to display the winner.
 * @param {Object} winner - The object representing the winner.
 */
const displayWinner = winner => {
  console.log(
    `\nWith a final strike of the sword, ${winner.name} emerges victorious on the battlefield with ${winner.health} health remaining. \nThe echoes of this epic battle will resound through the ages, remembering the brave heroes of the Trojan War.`
  );
};

/**
 * Function to check if all heroes are alive.
 * @param {Array} heroes - An array of objects representing the heroes.
 * @returns {boolean} Returns true if all heroes have health greater than 0, otherwise returns false.
 */
const allHeroesAlive = heroes => {
  // Use the Array.every() method to check if every hero's health property is greater than 0
  return heroes.every(hero => hero.health > 0);
};

/**
 * Function to perform combat.
 * @param {Array} heroes - An array of objects representing the heroes.
 */
const startCombat = heroes => {
  console.log(
    `%c${heroes[0].name} vs ${heroes[1].name}. The epic battle begins!`,
    styles
  );
  // Loop until one hero falls
  while (allHeroesAlive(heroes)) {
    // Select the attacker and target
    const [attacker, target] = heroes;
    // Perform the attack
    attack(attacker, target);
    // Check if the target is down, if true, exit the loop
    if (target.health <= 0) {
      break;
    }
    // Swap roles for the next round
    [heroes[0], heroes[1]] = [heroes[1], heroes[0]];
  }
  // Find the winner
  const winner = heroes.find(hero => hero.health > 0);
  displayWinner(winner);
};

// Start the combat
startCombat(heroes);

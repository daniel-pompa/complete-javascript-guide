/**
 * Object representing the hero Achilles.
 * @typedef {Object} Achilles
 * @property {string} name - Name of the hero.
 * @property {string} father - Hero's father.
 * @property {string} mother - Hero's mother.
 * @property {number} age - Hero's age.
 * @property {Array<Object>} weapons - Hero's weapons.
 * @property {Array<Object>} armor - Hero's armor.
 * @property {string} hometown - Hometown of the hero.
 * @property {string} description - Description of the hero.
 * @property {string} death - Cause of the hero's death.
 * @property {Array<string>} titles - Hero's titles.
 * @property {Object} battles - Battles in which the hero participated.
 * @property {string} homeland - Homeland of the hero.
 */
const achilles = {
  name: 'Achilles',
  father: 'Peleus',
  mother: 'Thetis',
  age: 30,
  weapons: [
    { type: 'Spear', name: 'Dory' },
    { type: 'Short sword', name: 'Xiphos' },
  ],
  armor: [
    { type: 'Shield', name: 'Aspis' },
    { type: 'Breastplate', name: 'Thorax' },
    { type: 'Helmet', name: 'Kraneos' },
    { type: 'Greaves', name: 'Knémides' },
  ],
  homeland: 'Greece',
  hometown: 'Phthia',
  description:
    'The invincible commander of the Myrmidons and the greatest of the Greek warriors in the Trojan War. He stood formidable on the battlefield with his prowess and bravery eclipsing all, as his legend was forged in every combat.',
  death:
    'Killed by an arrow to the heel shot by Paris. This fatal wound, in the only vulnerable point of Achilles that Thetis had not dipped in the River Styx, ended the life of the greatest warrior of his time.',
  titles: ['The swift-footed', 'Hero of Troy'],
  battles: {
    'Scamander river': 'Victory',
    Troy: 'Victory',
    'Duel with Hector': 'Victory',
  },
};

/**
 * Function to display hero details.
 * @param {Achilles} hero - Object representing the hero.
 */
const displayHeroDetails = hero => {
  // Display header with hero name
  console.log(`%cDetails of the hero ${hero.name}`, 'color: #1e3a8a; font-weight: bold;');

  // Iterate over the hero properties
  for (const key in hero) {
    // Check if the property is directly owned by the hero
    if (Object.prototype.hasOwnProperty.call(hero, key)) {
      const element = hero[key];
      // Check if the property is an array
      if (Array.isArray(element)) {
        console.log(`${key}:`);
        // Check if the property is weapons or armor
        if (key === 'weapons' || key === 'armor') {
          element.forEach(item => console.log(`- ${item.type}: ${item.name}`));
        } else {
          console.log(element.join(', '));
        }
      } else if (typeof element === 'object') {
        console.log(`${key}:`);
        // Iterate over the properties of the object
        for (const subKey in element) {
          if (Object.prototype.hasOwnProperty.call(element, subKey)) {
            console.log(`- ${subKey}: ${element[subKey]}`);
          }
        }
      } else {
        console.log(`${key}: ${element}`);
      }
    }
  }
};

// Display details of the hero Achilles
displayHeroDetails(achilles);

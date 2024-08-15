import {
  Person,
  Developer,
  BackEndDeveloper,
  FrontEndDeveloper,
  FullStackDeveloper,
  QAEngineer,
  Manager,
} from './models/models.js';

console.log(
  '%cClasses with inheritance and polymorphism',
  'color: #1e3a8a; font-weight: bold;'
);

// Create instances of each class
const hrManager = new Person(
  'John',
  'Doe',
  45,
  'john.doe@company.com',
  'Human Resources Manager'
);

hrManager.sayHello();
hrManager.displayData();
console.log('\n');

const developer = new Developer('Jane', 'Doe', 30, 'jane.doe@company.com', 'Developer', [
  'JavaScript',
  'TypeScript',
]);

developer.sayHello();
developer.displayData();
console.log('\n');

const backEndDeveloper = new BackEndDeveloper(
  'Razvan',
  'Ilies',
  37,
  'razvan.ilies@company.com',
  ['JavaScript', 'TypeScript', 'Python'],
  ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'PostgreSQL']
);

const frontEndDeveloper = new FrontEndDeveloper(
  'Carmen',
  'Ciambrino Baz',
  36,
  'carmen.ciambrino@company.com',
  ['JavaScript', 'TypeScript'],
  ['HTML5', 'CSS3', 'React', 'Redux', 'Bootstrap', 'Tailwind CSS']
);

const fullStackDeveloper = new FullStackDeveloper(
  'Daniel',
  'Pompa Pareja',
  49,
  'daniel.pompa@company.com',
  ['JavaScript', 'TypeScript'],
  ['HTML5', 'CSS3', 'React', 'Redux', 'Bootstrap', 'Tailwind CSS'],
  ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM']
);

const qaEngineer = new QAEngineer(
  'Adrián',
  'Cividanes Fernández',
  30,
  'adrian.cividanes@company.com',
  ['Selenium', 'Jest', 'Cypress']
);

const manager = new Manager(
  'Emma',
  'Ciambrino Baz',
  42,
  'emma.ciambrino@company.com',
  'Development'
);

const employees = [
  backEndDeveloper,
  frontEndDeveloper,
  fullStackDeveloper,
  qaEngineer,
  manager,
];

employees.forEach(employee => {
  employee.sayHello();
  employee.displayData();
  console.log('\n');
});

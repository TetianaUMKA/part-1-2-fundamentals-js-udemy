/// PART 1 ///
// Variable name conventions
let jonas_schmedtmann = 'JM';
let $Function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

/* The 7 primitive data types
1. Number         let age = 23;               used for decimals and integers
2. String         let first Name = 'Jonas';   sequence of characters
3. Boolean        let fullAge = true;         logical type (false and true)
4. Undefined      let children;    the value taken by the variable that is not defined('empty value')
// 5. Null: Also means 'empty value', but not the same
5. Symbol(ES2015): value that is unique and cannot be changed (Not useful for now)
6. BigInt(ES2020): Larger integers than the Number type can hold
*/

let javaScript = true;
console.log(javaScript);

console.log(typeof javaScript); // boolean
console.log(typeof 23); // number
console.log(typeof 'Jonas'); // string
console.log(typeof undefined); // undefined
console.log(typeof null); // object //it is the bug of JS
console.log(typeof BigInt); // function

/* Three ways of declaring variables in JS: 
/let/  we can do reassigning a value to a variable or we can say "mutate a variable" 
/const/  immutable variable
/var/
*/

// Mathematic or arithmetic operators
const now = 2023;
const ageJonas = now - 1991;
const ageSarah = now - 2000;
console.log(ageJonas, ageSarah); // 32 23

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 64 2.3 8
// 2**3 means 2 to the power of 3 equals 2*2*2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); // Jonas Schmedtmann // doing concatenation

// Assignment operator '='

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x -= 1; // x = x - 1 = 99
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // true
console.log(ageJonas >= 20); // true
console.log(ageJonas < ageSarah); // false
console.log(ageJonas <= 20); // false

const olderAge = now - 1991 > now - 2000;
console.log(olderAge); // true

// Operator precedence orders which operator will be executed at first
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

console.log(25 - 10 - 5); // 10
//because unary negation operator '-' is read  left-to-right

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b); // 10 10
//because assignment operator '=' is read right-to-left

/// PART 2 ///

const jonasBirth = 1991;
const jonasIntroduce =
  "I'm " +
  firstName +
  ', a ' +
  (now - jonasBirth) +
  ' years old ' +
  myCurrentJob +
  '!';

console.log(jonasIntroduce);

// template strings
// template strings literal is backticks `...`

const jonasIntroduce2 = `I'm ${firstName}, a ${
  now - jonasBirth
} year old ${myCurrentJob}!`;

console.log(jonasIntroduce2);

// Create a string by /multiple lines/
console.log(`String
multiple
lines`);

// if statement (if (condition) {} else{}) that condition in parenthesis()returns a true or a false value

const ageMarry = 19;
const isOldEnough = ageMarry >= 18;

if (isOldEnough) {
  console.log('Marry can start driving license 🚘');
}

const ageNina = 15;

if (ageNina >= 18) {
  console.log('Nika can start driving license 🚘');
} else {
  const yearsLeft = 18 - ageNina;
  console.log(`Nina is too young. Wait another ${yearsLeft} years 🍭`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  if (birthYear <= 2000) {
    century = 20;
  } else {
    century = 21;
  }
}

console.log(century);

// Type coercion // refers to the automatic conversion of data types. For example, if a number and a string are added together, JavaScript will automatically convert the number to a string

const inputYear = '1991';
console.log(inputYear + 18); // '199118'

console.log('I am ' + 23 + ' years old'); // 'I am 23 years old' (because operator '+' concatenate to string)

console.log('23' - '10' - 3); // 10 (because '-' convert to number)
console.log('23' / '2'); // 11.5
console.log('12' * '2'); // 24

let n = '1' + 1;
n = n - 1;
console.log(n); // 10

// Type conversion // is the process of converting data of one type to another by using methods(function)
const inputYear2 = '1991';
console.log(Number(inputYear2), inputYear2); // 1991 - number, '1991'
console.log(Number(inputYear2) + 18); // 2009 - number

console.log(Number('Jonas')); // NaN
console.log(typeof NaN); // number (but it is invalid number)

console.log(String(23)); // 23 - number;

// true or false
// 5 falsy value: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

// whereas
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true

const money = 0;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

// Comparison operators: triple equal === is a strict equality operator
// double equal == is a loose equality operator does perform type coercion
const ageNext = 18;
if (ageNext === 18) console.log('You just became an adult'); // 'You just became an adult' // because '===' does not perform type coercion // true

if (ageNext == '18') console.log('You just became an adult'); // 'You just became an adult' // because '==' does coercion and gives // true

//Therefore better always use '===' to avoid bugs
/*
const favorite = prompt("What's your favorite number"); // enter 150
console.log(favorite); // '150'
console.log(typeof favorite); // 'string'

if (favorite == 150) {
  // '150' == 150 // true
  console.log("Cool! 150 is an amassing number!😅"); // Cool! 150 is an amassing number!😅
}

if (favorite === 150) {
  // '150' === 150 // false
  console.log("Cool! 150 is an amassing number!😅"); // nothing
}

const oneNumber = Number(prompt("Write one number")); // enter 100
console.log(oneNumber); // 100
console.log(typeof oneNumber); // 'number'

if (oneNumber === 100) {
  // 100 === 100 // false
  console.log("Cool! 100 is an amassing number!👍"); // Cool! 100 is an amassing number!👍
}

if (oneNumber !== 100) {
  console.log("Why not 100?");
}

const anotherNumber = Number(prompt("Write the another number"));
if (anotherNumber === 50) {
  console.log("Cool! 50 is an amassing number!👍");
} else if (anotherNumber === 30) {
  console.log("Cool! 30 is a good number!👍");
} else if (anotherNumber === 20) {
  console.log("Cool! 20 is nod a bad number!👍");
} else {
  console.log("What is wrong with you?😁");
}
*/

// Boolean logic: AND, OR, NOT OPERATORS

const hasDriversLicense1 = true;
const hasGoodVision1 = true;
console.log(hasDriversLicense1 && hasGoodVision1); //true
console.log(hasDriversLicense1 || hasGoodVision1); //true

const hasDriversLicense2 = true;
const hasGoodVision2 = false;
console.log(hasDriversLicense2 && hasGoodVision2); //false
console.log(hasDriversLicense2 || hasGoodVision2); //true

console.log(!hasDriversLicense2); //false
console.log(!hasGoodVision2); //true

const shouldDrive1 = hasDriversLicense1 && hasGoodVision1;

if (shouldDrive1) {
  console.log('Sarah is able to drive!🚙');
}

if (hasDriversLicense2 && hasGoodVision2) {
  console.log('Sarah is able to drive!🚙');
} else {
  console.log('Someone else should drive...😅');
}

const isTired = false;
console.log(hasDriversLicense1 || hasGoodVision1 || isTired); // true
console.log(hasDriversLicense1 && hasGoodVision1 && isTired); // false

if (hasDriversLicense1 && hasGoodVision1 && !isTired) {
  console.log('Sarah is able to drive!✅');
} else {
  console.log('Someone else should drive...❌');
}

// SWITCH statement

const day = 'wednesday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meeting');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples'); // Write code examples
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day');
}

if (day === 'monday') {
} else if (day === 'tuesday') {
} else if (day === 'wednesday' || day === 'thursday') {
} else if (day === 'friday') {
} else if (day === 'saturday' || day === 'sunday') {
} else {
}

// The Conditional (Ternary) Operator

const userAge = 17;
userAge >= 18
  ? console.log('I like to drink wine 🍷')
  : console.log('I like to drink water💧');

const preferredDrink = userAge >= 18 ? 'wine 🍷' : 'water💧';
console.log(preferredDrink);

let drink;

if (userAge >= 18) {
  drink = 'wine 🍷';
} else {
  drink = 'water💧';
}

console.log(drink);

console.log(`I like to drink ${userAge >= 18 ? 'wine 🍷' : 'water💧'}`);

// We use statement 'use strict' at the beginning of the script to avoid errors. It outputs errors in console when something wrong.

/// PART 2 ///

// Function

function logger() {
  console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(4, 2);
console.log(appleOrangeJuice);

console.log(Number('23'));

// Function Declarations vs. Expressions. The difference between these two function is we cannot access before initialization.

// const ageKate = calcAge(1982);
function calcAge(birthYear) {
  return 2023 - birthYear;
}
const ageKate = calcAge(1982);
console.log(ageKate);

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const ageKate2 = calcAge2(1982);
console.log(ageKate2);

// Arrow function

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1971);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} will get retirement when ${retirement} years passed`;
};

console.log(yearsUntilRetirement(1982, 'Kate'));
console.log(yearsUntilRetirement(1971, 'Luisa'));

// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;

  return juice;
}

const juice = fruitProcessor2(6, 7);
console.log(juice);

function fruitProcessor3(apples, oranges) {
  const juice = `Juice with ${cutFruitPieces(
    apples
  )} pieces of apples and ${cutFruitPieces(oranges)} pieces of oranges.`;

  return juice;
}

const juice3 = fruitProcessor2(10, 20);
console.log(juice3);

// Reviewing functions

const calcUserAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const retirement = 65 - calcUserAge(birthYear);
  return retirement >= 0
    ? `${firstName} will get retirement when ${retirement} years passed`
    : `${firstName} already is retired🏖️`;
};

console.log(yearsUntilRetirement2(1982, 'Michael'));
console.log(yearsUntilRetirement2(1954, 'Bob'));

// Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const yearsA = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstNameA = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2023 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAgeA = function (birthYear) {
  return 2023 - birthYear;
};

const yearsArray = [1990, 1967, 2002, 1991, 2009];

console.log(calcAgeA(yearsArray[3]));
const ageSimone = calcAgeA(yearsArray[0]);
const agePeter = calcAgeA(yearsArray[yearsArray.length - 1]);
console.log(ageSimone, agePeter);
const ages = [
  calcAgeA(yearsArray[0]),
  calcAgeA(yearsArray[yearsArray.length - 1]),
];
console.log(ages);

//Basic array operations (Methods)

const friendsArr = ['Monica', 'Vicky', 'Kevin'];

// Add elements
const newLengthArr = friendsArr.push('Peter');
console.log(friendsArr); // ["Monica", "Vicky", "Kevin", "Peter"]
console.log(newLengthArr); // 4

friendsArr.unshift('John');
console.log(friendsArr); // ["John", "Monica", "Vicky", "Kevin", "Peter"]

// Remove elements
friendsArr.pop(); // remove only last element
console.log(friendsArr); // ["John", "Monica", "Vicky", "Kevin"]
const poppedElArr = friendsArr.pop();
console.log(friendsArr); // ["John", "Monica", "Vicky"]
console.log(poppedElArr); // 'Kevin'

friendsArr.shift();
console.log(friendsArr); // ["Monica", "Vicky"]

console.log(friendsArr.indexOf('Vicky')); // 2
console.log(friendsArr.indexOf('Bob')); // -1

console.log(friendsArr.includes('Vicky')); // true
console.log(friendsArr.includes('Bob')); // false

friendsArr.push(23);
console.log(friendsArr.includes('23')); // false
console.log(friendsArr.includes(23)); // true

if (friendsArr.includes('Vicky')) {
  console.log('You have a friend called Vicky');
}

// Objects
const jonasObject = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonasObject);

console.log(jonasObject.lastName); // 'Schmedtmann'
console.log(jonasObject['lastName']); // 'Schmedtmann'

const nameKey = 'Name';
console.log(jonasObject['first' + nameKey]); // 'Jonas'
console.log(jonasObject['last' + nameKey]); //'Schmedtmann'

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends."
// );
// const answer = jonasObject[interestedIn];
// console.log(answer);

// if (jonas[interestedIn]) {
//   alert(`${answer}`);
// } else {
//   alert("Wrong request!");
// }

// my improvisation
// const jonasObject = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2023 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// function searchInfoJonas(interestedIn) {
//   for (const key of Object.keys(jonasObject)) {
//     if (key === interestedIn) {
//       alert(`The answer your question: ${jonasObject[key]}`);
//     } else {
//       ("The answer is not found");
//     }
//   }
//   return;
// }

// searchInfoJonas(
//   prompt(
//     "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends."
//   )
// );

jonasObject.location = 'Portugal';
jonasObject['twitter'] = '@jonasschmedtman';
console.log(jonasObject);

console.log(
  `${jonasObject.firstName} has ${jonasObject.friends.length} friends, but his best friend is called ${jonasObject.friends[0]}`
);

// Object methods

const monica = {
  firstName: 'Monica',
  lastName: 'Brown',
  birthYear: 1982,
  job: 'manager',
  friends: ['Peter', 'Nina', 'Michel'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this);
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    console.log(this);
    this.year = 2023 - this.birthYear;
    return this.year;
  },
  checkLicense: function () {
    return `${this.firstName} is ${this.calcAge()} years old ${
      this.job
    } and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

// console.log(monica.calcAge(1982));
// console.log(monica["calcAge"](1982));

// console.log(monica.calcAge());

monica.calcAge();
console.log(monica.year);

console.log(monica.checkLicense());

// Copying objects, but only shallow coping. Now this old way isn't used, because if object has deep attachment like array or object we may change them.
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica);

console.log(jessicaCopy);

jessicaCopy.age = 28;
console.log(jessica);
console.log(jessicaCopy);

// Iteration: The for Loop

console.log('Lifting weights repetition 1 🏋🏽‍♂️');
console.log('Lifting weights repetition 2 🏋🏽‍♂️');
console.log('Lifting weights repetition 3 🏋🏽‍♂️');
// etc

// for loop keeps running while conditional true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏽‍♂️`);
}

const jonasL = [
  firstName,
  'Schmedtmann',
  2023 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = [];

for (let i = 0; i < jonasL.length; i++) {
  console.log(jonasL[i]);
  if (
    typeof jonasL[i] !== 'string' &&
    typeof jonasL[i] !== 'number' &&
    typeof jonasL[i] !== 'boolean'
  ) {
    console.log(typeof jonasL[i]); // object (despite of it is array)
    console.log(...jonasL[i]);
  }

  // types[i] = typeof jonasL[i];

  types.push(typeof jonasL[i]);
}
console.log(types);
console.log(jonasL);

// //
const yearsL = [2010, 1987, 1982, 1971, 1963, 1957, 1937];
const agesL = [];
for (let i = 0; i < yearsL.length; i++) {
  agesL.push(2023 - yearsL[i]);
}
console.log(agesL);

// continue and break

for (let i = 0; i < jonasL.length; i++) {
  if (typeof jonas[i] !== 'string') continue; // continue means to skip
  console.log(jonasL[i], typeof jonasL[i]);
}

for (let i = 0; i < jonasL.length; i++) {
  if (typeof jonas[i] === 'number') break; // break terminates the loop completely when it finds what it needs
  console.log(jonasL[i], typeof jonasL[i]);
}

//  Looping Backwards and Loops in Loops

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonasL[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋🏽`);
  }
}

// The While Loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏽‍♂️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`While: Lifting weights repetition ${rep} 🏋🏽‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// let dice = Number((Math.random() * 10).toFixed(0));
console.log(dice);
while (dice !== 6) {
  console.log(`Your rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end ...');
}

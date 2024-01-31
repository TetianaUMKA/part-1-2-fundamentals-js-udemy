'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti, 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 12,
      close: 22,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj); // {time: '22:30', address: 'Via del Sole, 21', mainIndex: 2, starterIndex: 2,}
  },

  orderDelivery2: function ({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, mainIndex, time, address); // 22:30 Via del Sole, 21  2 2
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery2({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Destructuring objects //

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects

const { fri } = openingHours;
console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Destructuring arrays //

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

// we can skip the element
const [first1, , third] = restaurant.categories;
console.log(first, third); // Italian Vegetarian

// we can switch elements
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

//1
const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary); // Vegetarian Italian

//2
[main, secondary] = [secondary, main];
console.log(main, secondary); // Italian Vegetarian

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const arr = [10, 20];
const [
  firstDefault = 1,
  secondDefault = 1,
  thirdDefault = 1,
  fourthDefault = 1,
] = arr;

console.log(firstDefault, secondDefault, thirdDefault, fourthDefault); // 10 20 1 1

// SPREAD //

const arrExample = [7, 8];
const badNewArr = [1, 2, arrExample[0], arrExample[1], arrExample[2]];
console.log(badNewArr); // [1, 2, 7, 8, undefined]

const newArr = [1, 2, ...arrExample];
console.log(newArr); // [1, 2, 7, 8]

console.log(...newArr); // 1, 2, 7, 8

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']

// Join 2 arrays
const unitedMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(unitedMenu);

// Spread is used for all iterables and objects.
// Iterables: arrays, strings, maps, sets.

const text = 'We also can use spread';

const textArr = [...text];
console.log(textArr); // ['W', 'e', ' ', 'a', 'l', 's', 'o', ' ', 'c', 'a', 'n', ' ', 'u', 's', 'e', ' ', 's', 'p', 'r', 'e', 'a', 'd']
const textArr5 = text.split('');
console.log(textArr5); // ['W', 'e', ' ', 'a', 'l', 's', 'o', ' ', 'c', 'a', 'n', ' ', 'u', 's', 'e', ' ', 's', 'p', 'r', 'e', 'a', 'd']

const textArr2 = { ...text };
console.log(textArr2); // {0: 'W', 1: 'e', 2: ' ', 3: 'a', 4: 'l', 5: 's', 6: 'o', 7: ' ', 8: 'c', 9: 'a', 10: 'n', 11: ' ', 12: 'u', 13: 's', 14: 'e', 15: ' ', 16: 's', 17: 'p', 18: 'r', 19: 'e', 20: 'a', 21: 'd'}

const textArr3 = text.split(',');
console.log(textArr3); // ['We also can use spread']

const textArr4 = text.split(' ');
console.log(textArr4); // ['We', 'also', 'can', 'use', 'spread']

console.log(text); // 'We also can use spread'

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.'];
const joinedLetters = letters.join('');
console.log(joinedLetters); // 'Jonas S.'

// we can put spread string into function
console.log(...str); // 'J o n a s'

// A Real-world example of making the order of the pizza
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

// way 1
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// way 2
restaurant.orderPasta(...ingredients);

// spread of objects
const newRestaurant = { foundedIn: 1998, founder: 'Giuseppe', ...restaurant };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurant Roma';
console.log(restaurantCopy);
console.log(restaurant);

// SPREAD, because on RIGHT side of assignment operator (=)

const arrSpread = [1, 2, ...[3, 4]];

// REST, because on LEFT side of assignment operator (=)

const [s, d, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(s, d, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const addNumbers = function (...restNumbers) {
  let sum = 0;
  for (let i = 0; i < restNumbers.length; i++) {
    sum += restNumbers[i];
  }
  console.log(sum);
  console.log(restNumbers);
};
addNumbers(2, 3);
addNumbers(5, 3, 7, 2);
addNumbers(8, 2, 5, 7, 3, 9, 4, 6);

// First, we do 'spread' array, and then we do 'rest' for collecting it in the array again
const spreadArr = [23, 16, 35];
addNumbers(...spreadArr);

restaurant.orderPizza(
  'Chicken',
  'Mushrooms',
  'Cheese',
  'Tomatoes',
  'Asparagus',
  'Onion'
);

restaurant.orderPizza('mushrooms'); // mushrooms [] (because 'rest' will return empty array if don't put any arguments)

// The Nullish coalescing operator (??) //
// it don't skips 'null' and 'undefined', but skips '0'

restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests); // 10 (it's false value, but we need to skip it like true) therefore 👇

const guestsCorrect = restaurant.numGuest ?? 10;
console.log(guestsCorrect); // 0

// OR assignment operator (||=)
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

rest1.numGuests = rest1.numGuests || 10;
console.log(rest1.numGuests); // 20

rest1.numGuests ||= 10;
console.log(rest1.numGuests); // 20

// Nullish assignment operator (??=)
const rest2 = {
  name: 'La Pizza',
  numGuests: 0,
};

rest2.numGuests ||= 10;
console.log(rest2.numGuests); // 10

rest2.numGuests ??= 10;
console.log(rest2.numGuests); // 0

// AND assignment operator (&&=)
const rest3 = {
  name: 'La Pizza',
  numGuests: 12,
  owner: 'Giovanni Ross',
};

rest3.owner = rest3.owner && '<ANONYMOUS>';
console.log(rest3.owner); // <ANONYMOUS>

rest3.owner &&= '<ANONYMOUS>';
console.log(rest3.owner); // <ANONYMOUS>

// Looping arrays (for of)

const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of allMenu) console.log(item);

// we also can get index, but a little bit hard way then general for
// way 1 old
for (const item of allMenu.entries()) {
  console.log(item); //[0, 'Focaccia'], [1, 'Bruschetta'], [2, 'Garlic Bread'] etc.
  console.log(`${item[0] + 1}: ${item[1]}`); // 1: Focaccia 2: Bruschetta 3: Garlic Bread etc.
}
// way 2 modern
for (const [i, el] of allMenu.entries()) {
  console.log(i, el); // 0 'Focaccia' 1 'Bruschetta' 2 'Garlic Bread' etc.
  console.log(`${i + 1}: ${el}`); // 1: Focaccia 2: Bruschetta 3: Garlic Bread etc.
}

// Enhanced object literals ES6

const enhancedOpeningHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 12,
    close: 22,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
const enhancedRestaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti, 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  enhancedOpeningHours,

  [`comment ${43 + 78}`]: 'good',

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(obj) {
    console.log(obj);
  },

  orderDelivery2({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(enhancedRestaurant);

if (enhancedRestaurant.enhancedOpeningHours.thu.open) {
  console.log(enhancedRestaurant.enhancedOpeningHours.thu.open); // 12
}

// if (enhancedRestaurant.enhancedOpeningHours.mon.open) {
//   // TypeError
//   console.log(enhancedRestaurant.enhancedOpeningHours.mon.open);
// }

// Important With optional chaining (?.) we can avoid TypeError, because it return undefined.
if (enhancedRestaurant.enhancedOpeningHours.sat?.open) {
  console.log(enhancedRestaurant.enhancedOpeningHours.sat.open);
}
if (enhancedRestaurant.enhancedOpeningHours.mon?.open) {
  console.log(enhancedRestaurant.enhancedOpeningHours.mon.open);
}

if (enhancedRestaurant.enhancedOpeningHours.thu?.open) {
  console.log(enhancedRestaurant.enhancedOpeningHours.thu.open); // 12
}

console.log(enhancedRestaurant.enhancedOpeningHours.sat?.open); // 0

console.log(enhancedRestaurant.enhancedOpeningHours.mon?.open); // undefined

console.log(enhancedRestaurant.enhancedOpeningHours.thu?.open); // 12

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // ['Focaccia', 'Pasta']

console.log(restaurant.make?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// without (.?) will be Error
// console.log(restaurant.make(0, 1) ?? 'Method does not exist'); // Error

const users = [
  { name: 'Jonas', email: 'hello@jonas.io' },
  { name: 'Monica' },
  { name: 'Pedro', email: 'hello@pedro.io' },
];

console.log(users[0]?.email ?? 'not exist'); // hello@jonas.io
console.log(users[1]?.email ?? 'not exist'); // not exist

// Looping the object by indirectly way
// for property names
const properties = Object.keys(enhancedOpeningHours);
console.log(properties); // [tue, fri, sat]
console.log(properties.length); // 3

for (const day of Object.keys(enhancedOpeningHours)) {
  console.log(day);
}
//the same
for (const day of properties) {
  console.log(day);
}

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}`;
}
console.log(openStr);

// for property values
const values = Object.values(enhancedOpeningHours);
console.log(values); // [{open: 12, close: 22}, {open: 12, close: 22}, {open: 0, close: 24}];
console.log(values.length); // 3

// Entire object

const entries = Object.entries(enhancedOpeningHours);
console.log(entries);
// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(
    `The restaurant work on ${key}: open at ${open} and close at ${close}`
  );
}

// SET // is object lets you store unique values of any type. SET is iterable, but has no index.

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Jonas')); // Set(5) {'J', 'o', 'n', 'a', 's'}

console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet); // Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
orderSet.delete('Risotto');
console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}
// orderSet.clear();
// console.log(orderSet); // Set(0) {}

for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = new Set(staff);
console.log(staffUnique); // Set(3) {'Waite', 'Chef', 'Manager'}

const staffNew = [...new Set(staff)];
console.log(staffNew); // (3) ['Waite', 'Chef', 'Manager']

console.log(staffUnique.size); // 3

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

console.log(new Set('jonasschmedtmann').size); // 11

// Map // is iterable object holds key-value pairs and remembers the original insertion order of the keys.

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(false));
console.log(rest.get(1));

console.log(rest);

// It is bad readable, but very clever
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// console.log(rest.clear);

const arrForMap = [1, 2];
rest.set(arrForMap, 'Test');
console.log(rest.get(arrForMap));

// we can even use El as a key
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct answer 🎉'],
  [false, 'Try again!'],
]);
console.log(question); // Map(7) {'question' => 'What is the best programming language in the world?', 1 => 'C', 2 => 'Java', 3 => 'JS', 'correct' => 3, …}

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// // way 1
// // question.get('correct') === answer
// //   ? console.log(question.get(true))
// //   : console.log(question.get(false));

// // way 2
// console.log(question.get(question.get('correct') === answer));

// Convert object to map
console.log(Object.entries(enhancedOpeningHours));

const hoursMap = new Map(Object.entries(enhancedOpeningHours));
console.log(hoursMap);

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// Work with strings //

const airline = 'KiyAvia Airline';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log('B737'[0]); // B

console.log(airline.length); // 15
console.log('B737'.length); // 4

console.log(airline.indexOf('i')); // 1
console.log(airline.indexOf('g')); // -1
console.log(airline.indexOf('Airline')); // 8
console.log(airline.indexOf('airline')); // -1
console.log(airline.lastIndexOf('i')); // 12

// Slice always returns string that was point out (from, to(not including)). It doesn't change origin string.
console.log(airline.slice(8)); // Airline
console.log(airline.slice(8, 11)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // KiyAvia
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Airline
console.log(airline.slice(-4)); // line
console.log(airline.slice(airline.lastIndexOf('A'), -4)); // Air

// Practice
const checkMiddleSeat = function (seat) {
  // way 1
  // if (seat.indexOf('B') === 2 || seat.indexOf('E') === 2) {
  //   console.log(`The seat ${seat} is the middle seat.`);
  // }
  // way 2
  if (seat.includes('B') || seat.includes('E')) {
    console.log(`The seat ${seat} is the middle seat.`);
  }
  // way 3
  // if (seat.slice(seat[-1] === 'B') || seat.slice(seat[-1] === 'E')) {
  //   console.log(`The seat ${seat} is the middle seat.`);
  // }
};
checkMiddleSeat('29B');
checkMiddleSeat('23C');
checkMiddleSeat('12E');

console.log(airline.toLowerCase()); // kiyavia airline
console.log(airline.toUpperCase()); // KIYAVIA AIRLINE

// Fix capitalization in name
const passengerName = 'jOnAS';
const correctPassengerName =
  passengerName[0].toUpperCase() + passengerName.slice(1).toLocaleLowerCase();
console.log(correctPassengerName); // Jonas

// Comparing emails
const mainEmail = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

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

// At first we spread array and later we do rest for them gathering into array again
const spreadArr = [23, 16, 35];
addNumbers(...spreadArr);

// Working with arrays //

// SLICE don't change the original
const arrSl = ['a', 'b', 'c', 'd', 'e', 'g'];

console.log(arrSl.slice(2)); // ['c', 'd', 'e', 'g']
console.log(arrSl.slice(3, 4)); // ['d']
console.log(arrSl.slice(1, 4)); // ['b', 'c', 'd']
console.log(arrSl.slice(-1)); // ['g']
console.log(arrSl.slice(-3)); // ['d', 'e', 'g']
console.log(arrSl.slice(1, -2)); // ['b', 'c', 'd']

// we can use slice to copy from the original the same as spread operator
console.log(arrSl.slice());
['a', 'b', 'c', 'd', 'e', 'g'];
console.log([...arrSl]);
['a', 'b', 'c', 'd', 'e', 'g'];

// SPLICE change(mutate) the original Important
const arrSpl = ['a', 'b', 'c', 'd', 'e', 'g'];

console.log(arrSpl.splice(2)); // ['c', 'd', 'e', 'g']
console.log(arrSpl); // ['a', 'b']

arrSpl.push('k', 'l'); // ['a', 'b', 'k', 'l']
console.log(arrSpl.splice(-1)); // ['l']
console.log(arrSpl); // ['a', 'b', 'k']
console.log(arrSpl.splice(1, 2)); // ['b', 'k']
console.log(arrSpl); // ['a']

// REVERSE change(mutate) the original Important
const arrR = ['j', 'i', 'h', 'g', 'f'];
console.log(arrR.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arrR); // ['f', 'g', 'h', 'i', 'j']

// CONCAT can be used for concatenating arrays; we
const letters = arrSl.concat(arrR);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'g', 'h', 'i', 'j'];
console.log([...arrSl, ...arrR]); // ['a', 'b', 'c', 'd', 'e', 'g', 'f', 'g', 'h', 'i', 'j'];

// JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// AT method
const arrAt = [23, 11, 64];
console.log(arrAt[0]); // 23
console.log(arrAt.at(0)); // 23

// getting last array element
// way 1
console.log(arrAt[arrAt.length - 1]); // 64
// way 2
console.log(arrAt.slice(-1)); // [64]
console.log(arrAt.slice(-1)[0]); // 64
// way 3
console.log(arrAt.at(-1)); // 64
console.log(arrAt.at(-2)); // 11

// Looping Arrays: forEach, but we can  use break or continue
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Example 1
// way 1
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); //Important Math.abs method takes out minus(-)
  }
}
console.log('---forEach---');
// way 2
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// Example 2
// way 1
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
}
console.log('---forEach---');
// way 2
movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
});

// one more example of using forEach

const uahToEur = 38.9;
const movementsEur = [];

movements.forEach(function (mov) {
  movementsEur.push(mov / uahToEur);
});

console.log(movements);
console.log(movementsEur);

// we can get (item, i, arr) by using forEach Important
const guestHotelList = [
  'Monica',
  'Jonas',
  'Tetiana',
  'Maria',
  'Simon',
  'Vicky',
];

guestHotelList.forEach(function (guest, i, arr) {
  console.log(
    `The room number ${i} is belong ${guest}. List of guests in the queue: ${arr.slice(
      i + 1
    )})}`
  );
});

// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies); // Map(3) {'USD' => 'United States dollar', 'EUR' => 'Euro', 'GBP' => 'Pound sterling'}

// we can also use (value, key, map) or (value, key, _), if it is necessary
currencies.forEach(function (value, key) {
  console.log(`${key}: ${value}.`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}

// we can also use (value, _, set) or (value, _, _), if it is necessary
currenciesUnique.forEach(function (value, _, set) {
  console.log(_);
  const insideSet = [...set];
  console.log(insideSet);
  console.log(`${value}`);
});

// Method 'map' gives us possibility to loop array by mapping result in a new array that will be returned.
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// way 1
const movementsUSD = movements2.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements2);
console.log(movementsUSD);

// way 2  by using arrow function
const movementsUSD2 = movements2.map(mov => mov * eurToUsd);
console.log(movementsUSD2);

// one more example of using arrow function instead of regular function as callback of map
// way 1
const movementDescription = movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1}: you deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: you withdrew ${Math.abs(mov)}`;
  }
});
console.log(movementDescription);
// [
//   'Movement 1: you deposited 200',
//   'Movement 2: you deposited 450',
//   'Movement 3: you withdrew 400',
//   'Movement 4: you deposited 3000',
//   'Movement 5: you withdrew 650',
//   'Movement 6: you withdrew 130',
//   'Movement 7: you deposited 70',
//   'Movement 8: you deposited 1300',
// ];

// way 2
const movementDescription2 = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDescription2);

// the further example of using 'map'

const createUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return username;
};

console.log(createUsernames('Steven Thomas Williams'));

// Method 'filter' returns a new array containing the array elements that passed a specified test condition

const deposits = movements2.filter(mov => mov > 0);

console.log(deposits);

const withdrawals = movements2.filter(mov => mov < 0);

console.log(withdrawals);

// Method 'reduce' boils all array elements down to one single value

// InitialValue = 0 is default value in this case, as it does not need to be specified
const balance = movements2.reduce((accumulator, currentValue, i, arr) => {
  console.log(`Iteration ${i}: ${accumulator}`);
  return accumulator + currentValue;
});
console.log(`balance: ${balance}`);

// InitialValue is put by us in variable
const initialValue = 1000;
const balance2 = movements2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(`balance2: ${balance2}`);

// We determine needed InitialValue in this case
const balance3 = movements2.reduce((accumulator, currentValue, i, arr) => {
  console.log(`Iteration ${i}: ${accumulator}`);
  return accumulator + currentValue;
}, 2000);
console.log(`balance3: ${balance3}`);

// Maximum value by using reduce
const maxWithReduce = movements2.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements2[0]);
console.log(maxWithReduce);

// the same but easier😅
const maxWithMath = Math.max(...movements2);
console.log(maxWithMath);

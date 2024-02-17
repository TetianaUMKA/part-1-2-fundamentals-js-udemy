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

'strict';

// Default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('GN234', 18, 250);
createBooking('KH146', 31);
createBooking('LF127', undefined, 399);

// How argument passing works: Value vs. Reference

const flight = 'LH234';
const jonas5 = {
  name: 'Jonas Schmedtmann',
  passport: 23445667790,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // it's local variable // argument flightNum = flight for now
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 23445667790) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};
checkIn(flight, jonas5);

console.log(flight); // LH234
console.log(jonas5); // { name: 'Mr. Jonas Schmedtmann', passport: 23445667790,}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
  console.log(person.passport);
};

newPassport(jonas5);
console.log(jonas5.passport);

checkIn(flight, jonas5);

// Functions accepting Callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callback all the time
const hi = function () {
  console.log('👋');
};
document.body.addEventListener('click', hi);

['Jonas', 'Martha', 'Adam'].forEach(hi);

// Functions returning functions

// way1
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

greet('Hello')('Jonas');

// way2
const greet1 = greeting1 => {
  return function (name) {
    console.log(`${greeting1} ${name}`);
  };
};

const greeting1 = greet1('Welcome home');

greeting1('Monica');

// way 3

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Hi')('Jonas');
greet2('Hey')('Steven');

// The call and apply Methods

// const book = function (flightNum, name) {
//   console.log(
//     `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum} `
//   );
//   this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// };

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book,
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
//   book,
// };

// eurowings.book(555, 'Jared White');
// eurowings.book(567, 'Monica White');
// console.log(eurowings);

// call
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum} `
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(23, 'Jonas Schmedtmann');
lufthansa.book(63, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 55, 'Jared White');
book.call(eurowings, 57, 'Monica White');
console.log(eurowings);

book.call(lufthansa, 87, 'Deny Brown');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 43, 'Lenny Kramer');
book.call(swiss, 42, 'Lyly Camel');
console.log(swiss);

// apply
const flightData = [58, 'George Cooper'];
book.apply(swiss, flightData);
// But in modern JS we use Call method with Spread instead of Apply
console.log(swiss);
book.call(swiss, ...flightData);

// Bind method
const bookSA = book.bind(swiss);
const bookEW = book.bind(eurowings);
bookSA(23, 'Steven Williams');
bookEW(45, 'Lucy Grey');

// we can put multiple arguments as well, that would be used for more specific direction
const bookEW55 = book.bind(eurowings, 55);
bookEW55('Sarah Williams');
bookEW55('Martha Cooper');

// with Event Listeners
lufthansa.planes = 56;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVat = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;
console.log(addVat(100)); // 123
console.log(addVat(200)); // 246

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(200));

// Immediately Invoked Function Expressions (usually don't used in modern JS)
// multi use of fn
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
//IIFE (we put into brackets())
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`Registered ${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker); // review booker function

// Examples Closures

// 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();
f();

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();
console.dir(f);

g();
f();
console.dir(f);

// 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passenger`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

// Coding-challenge

(function () {
  const header = document.querySelectorAll('h1');
  header[0].style.color = 'grey';

  document.querySelector('body').addEventListener('click', function () {
    header[0].style.color = 'red';
    setTimeout(function () {
      header[1].style.color = 'blue';
    }, 1000);
    setTimeout(function () {
      header[2].style.color = 'yellow';
    }, 1500);
    setTimeout(function () {
      header[3].style.color = 'tomato';
    }, 2500);
    setTimeout(function () {
      header[4].style.color = 'purple';
    }, 3000);
  });
})();

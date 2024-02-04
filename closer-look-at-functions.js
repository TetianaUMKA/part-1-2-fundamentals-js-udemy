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

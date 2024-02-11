'strict';

// Work with strings //

const airline = 'KiyAvia Airline';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log('B737'[0]); // B
console.log(plane[plane.length - 1]); // 0
console.log(plane.at(-1)); //0

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

// Comparing emails trim(), trimStart(), trimEnd()
const mainEmail = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@jonas.io
console.log(mainEmail === normalizedEmail); // true

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23!  // only first
console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!  // all of them

// old method (by use the regular expression (/ /g))
console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!  // all of them

// return Booleans
const plane2 = 'A320neo';

console.log(plane2.includes('A320')); // true
console.log(plane2.includes('Boeing')); // false

console.log(plane2.startsWith('Air')); // false
console.log(plane2.startsWith('A320')); // true

if (plane2.startsWith('A') && plane2.endsWith('neo')) {
  console.log("Part of a new Neo Airlines's family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    ('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some foot and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName].join(' ').toUpperCase();
console.log(newName);

const capitalizeName = function (name) {
  const namesArr = name.split(' ');
  const capitalizedNamesArr = [];
  // way 1
  // for (let i = 0; i < namesArr.length; i += 1) {
  //   const [firstLetter, ...rest] = namesArr[i];
  //   capitalizedNamesArr.push(firstLetter.toUpperCase() + rest.join(''));
  // }
  // way 2
  // for (const name of namesArr) {
  //   capitalizedNamesArr.push(name[0].toUpperCase() + name.slice(1));
  // }
  // way 3
  // for (const name of namesArr) {
  //   const [firstLetter, ...rest] = name;
  //   capitalizedNamesArr.push(firstLetter.toUpperCase() + rest.join(''));
  // }
  //way 4
  for (const name of namesArr) {
    capitalizedNamesArr.push(name.replace(name[0], name[0].toUpperCase()));
  }

  console.log(capitalizedNamesArr);
  console.log(capitalizedNamesArr.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, ' ')); //         Go to gate 23!
console.log('Welcome!'.padStart(20, '💙💛')); // 💙💛💙💛💙💛Welcome!
console.log("Let's go!".padEnd(15, '🏀')); // Let's go!🏀🏀🏀🏀

// Mask the card number
const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(3456778845634987)); // ************4987
console.log(maskCreditCard(3487654321789076)); // ************9076

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};
planesInLine(9);
planesInLine(5);

// Exercise

// way 1
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const flightsArr = flights.split(';');
// console.log(flightsArr);
// const flightsStr = flightsArr.join(' ').replaceAll('+', ' ');
// console.log(flightsStr);

// const flightsArr2 = flightsStr.split(' ');
// console.log(flightsArr2);
// const flightsEvent = [];
// const flightsDirection = [];
// const timeEvent = [];

// for (const item of flightsArr2) {
//   if (item.includes('_')) {
//     flightsEvent.push(item);
//   } else if (item.includes(':')) {
//     timeEvent.push(item);
//   } else {
//     flightsDirection.push(item.slice(0, 3).toUpperCase());
//   }
// }

// console.log(flightsEvent, flightsDirection, timeEvent);

// const flightsDirectionFrom = [];
// const flightsDirectionTo = [];

// for (let i = 0; i < flightsDirection.length; i++) {
//   if (i % 2 == 0) {
//     flightsDirectionTo.push(flightsDirection[i]);
//   } else {
//     flightsDirectionFrom.push(flightsDirection[i]);
//   }
// }

// console.log(flightsEvent, flightsDirectionFrom, flightsDirectionTo, timeEvent);

// for (let i = 0; i < flightsEvent.length; i += 1) {
//   if (flightsEvent[i].includes('Delayed')) {
//     flightsEvent[i] = '🔴' + flightsEvent[i];
//   }
//   console.log(
//     `${flightsEvent[i].replaceAll('_', ' ')} from ${
//       flightsDirectionFrom[i]
//     } to ${flightsDirectionTo[i]} (${timeEvent[i].replace(':', 'h')})`.padStart(
//       44
//     )
//   );
// }

// way 2
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsArr = flights.split('+');
console.log(flightsArr);

for (const flight of flightsArr) {
  const [flightEvent, directionFrom, directionTo, flightTime] =
    flight.split(';');
  console.log(
    `${(flightEvent.includes('Delayed')
      ? '🔴' + flightEvent
      : flightEvent
    ).replaceAll('_', ' ')} from ${directionFrom
      .slice(0, 3)
      .toUpperCase()} to ${directionTo
      .slice(0, 3)
      .toUpperCase()} (${flightTime.replace(':', 'h')})`.padStart(44)
  );
}

// way from the mentor

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}

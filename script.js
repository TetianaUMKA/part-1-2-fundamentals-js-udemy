/// PART 1 ///
// Variable name conventions
let jonas_schmedtmann = "JM";
let $Function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

/* The 7 primitive data types
1. Number         let age = 23;               used for decimals and integers
2. String         let first Name = 'Jonas';   sequence of characters
3. Boolean        let fullAge = true;         logical type (false and true)
4. Undefined      let children;    the value taken by the variable that is not defind('emty value')
// 5. Null: Also means 'emty value', but not the same
5. Symbol(ES2015): value that is unique and cannot be changed (Not useful for now)
6. Biglnt(ES2020): Larger integers than the Number type can hold
*/

let javaScript = true;
console.log(javaScript);

console.log(typeof javaScript); // boolean
console.log(typeof 23); // number
console.log(typeof "Jonas"); // string
console.log(typeof undefined); // undefined
console.log(typeof null); // object //it is the bug of JS
console.log(typeof BigInt); // function

/* Three ways of declaring variables in JS: 
/let/  we can do reassigning a value to a variable or we can say "mutate a variable" 
/const/  immutable variable
/var/
*/

// Mathematic or arihtmetic operators
const now = 2023;
const ageJonas = now - 1991;
const ageSarah = now - 2000;
console.log(ageJonas, ageSarah); // 32 23

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 64 2.3 8
// 2**3 means 2 to the power of 3 equals 2*2*2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); // Jonas Schmedtmann // doing concatenation

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
  ", a " +
  (now - jonasBirth) +
  " years old " +
  myCurrentJob +
  "!";

console.log(jonasIntroduce);

// template strings
// template strings letteral is backticks `...`

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
  console.log("Marry can start driving license 🚘");
}

const ageNika = 15;

if (ageNika >= 18) {
  console.log("Nika can start driving license 🚘");
} else {
  const yearsLeft = 18 - ageNika;
  console.log(`Nika is too young. Wait another ${yearsLeft} years 🍭`);
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

const inputYear = "1991";
console.log(inputYear + 18); // '199118'

console.log("I am" + 23 + "years old"); // 'I am 23 years old' (because operator '+' concatenate to string)

console.log("23" - "10" - 3); // 10 (because '-' convert to number)
console.log("23" / "2"); // 11.5
console.log("12" * "2"); // 24

let n = "1" + 1;
n = n - 1;
console.log(n); // 10

// Type conversion // is the process of converting data of one type to another by using methods(function)
const inputYear2 = "1991";
console.log(Number(inputYear2), inputYear2); // 1991 - number, '1991'
console.log(Number(inputYear2) + 18); // 2009 - number

console.log(Number("Jonas")); // NaN
console.log(typeof NaN); // number (but it is invalid number)

console.log(String(23)); // 23 - number;

// true or false
// 5 falsy value: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

// whereas
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true

const money = 0;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// Comparison operators: triple equal === is a strict equality operator
// double equal == is a loose equality operator does perform type coercion
const ageNext = 18;
if (ageNext === 18) console.log("You just became an adult"); // 'You just became an adult' // because '===' does not perform type coercion // true

if (ageNext == "18") console.log("You just became an adult"); // 'You just became an adult' // because '==' does coercion and gives // true

//Therefore better always use '===' to avoid bugs
/*
const favourite = prompt("What's your favourite number"); // enter 150
console.log(favourite); // '150'
console.log(typeof favourite); // 'string'

if (favourite == 150) {
  // '150' == 150 // true
  console.log("Cool! 150 is an amasing number!😅"); // Cool! 150 is an amasing number!😅
}

if (favourite === 150) {
  // '150' === 150 // false
  console.log("Cool! 150 is an amasing number!😅"); // nothing
}

const oneNumber = Number(prompt("Write one number")); // enter 100
console.log(oneNumber); // 100
console.log(typeof oneNumber); // 'number'

if (oneNumber === 100) {
  // 100 === 100 // false
  console.log("Cool! 100 is an amasing number!👍"); // Cool! 100 is an amasing number!👍
}

if (oneNumber !== 100) {
  console.log("Why not 100?");
}

const anotherNumber = Number(prompt("Write the another number"));
if (anotherNumber === 50) {
  console.log("Cool! 50 is an amasing number!👍");
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
  console.log("Sarah is able to drive!🚙");
}

if (hasDriversLicense2 && hasGoodVision2) {
  console.log("Sarah is able to drive!🚙");
} else {
  console.log("Someone else should drive...😅");
}

const isTired = false;
console.log(hasDriversLicense1 || hasGoodVision1 || isTired); // true
console.log(hasDriversLicense1 && hasGoodVision1 && isTired); // false

if (hasDriversLicense1 && hasGoodVision1 && !isTired) {
  console.log("Sarah is able to drive!✅");
} else {
  console.log("Someone else should drive...❌");
}

// SWITCH statement

const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meeting");
    break;
  case "tuesday":
    console.log("Preapare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples"); // Write code examples
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
} else if (day === "tuesday") {
} else if (day === "wednesday" || day === "thursday") {
} else if (day === "friday") {
} else if (day === "saturday" || day === "sunday") {
} else {
}

// The Conditional (Ternary) Operator

const userAge = 17;
userAge >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water💧");

const preferredDrink = userAge >= 18 ? "wine 🍷" : "water💧";
console.log(preferredDrink);

let drink;

if (userAge >= 18) {
  drink = "wine 🍷";
} else {
  drink = "water💧";
}

console.log(drink);

console.log(`I like to drink ${userAge >= 18 ? "wine 🍷" : "water💧"}`);

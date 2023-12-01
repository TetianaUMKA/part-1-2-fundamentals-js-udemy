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

'use strict';

console.log(window); // window{} - global object of JS in browser

console.log(this); // window{}

function calcAgeArrowDec(birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // undefined
}

calcAgeArrowDec(1991);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // undefined
};

calcAge(1982);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); // window{}
};

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// const f = jonas.calcAge;
// f(); // TypeError: cannot read property 'year'

const monica = {
  firstName: 'Monica',
  year: 1987,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  greet: () => {
    console.log(this); // window{}
    console.log(`Hey ${this.firstName}`);
  },
};

monica.greet(); // Hey undefined (because arrow function has't this keyword)

var fullName = 'Tatiana White';
const tatiana = {
  fullName: 'Tatiana White',
  year: 1987,
  greet: () => {
    console.log(this); // window{}
    console.log(`Hey ${this.firstName}`);
  },
};

tatiana.greet(); // Hey Tatiana White (because var fullName was written in the global scope object 'Window')

// !!! Conclusion: we should't use an arrow function as an object method.

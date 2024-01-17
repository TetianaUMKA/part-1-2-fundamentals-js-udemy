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
    console.log(this); // jonas{}
    console.log(2023 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // 6

// const f = jonas.calcAge;
// f(); // TypeError: cannot read property 'year'

const monica = {
  firstName: 'Monica',
  year: 1987,
  calcAge: function () {
    console.log(this); // monica{}
    console.log(2023 - this.year);
  },
  greet: () => {
    console.log(this); // window{}
    console.log(`Hey ${this.firstName}`); // Hey undefined (because arrow function has't this keyword)
  },
};

monica.greet();

var fullName = 'Tatiana White';
const tatiana = {
  fullName: 'Tatiana White',
  year: 1987,
  greet: () => {
    console.log(this); // window{}
    console.log(`Hey ${this.firstName}`); // Hey Tatiana White (because var fullName was written in the global scope object 'Window')
  },
};

tatiana.greet();

// Conclusion 👆: we should't use an arrow function as an object method because an arrow use this from the parent scope. Except cases when we need use an arrow for convenience 👇

const micky = {
  firstName: 'Micky',
  year: 1998,
  calcAge: function () {
    console.log(this); // micky{}
    console.log(2023 - this.year);

    // Solution 1
    const self = this; // we can name variable self or that for reserving this
    // const isMillennial = function () {
    //   console.log(this); // undefined
    //   // console.log(this.year); // TypeError: cannot read property 'year'
    //   console.log(self); // micky{}
    //   console.log(self.year >= 1981 && self.year <= 1996); // false
    // };

    // Solution 2
    const isMillennial = () => {
      console.log(this); // micky{} (because the object micky is in the parent scope)
      console.log(this.year >= 1981 && this.year <= 1996); // false
    };

    isMillennial();
  },
};

micky.calcAge();

// Arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments); // Error: arguments is not defined
  return a + b;
};
addArrow(2, 5, 8);

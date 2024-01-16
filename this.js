'use strict';

console.log(window); // window{} - global object of JS in browser

console.log(this);

function calcAgeArrowDec(birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
}

calcAgeArrowDec(1991);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge(1982);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

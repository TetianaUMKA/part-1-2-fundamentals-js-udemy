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

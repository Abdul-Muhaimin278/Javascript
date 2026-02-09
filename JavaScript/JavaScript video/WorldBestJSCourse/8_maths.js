//* ======================================
//* Math Object in JavaScript
//* ======================================

//* Math: The math namespace object contains static properties and methods for mathematical constants and functions.
//* Math works with Number type. It does not works with bigInts.

//? 1:Constants:
// - Math.PI:represents the mathematical constant pi (π).
// const piValue = Math.PI;
// console.log(piValue);

//* ======================================
//* 2. Basic Operations:
//* ======================================

//? Math.abs(): The Math.abs() static method returns the absolute value of a number.
// or in simple, how far the number is from 0.it will always be positive.

// console.log(Math.abs(131091093019));

//? Math.round(x): Rounds a number to nearest integer.
// const roundedValue = Math.round(3.7);
// console.log(roundedValue);

//? Math.ceil(x): Returns the value of x rounded up to its nearest integer:
// const ceilValue = Math.ceil(3.1);
// console.log(ceilValue);

//? Math.floor(x): Returns the value of x rounded down to its nearest integer:
// const floorValue = Math.floor(3.7);
// console.log(floorValue);

//? Math.trunc(x): Returns the integer part of x:
// const truncValue = Math.trunc(3.7);
// console.log(truncValue);

//todo Math.trunc() and Math.sign() were added to JavaScript 2015-ES6.

// const truncValue = Math.trunc(-3.7);
// const floorValue = Math.floor(-3.7);
// console.log(truncValue);
// console.log(floorValue);

//todo Notes:

// No matter how many char are there after decimal, they all will always return  only number before the decimal.
// round rounds to nearest integer
// floor always rounds down
// ceil always rounds up

//* ======================================
//* 3. Exponential and Logarithmic Functions:
//* ======================================

//? Math.pow(x,y): Returns the value of x to the power of y.

// console.log(Math.pow(2, 10));
// console.log(2 ** 10);

//? Math.sqrt(x): Returns the square root of x.
// let squareRoot = Math.sqrt(625);
// console.log(squareRoot);

//? Math.log(x): Returns the natural logarithm of x.
// let logResult = Math.log(1);
// let logResult = Math.log(10);
// console.log(logResult);

//? Math.log2(x): Returns teh base 2 logarithm of x.
// let logResult = Math.log2(12);
// console.log(logResult);

//* ======================================
//* Interview Question
//* ======================================

//! Generate Random number
//? Math.random(): Returns a random number between 0 (inclusive), and 1 (exclusive).

// console.log((Math.random() * 100).toFixed(3));
// console.log(Math.round(Math.random() * 100).toFixed(3));

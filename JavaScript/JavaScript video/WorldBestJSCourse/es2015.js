//* ======================================
//* Modern JavaScript - EcmaScript 2015
//* =====================================

//* ======================================
//* LET AND CONST - EcmaScript 2015
//* =====================================

//? let Keyword:  The let keyword is used to declare variables with block scope. Variables declared with let are mutable, meaning their values can be reassigned.

// var myFavbestword = "Abdulmuhaimin";
// myFavbestword = "opbot11";
// console.log(myFavbestword);

// let myFavbestword = "Abdulmuhaimin";
// myFavbestword = "opbot11";
// console.log(myFavbestword);

//? const Keyword: The const keyword is used to declare variables with block scope, but once a value is assigned to a const variable, it cannot be reassigned. const variables are immutable.

// const myFavbestword = "Abdulmuhaimin";
// myFavbestword = "opbot11";
// console.log(myFavbestword);

//? show you what VAR can do

// var name = "abdul";

// if (true) {
// 	var name = "opbot";
// 	console.log(name);
// }

// name = "11";
// console.log(name);

//? ex2 : with the help of LET keyword

// let name = "Abdul";

// if (true) {
// 	let name = "opbot";
// 	console.log(name);
// }

// name = "11";
// console.log(name);

// const name = "Abdul";

// if (true) {
// 	const name = "opbot";
// 	console.log(name);
// }

// name = "11";
// console.log(name);

// if (true) {
// 	let name = "opbot";
// 	console.log(name);
// }

// name = "11";
// console.log(name);

//? can not use LET outside the scope

//* ==========================================
//* TEMPLATE STRINGS - EcmaScript 2015
//* =========================================

//? In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks (``) rather than single or double quotes.

// let firstName = "Abdul";
// let lastName = "Muhaimin";

// // Using template string for string interpolation
// let fullName = firstName + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//? String Interpolation:  Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}

// let age = 18;

// // String interpolation with variable
// let message = `I am ${age} years old.`;
// console.log(message);

// Multi-line Strings: Template strings make it easy to create multi-line strings without the need for concatenation or escape characters.
// let multiLineString = `
//   This is a multi-line
//   string using template literals.
//   It's much cleaner and easier to read.
// `;

// console.log(multiLineString);

//? Expression Evaluation: Template expressions can include any valid JavaScript expression.

//! Practice Time
// console.log("5 * " + num + " = " + 5 * num);
// let num = 5;
// for (let num = 0; num <= 10; num++) {
// 	console.log(`5 * ${num} = ${5 * num}`);
// }

//? Advantages:
//? Readability: Template strings make the code more readable, especially for complex string constructions.

//? Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape characters.

//? Expression Flexibility: Any JavaScript expression can be embedded within ${}.

//? Multi-line Support: Creating multi-line strings is more straightforward.

//* ==========================================
//* DEFAULT Parameters
//* =========================================

//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameters allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.

//? Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

//! Write a function to find sum of two numbers? What if during function call user only passed one argument?

// function sum(a = 20, myCurClass = 10) {
// 	return a + b;
// }
// console.log(sum(5, 15));

//* ==========================================
//*  FAT ARROW FUNCTION
//* =========================================

//? In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to write anonymous functions.

// const sum = function (a, b) {
// 	let result = `The sum of ${a} and ${b} is ${a + b}.`;
// 	console.log(result);
// };

// sum(5, 5);

// const sum = (a, b) => {
// 	let result = `The sum of ${a} and ${b} is ${a + b}.`;
// 	console.log(result);
// };

// sum(5, 5);

// const result = (a, b) => console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// result(10, 10);

//! How to convert the same in fat arrow function
// Syntax
// const functionName = (param1, param2, ...) => {
//     // Function body
//     return result; // Optional
//   };

// todo NOTES

//? 🚀 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5, 5));

//? 🚀 2: If there is only one parameter, the parentheses () around the parameter list can be omitted.
// const square = a => `The square of ${a} is  ${a * a}`;
// console.log(square(5));

//? 🚀 3: If there are no parameters, use an empty set of parentheses ().
// const greet = () => console.log("Plz LIKE SHARE & SUBSCRIBE!");
// greet();

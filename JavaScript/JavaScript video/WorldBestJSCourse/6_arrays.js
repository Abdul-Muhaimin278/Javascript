//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor

// let fruits = new Array("apple", 'orange', "banana");
// console.log(fruits);

//? Using array literal

// let fruits = ["apple", "orange", "banana"];
// console.log(fruits);

//? we can also create an empty array

// let arr = [];
// console.log(typeof arr);

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.

// let fruits = ["Apple", "Banana", "Peach"];
// console.log(fruits[3]);
// console.log(fruits["peach"]);

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits = ["Apple", "Banana", "Peach"];

// fruits[1] = "mango";
// console.log(fruits);

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

// let fruits = ["Apple", "Banana", "Mango", "Grapes", "Peach"];

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// for (let item of fruits) {
// 	console.log(item);
// }

// for (let item = 0; item < fruits.length; item++) {
// 	console.log(fruits[item]);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// for (let item in fruits) {
// 	console.log(item);
// }

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// Array.foreach(function callback(element) {
// 	console.log();
// }, this value);

// array.forEach(element => {

// });

// const myForEachArr = fruits.forEach((curElem, index, arr) => {
// 	return `${curElem} ${index}`;
// 	// console.log(arr);
// });

// console.log(myForEachArr);

// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

// const myMapArr = fruits.map((curElem, index, arr) => {
// 	return `my fav fruit is ${curElem} `;
// 	console.log(arr);
// });

// console.log(myMapArr);
// console.log(fruits);

//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// forEach -  Performs an action on each element
// map -  Creates a new array with transformed elements

// numbers.forEach((curElem) => {
// 	console.log(curElem * 2);
// });

// const doubleValue = numbers.map((curElem) => {
// 	return curElem * 2;
// });

// console.log(doubleValue);

//*  key differences
//!  Return value:
//?  forEach: It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.

//?  map: It returns a new array containing the results of applying a function to each element in the original array.The original array remains unchanged.

//!  Chaining:
//?  forEach: It doesn't return a value,so it can not be directly chained with other array methods.

//?  map: Since it returns a new array, you can chain other arrays methods after using map.

//*  Use case
//?  forEach: Used when you want you iterate over other elements and perform an action on each element, but you don't need an array.

//?  map: Used when you create a new array based on the transformation of each element in the original array.

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

// let fruits = ["Apple", "Banana", "Mango", "Grapes", "Peach"];

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

//? 1: push(): Method that adds one or more elements to the end of an array.

// console.log(fruits);
// fruits.push("guava")
// console.log(fruits.push("guava"));
// The push() method returns the new length.

//? 2: pop(): Method that removes the last element from an array.

// fruits.pop();
// console.log(fruits);
// console.log(fruits.pop());
// The pop() method returns the item that is removed.

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.

// fruits.unshift("guava");
// console.log(fruits);
// console.log(fruits.unshift("guava"));

//? 4: shift(): Method that removes the first element from an array.

// fruits.shift("");
// console.log(fruits);
// console.log(fruits.shift(""));

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
// let fruits = ["Apple", "Banana", "Mango", "Grapes", "Peach"];

//! what if you want to add the element at the end

// fruits.splice(5, 0, "melon", "pineapple");
// fruits.splice(fruits.length, 0, "Melon", "Pineapple");
// console.log(fruits);

//todo Challenge time
// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: Update march to March (update)?
// 4: Delete June from an array?

// const months = ["Jan", "march", "April", "June", "July"];
//? 1: adding december in the end.
// months.splice(5, 0, "Dec");
// months.splice(months.length, 0, "Dec");
// console.log(months);

//? 2: Return value of splice method.
// console.log(months.splice(5, 0, "Dec"));

//? 3: Updating to March.
// months.splice(1, 1, "March");
// console.log(months);
// const indexToUpdate = months.indexOf("march");
// console.log(indexToUpdate);
// months.splice(indexToUpdate, 1, "March");
// console.log(months);

// ? 4:Deleting June.
// months.splice(3, 1);
// console.log(months);
// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete, 1);
// console.log(months);

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(4, 5));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];

// const result = numbers.indexOf(6);
// console.log(result);
// const result1 = numbers.lastIndexOf(6);
// console.log(result1);
// const result = numbers.lastIndexOf(6, 8);
// console.log(result);

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(9);
// console.log(result);

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// const result = numbers.find((curElem) => {
// 	return curElem > 6;
// });

// console.log(result);
// console.log(typeof result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result1 = numbers.map((curElem) => curElem * 5);
// console.log(result1);
// const result2 = result1.findIndex((curElem) => {
// 	return curElem > 15;
// });

// console.log(result2);
// console.log(typeof result);

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.filter((curElem) => {
// 	return curElem > 0;
// });
// console.log(result);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// const updatedCart = numbers.filter((curElem) => {
// 	return curElem !== value;
// });
// console.log(updatedCart);

// Practice time
// !Example 2: Filtering Products by Price
// const products = [
// 	{ name: "Laptop", price: 1200 },
// 	{ name: "Phone", price: 800 },
// 	{ name: "Tablet", price: 300 },
// 	{ name: "Smartwatch", price: 150 },
// ];

// // let filterProducts = 500;
// const filterProducts = products.filter((curElem) => {
// 	return curElem.price <= 500;
// });

// console.log(filterProducts);

// Filter products with a price less than or equal to 500

// //! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// const uniqueValues = numbers.filter((curElem, index, arr) => {
// 	// console.log(curElem);
// 	// console.log(arr[index]);
// 	// console.log(index);
// 	// console.log(arr.indexOf(curElem));
// 	return arr.indexOf(curElem) === index;
// });

// console.log(uniqueValues);

// console.log(new Set(numbers));
// console.log([new Set(numbers)]);
// console.log([...new Set(numbers)]);

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];
// numbers.sort();
// console.log(numbers);

//? Compare callback function
//syntax
// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1 => switch the order
// if(b>a) return -1 => keep the order

// numbers.sort((a, b) => {
// 	if (a > b) return -1;
// 	if (b > a) return 1;
// });
// console.log(numbers);

//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
// 	if (a > b) {
// 		return 1;
// 	} else if (b > a) {
// 		return -1;
// 	}
// });
// console.log(sortedNumbers);
//? For descending order
// const sortedNumbers = numbers.sort((a, b) => {
// 	if (a > b) {
// 		return -1;
// 	} else if (b > a) {
// 		return 1;
// 	}
// });

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result);

//! Using map method, write a function that makes an array of strings and returns new array where each string is capitalized.
//Original
// const words = ["apple", "banana", "cherry", "date"];
// const words = ["APPLE", "BANANA", "CHERRY", "DATE"];
// const result = words.map((curElem) => {
// 	return curElem.toLowerCase();
// });

// console.log(result);

//! Using the map method, write a function that takes an array of numbers and returns new array with each number is squared, but inly if it is an even number.
// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers
// 	.map((curElem) => {
// 		if (curElem % 2 === 0) {
// 			return curElem * curElem;
// 		}
// 	})
// 	.filter((curElem) => curElem !== undefined);
// console.log(result);

// const evenSquare = numbers.map((curNum) =>
// 	curNum % 2 === 0 ? curNum * curNum : undefined
// );
// console.log(evenSquare);
//! Using the map method, write a function that takes an array of name sand returns a new array where each name is prefixed with "Mr.".

// const names = ["Arslan", "Ahad", "Bilal", "Waqas"];

// const prefixName = names.map((curName) => `Mr.${curName}`);
// console.log(prefixName);

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

// const productPrice = [100, 200, 300, 400, 500];

// const totalPrice = productPrice.reduce((accumulator, curElem) => {
// 	return accumulator + curElem;
// }, 0);

// console.log(totalPrice);

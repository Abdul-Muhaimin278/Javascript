// Frequency Map of Nested Arrays
// Statement: Count how many times each number appears in a nested array of arbitrary depth.
// Data:
// nested = [1, [2, 3], [1, [2, 1, 4]], 3]
// Unique Combinations from Two Arrays
// Statement: Generate all possible pairs from two arrays, but ensure no duplicate pairs if values repeat.
// Data:
// arr1 = [1, 2]
// arr2 = [2, 3]
// Object with Dynamic Method Names
// Statement: Create an object with keys as subjects and methods that return marks dynamically.
// Data:
// subjects = ["math", "english", "science"]
// marks = [85, 90, 78]
// Deep Merge of Objects
// Statement: Merge two objects deeply where nested keys are also merged instead of overwritten.
// Data:
// obj1 = { a: 1, b: { x: 10, y: 20 } }
// obj2 = { b: { y: 30, z: 40 }, c: 3 }
// Callback Chain Execution
// Statement: Write a function that executes an array of callbacks sequentially, passing the result from one to the next.
// Data:
// callbacks = [
// x => x + 2,
// x => x * 3,
// x => x - 5
// ]
// startValue = 10
// Filter Objects by Nested Property
// Statement: Filter users who have a city starting with “K” inside a nested address object.
// Data:
// users = [
// { name: "Ali", address: { city: "Karachi" } },
// { name: "Sara", address: { city: "Lahore" } },
// { name: "Omar", address: { city: "Kabul" } }
// ]
// Array of Objects to Map with Array Values
// Statement: Convert an array of objects to a Map where keys are names and values are arrays of marks.
// Data:
// students = [
// { name: "Ali", marks: 80 },
// { name: "Sara", marks: 90 },
// { name: "Ali", marks: 85 }
// ]
// Find Missing Numbers in Range
// Statement: Given an array of numbers, find the numbers missing in a consecutive range (min → max).
// Data:
// numbers = [1, 3, 4, 6, 7]
// Flatten and Deduplicate Nested Arrays
// Statement: Flatten a deeply nested array and remove duplicates.
// Data:
// nested = [1, [2, 3, [1, 2]], 3, [4]]
// Group by Multiple Properties
// Statement: Group objects first by grade, then by section inside grade.
// Data:
// students = [
// { name: "Ali", grade: "A", section: 1 },
// { name: "Sara", grade: "A", section: 2 },
// { name: "Omar", grade: "B", section: 1 }
// ]
// Rotate Array Elements
// Statement: Rotate an array n times to the right, without using built-in reverse methods.
// Data:
// arr = [1, 2, 3, 4, 5]
// n = 2
// Intersection of Multiple Arrays
// Statement: Find elements that exist in all arrays.
// Data:
// arrs = [
// [1, 2, 3, 4],
// [2, 3, 5],
// [2, 3, 6]
// ]
// Dynamic Method Addition
// Statement: Given an object and an array of method names, add methods dynamically that log their name when called.
// Data:
// obj = {}
// methods = ["start", "stop", "pause"]
// Custom Map Filtering
// Statement: Given a Map of names → scores, return a Map of only those with score > 80.
// Data:
// scores = new Map([["Ali", 72], ["Sara", 90], ["Omar", 85]])
// Nested Object Property Summation
// Statement: Given a nested object of departments → employees → salaries, calculate the total salary.
// Data:
// company = {
// hr: { emp1: 50000, emp2: 60000 },
// it: { emp1: 70000, emp2: 80000 },
// sales: { emp1: 55000 }
// }

// Answers
// Frequency Map of Nested Arrays
// Statement: Count how many times each number appears in a nested array of arbitrary depth.
// Data:
// function freqMap(items, freq = {}) {
//   for (let item of items) {
//     console.log("item: ", item);
//     if (Array.isArray(item)) {
//       freqMap(item, freq);
//     } else {
//       freq[item] = (freq[item] || 0) + 1;
//     }
//   }
//   return freq;
// }
// let nested = [1, [2, 3], [1, [2, 1, 4]], 3];

// console.log(freqMap(nested));
// let nested = [2, 2, 3, 4];
// freq = {};
// for (let items of nested) {
//   freq[items] = (freq[items] || 0) + 1;
// }
// console.log(freq);

//  Unique Combinations from Two Arrays
// Statement: Generate all possible pairs from two arrays, but ensure no duplicate pairs if values repeat.
// Data:
// let arr1 = [1, 2];
// let arr2 = [2, 3];
// array = [];
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     array.push(`(${arr1[i]} , ${arr2[j]})`);
//   }
// }
// console.log("array: ", array);

// Object with Dynamic Method Names
// Statement: Create an object with keys as subjects and methods that return marks dynamically.
// Data:
// let subjects = ["math", "english", "science"];
// let marks = [85, 90, 78];
// let markSheet = {};
// for (let i = 0; i < subjects.length; i++) {
//   markSheet[subjects[i]] = function () {
//     return marks[i];
//   };
// }

// console.log(markSheet.math());
// console.log(markSheet.english());
// console.log(markSheet.science());

// Deep Merge of Objects
// Statement: Merge two objects deeply where nested keys are also merged instead of overwritten.
// Data:
// let obj1 = { a: 1, b: { x: 10, y: 20 } };
// let obj2 = { b: { y: 30, z: 40 }, c: 3 };
// let obj3 = { ...obj1, ...obj2 };
// console.log("obj3: ", obj3);
// function merged(obj1, obj2) {
//   let result = { ...obj1 };
//   for (let keys in obj2) {
//     console.log("keys: ", keys);
//     if (typeof obj2[keys] === "object" && !Array.isArray(obj2[keys])) {
//       result[keys] = merged(result[keys] || result[keys], obj2[keys]);
//     } else {
//       result[keys] = obj2[keys];
//     }
//   }
//   return result;
// }
// console.log(merged(obj1, obj2));

// Callback Chain Execution
// Statement: Write a function that executes an array of callbacks sequentially, passing the result from one to the next.
// Data:
// let callbacks = [(x) => x + 2, (x) => x * 3, (x) => x - 5];
// let startValue = 10;
// function result(callbacks, startValue) {
//   for (let callback of callbacks) {
//     startValue = callback(startValue);
//     console.log("startValue: ", startValue);
//   }
// }
// console.log(result(callbacks, startValue));
// console.log(startValue);

// Filter Objects by Nested Property
// Statement: Filter users who have a city starting with “K” inside a nested address object.
// Data:
// let users = [
//   { name: "Ali", address: { city: "Karachi" } },
//   { name: "Sara", address: { city: "Lahore" } },
//   { name: "Omar", address: { city: "Kabul" } },
// ];

// let result = users.filter((val) => val.address.city.startsWith("K"));
// console.log(result);

// Array of Objects to Map with Array Values
// Statement: Convert an array of objects to a Map where keys are names and values are arrays of marks.
// Data:
//! need to view again
//? let students = [
////   { name: "Ali", marks: 80 },
//*   { name: "Sara", marks: 90 },
//   { name: "Ali", marks: 85 },
//   { name: "Shane", marks: 88 },
// ];
// function mapArray(students) {
//   let result = new Map();
//   let arrayOfALi = [];
//   let arrayOfSara = [];
//   for (let student of students) {
//     if (student.name === "Ali") {
//       arrayOfALi.push(student.marks);
//       result[student.name] = arrayOfALi;
//     } else if (student.name === "Sara") {
//       arrayOfSara.push(student.marks);
//       result[student.name] = arrayOfSara;
//     }
//   }
//   console.log("arrayOfALi: ", arrayOfALi);
//   console.log("arrayOfSara: ", arrayOfSara);
//   return result;
// }
// console.log(mapArray(students));

// Find Missing Numbers in Range
// Statement: Given an array of numbers, find the numbers missing in a consecutive range (min → max).
// Data:
//! need to view again
// let numbers = [1, 8, 15, 3, 4, 6, 7];
// min = numbers[0];
// max = numbers[4];
// let missing = [];
// for (let i = min; i <= max; i++) {
//   if (!numbers.includes(i)) {
//     missing.push(i);
//   }
// }

// console.log(missing);

// Flatten and Deduplicate Nested Arrays
// Statement: Flatten a deeply nested array and remove duplicates.
// Data:
// let nested = [1, [2, 3, [1, 2]], 3, [4], 6];
// function flattenArray(nested, flat = []) {
//   for (let elements in nested) {
//     if (Array.isArray(nested[elements])) {
//       flattenArray(nested[elements], flat);
//     } else if (!flat.includes(nested[elements])) {
//       flat.push(nested[elements]);
//     }
//   }
//   return flat;
// }
// console.log(flattenArray(nested));

// Group by Multiple Properties
// Statement: Group objects first by grade, then by section inside grade.
// Data:
// let students = [
//   { name: "Ali", grade: "A", section: 1 },
//   { name: "Sara", grade: "A", section: 2 },
//   { name: "Omar", grade: "B", section: 1 },
// ];
// let final = [];
// for (let student of students) {
//   let grade = student.grade;
//   let section = student.section;
//   if (!final[grade]) {
//     final[grade] = {};
//   }
//   final[`GA ${grade}`][`section ${section}`] = student.name;
// }
// console.log(final);

// Rotate Array Elements
// Statement: Rotate an array n times to the right, without using built-in reverse methods.
// Data:
// let arr = [1, 2, 3, 4, 5];
// // n = 2;
// let firstRotation = [];
// let finalRotation = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   firstRotation.push(arr[i]);
// }
// for (let j = firstRotation.length - 1; j >= 0; j--) {
//   finalRotation.push(firstRotation[j]);
// }
// console.log(firstRotation);
// console.log(finalRotation);

// Intersection of Multiple Arrays
// Statement: Find elements that exist in all arrays.
// Data:
// let arrs = [
//   [1, 2, 3, 4],
//   [2, 3, 5],
//   [2, 3, 6],
// ];
// let first = arrs[0];
// let second = arrs[1];
// let third = arrs[2];
// let Intersection = [];
// for (let i = 0; i < first.length; i++) {
//   for (let j = 0; j < second.length; j++) {
//     for (let k = 0; k < third.length; k++) {
//       if (first[i] === second[j] && second[j] === third[k]) {
//         Intersection.push(third[k]);
//       }
//     }
//   }
// }
// console.log(Intersection);

// Dynamic Method Addition
// Statement: Given an object and an array of method names, add methods dynamically that log their name when called.
// Data:
// let methods = ["start", "stop", "pause"];
// let obj = {};

// for (let names in methods) {
//   obj[methods[names]] = function () {
//     return methods[names];
//   };
// }

// console.log(obj.start());
// console.log(obj.stop());
// console.log(obj.pause());

// Custom Map Filtering
// Statement: Given a Map of names → scores, return a Map of only those with score > 80.
// Data:
// let scores = new Map([
//   ["Ali", 72],
//   ["Sara", 90],
//   ["Omar", 85],
// ]);
// let result = new Map([...scores].filter(([names, score]) => score > 80));

// console.log(result);

// Nested Object Property Summation
// Statement: Given a nested object of departments → employees → salaries, calculate the total salary.
// Data:
// let company = {
//   hr: { emp1: 50000, emp2: 60000 },
//   it: { emp1: 70000, emp2: 80000 },
//   sales: { emp1: 55000 },
// };

// // let result = company.hr.emp1;
// // console.log("result: ", result);
// let total = 0;
// for (let emp in company) {
//   for (let salaries in company[emp]) {
//     total += company[emp][salaries];
//   }
// }
// console.log(total);

// Flatten Nested Arrays
// Statement: Flatten a deeply nested array
// Data:
// let nested1 = [1, [2, 3, [1, 2]], 3, [4]];
// function flattenArray(nested, flat = []) {
//   for (let elements in nested) {
//     if (Array.isArray(nested[elements])) {
//       flattenArray(nested[elements], flat);
//     } else if (!flat.includes(nested[elements])) {
//       flat.push(nested[elements]);
//     }
//   }
//   return flat;
// }
// console.log(flattenArray(nested));

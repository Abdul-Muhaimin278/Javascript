// Filter Students Who Passed
// Statement: Print students with marks >= 50.
// Data:
// students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 72 },
//   { name: "Omar", marks: 55 }
// ]
// Find Second Largest Number in Array
// Statement: From an array of numbers, find the second largest.
// Data:
// numbers = [12, 35, 1, 10, 34, 1]
// Count Frequency of Elements in Array
// Statement: Count how many times each element appears.
// Data:
// arr = [2, 3, 2, 4, 3, 5, 2]
// Merge Two Arrays and Sort
// Statement: Merge arrays and sort in ascending order.
// Data:
// arr1 = [5, 2, 9]
// arr2 = [1, 7, 3]
// Check if Array is Sorted
// Statement: Determine if an array is sorted in ascending order.
// Data:
// arr = [1, 2, 3, 5, 4]
// Remove Falsy Values from Array
// Statement: Create a new array without false, 0, "", null, undefined, NaN.
// Data:
// arr = [0, 1, false, 2, '', 3, null, 4, undefined, 5]
// Capitalize First Letter of Each Word
// Statement: Capitalize first letter in a sentence.
// Data:
// sentence = "javascript is fun"
// Find Duplicate Names in Array of Objects
// Statement: Check if any names repeat in student list.
// Data:
// students = [
//   { name: "Ali" },
//   { name: "Sara" },
//   { name: "Ali" },
//   { name: "Omar" }
// ]
// Group Numbers by Even and Odd
// Statement: Separate array into even and odd numbers.
// Data:
// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Count Words Starting with a Specific Letter
// Statement: Count words starting with a given letter.
// Data:
// sentence = "JavaScript is just joyful"
// letter = "j"
// Check if Two Arrays Have Common Elements
// Statement: Determine if two arrays share at least one element.
// Data:
// arr1 = [1, 2, 3]
// arr2 = [4, 5, 3]
// Simple Inventory Update
// Statement: Update stock of a product based on sold quantity.
// Data:
// product = { name: "Shirt", stock: 50 }
// sold = 12
// Problem 8: Find Students with Duplicate Names but Keep Only the LAST Occurrence
// Statement
// You are given a list of students.
//  Some names appear more than once.
// Task:
//  Return only those students whose names are duplicated,
//  but keep ONLY the LAST occurrence of each duplicated name.
// Data

// let students = [
//   { name: "Ali", marks: 85 },
//   { name: "Sara", marks: 92 },
//   { name: "Ali", marks: 78 },
//   { name: "Omar", marks: 88 },
//   { name: "Sara", marks: 90 },
//   { name: "Zain", marks: 70 },
// ];
// Hint
// • Think backwards
// • Ask yourself: “Is this item appearing again AFTER this index?”
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Problem 8: Keep Highest Marks per Duplicate Name
// Statement
// From a list of students:
// If a name appears more than once
// Keep only ONE object
// That object must have the highest marks for that name
// Unique names must be removed
// Data

// let students = [
//   { name: "Ali", marks: 85 },
//   { name: "Sara", marks: 92 },
//   { name: "Ali", marks: 78 },
//   { name: "Omar", marks: 88 },
//   { name: "Sara", marks: 90 },
//   { name: "Zain", marks: 70 },
// ];
// Problem 8: Keep Highest Marks per Duplicate Name
// Statement
// From a list of students:
// If a name appears more than once
// Keep only ONE object
// That object must have the highest marks for that name
// Unique names must be removed
// Data

// let students = [
//   { name: "Ali", marks: 85 },
//   { name: "Sara", marks: 92 },
//   { name: "Ali", marks: 78 },
//   { name: "Omar", marks: 88 },
//   { name: "Sara", marks: 90 },
//   { name: "Zain", marks: 70 },
// ];
// Answers

// 1. Filter Students Who Passed
// Statement: Print students with marks >= 50.
// Data:
// let students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 72 },
//   { name: "Omar", marks: 55 },
// ];

// let passed = "";
// for (let student of students) {
//   if (student.marks >= 50) {
//     passed = student.name;
//     console.log(passed);
//   }
// }

// 2. Find Second Largest Number in Array
// Statement: From an array of numbers, find the second largest.
// Data:
// let numbers = [12, 35, 1, 10, 34, 1];
// numbers.sort((a, b) => {
//   return b - a;
// });
// let secondLargest = numbers[1];

// console.log(secondLargest);

// 3. Count Frequency of Elements in Array
// Statement: Count how many times each element appears.
// Data:
// let arr = [2, 3, 2, 4, 3, 5, 2];
// let freq = {};
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (freq[num]) {
//     freq[num] = freq[num] + 1;
//   } else {
//     freq[num] = 1;
//   }
// }
// console.log(freq);

// 4. Merge Two Arrays and Sort
// Statement: Merge arrays and sort in ascending order.
// Data:
// let arr1 = [5, 2, 9];
// let arr2 = [1, 7, 3];
// let combined = arr1.concat(arr2);
// console.log("combined: ", combined);
// // combined.sort(function (a, b) {
// //   return a - b;
// // });
// for (let i = 0; i < combined.length; i++) {
//   for (let j = i + 1; j < combined.length; j++) {
//     if (combined[i] > combined[j]) {
//       let swap = combined[i];
//       combined[i] = combined[j];
//       combined[j] = swap;
//     }
//   }
// }
// console.log(combined);

// 5. Check if Array is Sorted
// Statement: Determine if an array is sorted in ascending order.
// Data:
// let arr = [1, 2, 3, 5, 4];
// let isSorted;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       isSorted = false;
//     } else {
//       isSorted = true;
//     }
//   }
// }
// if (isSorted) {
//   console.log("Array is sorted in ascending order.");
// } else {
//   console.log("Array is not sorted in ascending order.");
// }

// 6. Statement: Capitalize first letter in a sentence.
// Data:
// let sentence = "javascript is fun";
// let words = sentence.split(" ");
// console.log("words: ", words);
// let final = [];
// for (let word of words) {
//   final.push(word[0].toUpperCase() + word.slice(1));
// }
// final = final.join(" ");
// console.log(final);

// 7. Find Duplicate Names in Array of Objects
// Statement: Check if any names repeat in student list.
// Dat

// let students = [
//   { name: "Ali" },
//   { name: "Sara" },
//   { name: "Ali" },
//   { name: "Omar" },
// ];
// // console.log("Names: ", students);
// let filterNames = students.filter((value, index) => {
//   students.findIndex((val) => val.name === value.name) !== index;
//   console.log(
//     " students.findIndex((val) => val.name === value.name): ",
//     students.findIndex((val) => val.name === value.name)
//   );
//   console.log("index: ", index);
//   console.log("value.name: ", value.name);
// });
// console.log(filterNames);
// // const obj = {
//   subObj: {
//     name: "123",
//   },
// };

// console.log(filterNames);
// for (let i = 0; i < students.length; i++) {
//   if (uniqueNames.indexOf(students[i].name) == -1) {
//     uniqueNames.push(students[i].name);
//   } else if (uniqueNames.indexOf(students[i].name) !== -1) {
//     duplicateNames = students[i].name;
//     console.log(`${duplicateNames} is repeated`);
//   }
// }

// console.log(filterNames);
// 8. Remove Falsy Values from Array
// Statement: Create a new array without false, 0, "", null, undefined, NaN.
// Data:
// let arr = [0, 1, false, 2, "", 3, null, 4, undefined, 5];
// let finalArr = [];
// for (let elements of arr) {
//   console.log("elements: ", Boolean(elements));
//   if (elements) {
//     finalArr.push(elements);
//   }
// }
// console.log(finalArr);

// 9. Group Numbers by Even and Odd
// Statement: Separate array into even and odd numbers.
// Data:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArray = [];
// for (let num of numbers) {
//   if (num % 2 == 0) {
//     newArray.push(num);
//   }
// }

// for (let num of numbers) {
//   if (num % 2 !== 0) {
//     newArray.push(num);
//   }
// }
// console.log(newArray);
// 10. Count Words Starting with a Specific Letter
// Statement: Count words starting with a given letter.
// Data:
// let sentence = "JavaScript is just joyful";
// let letter = "j";
// let count = 0;
// // let words = sentence.split(" ");
// for (let word of sentence) {
//   console.log("word: ", word);
//   if (word[0].toLowerCase() == "j") {
//     count++;
//   }
// }
// console.log(count);

// 11. Check if Two Arrays Have Common Elements
// Statement: Determine if two arrays share at least one element.
// Data:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 3];
// let commonElements = false;
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] == arr2[j]) {
//       commonElements = true;
//     }
//   }
// }
// if (commonElements) {
//   console.log("Yes, arrays share the same element");
// } else {
//   console.log("Nope, arrays don't share the same element");
// }

// Simple Inventory Update
// Statement: Update stock of a product based on sold quantity.
// Data:
// let product = { name: "Shirt", stock: 50 };
// let sold = 12;
// product.stock -= sold;
// console.log(product);

// const array = [1, 2, 3, 2, 4, 5, 4, 5];

// const duplicates = array.filter((item, index) => {
//   console.log("index: ", index);
//   console.log("item: ", item);
//   console.log("array.indexOf(item): ", array.indexOf(item));
//   return array.indexOf(item) !== index;
// });
// console.log(result);

// Problem 8: Find Students with Duplicate Names but Keep Only the LAST Occurrence
// Statement
// Hint
// • Think backwards
// • Ask yourself: “Is this item appearing again AFTER this index?”
// You are given a list of students.
//  Some names appear more than once.
// Task:
//  Return only those students whose names are duplicated,
//  but keep ONLY the LAST occurrence of each duplicated name.
// Data

// let students = [
//   { name: "Ali", marks: 85 },
//   { name: "Sara", marks: 92 },
//   { name: "Ali", marks: 78 },
//   { name: "Omar", marks: 88 },
//   { name: "Sara", marks: 90 },
//   { name: "Zain", marks: 70 },
// ];
// let result = students.filter(
//   (value, index, arr) =>
//     arr.findIndex((val) => val.name === value.name) !== index
// );
// console.log(result);
//   console.log(
//     "arr.findIndex((val) => val.name === value.name): ",
//     arr.findIndex((val) => val.name === value.name)
//   );

//   console.log("index: ", index);
//   console.log("value.name: ", value.name);
// let result = students.filter((value, index) => {
//   if (
//     students.findIndex((val) => val.name === value.name) !==
//     students.findLastIndex((v) => v.name === value.name)
//   ) {
//     return value;
//   }
//   console.log("index: ", index);
//   console.log("value.name: ", value.name);
//   console.log(
//     "students.findLastIndex((val) => val.name == value.name): ",
//     students.findLastIndex((val) => val.name == value.name)
//   );
// });
// console.log(result);

// let result = students.filter(
//   (value, index, arr) =>
//     index == arr.findLastIndex((val) => val.name === value.name) &&
//     arr.findLastIndex((val) => val.name === value.name) !==
//       arr.findIndex((v) => v.name === value.name)
// );
// console.log(result);
// let result = students.filter((value, index) => {
//   value.name;
//   console.log("value.name: ", value.name);
//   console.log("index: ", index);
// });
// let indexFinding = students.findIndex((val) => {
//   val.name;

//   console.log("val.name: ", val.name);
// });

// let result = students.filter((value) => {
//   return students.findLastIndex((val) => val.name == value.name);
// });

// Problem 8: Keep Highest Marks per Duplicate Name
//  Statement
// From a list of students:
// If a name appears more than once
// Keep only ONE object
// That object must have the highest marks for that name
// Unique names must be removed
// Data

let students = [
  { name: "Sara", marks: 90 },
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 92 },
  { name: "Omar", marks: 88 },
  { name: "Zain", marks: 70 },
  { name: "Ali", marks: 78 },
];

let result = students.filter(
  (value) =>
    students.findIndex(
      (val) => val.name === value.name && val.marks < value.marks
    ) !== -1
);
console.log(result);
// console.log(
//   "arr.findLastIndex((val) => (val.name = value.name)): ",
//   arr.findLastIndex((val) => (val.name = value.name))
// );
// console.log("index: ", index);
// console.log(
//   "arr.findIndex((val) => (val.name = value.name)): ",
//   arr.findIndex((val) => (val.name = value.name))
// );
// console.log("value: ", value.name);
// );
// console.log(duplicate);

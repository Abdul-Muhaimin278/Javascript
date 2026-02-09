//* ======================================
//* String in JavaScript
//* ======================================

//? Strings in javaScript are fundamental data types that represents a sequence of characters.

// Note:
//? Strings created with single or double quotes work the same.
// There is no difference between two.

//* String properties:
//? Length: Property that the returns the length of the string(number of characters).

// const str = "Hello, World!";
// console.log(str.length);
// including space n all

//* ======================================
//* Escape Character
//* ======================================

//? 1: Escape character: In JavaScript, the backslash \ is used as an escape character.It allows you to include special characters in a string.

// Code    Result    Description
//  \'       '        Single quote
//  \"       "        Double quote
//  \\       \        Backlash

// let text = "My name is 'Abdulmuhaimin' & and I am a Beginner Developer.";
// let text = 'My name is "Abdulmuhaimin" & and I am a Beginner Developer.';
// let text = "My name is \"Abdulmuhaimin\" & \nI am a 'Beginner' Developer.";
// let text = "My name is \"Abdulmuhaimin\" & \\ I am a 'Beginner' Developer.";

// console.log(text);

//* ======================================
//* String Search Methods
//* ======================================

//? 2: String Search Methods
//? a: indexOf(): The indexOf() method returns the index (position) of first occurrence of a string in a string or ti returns -1 if the string is not found:
//syntax
//indexOf(searchString)
//indexOf(searchString, position)

let text = "Abdul Muhaimin";
text.indexOf("Abdul");
console.log(text.indexOf("i"));
// The indexOf() is case sensitive

let strArr = Array.from(text);
console.log(strArr);
let strMap = strArr.map((curElem, index) => `${curElem}_${index}`);
console.log(strMap);

//? b: lastIndexOf(): The lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
//syntax
//lastIndexOf(searchString)
//lastIndexOf(searchString, position)

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let text = "Hello JavaScript,welcome to my JavaScript learning";
// let index = text.indexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript,40");
// console.log(index);

//? search(): The search() method searches a string for a string(regular expression) and returns the position of the match.
// Returns the index number where the first match is found. Returns -1 if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.search(/javascript/i);
// console.log(result);

//* Important Tips
// The search() method cannot take a second start position argument.
// e.g
// let result = text.search(/javascript/i, 40);
// The indexOf() method cannot take power ful search values(regular expressions)
// They accept the same arguments (parameters), and return the same value.

//? match(): The match() method returns an array of the matched values or null if no match is found

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.match("Script");
// let result = text.match(/JavaScript/g);
// console.log(result);

//todo: Here js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
// let result = text.match(/JavaScript/);

//? matchAll(): The matchAll() returns an iterator of all matches, providing detailed information about each match.Returns an empty iterator if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let matchResult = text.matchAll("JavaScript");

//todo: Here js converts the normal text into regular expression text.match(/JavaScript/g); also adds a g flag at end.

// console.log(...matchResult);

// for (let item of matchResult) {
// 	console.log(item[0]);
// }

// for (let index of matchResult) {
// 	console.log(index.index);
// }

// for (let { index } of matchResult) {
// 	console.log(index);
// }

//? includes(): The includes() method returns true if the string contain the specified value, and false otherwise.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let includeResult = text.includes("Java");
// let includeResult = text.includes("Javac");
// console.log(includeResult);

// Note: includes() is case sensitive. includes() in an ES6 feature.

//? startsWith(): The startsWith() method returns is a string begins with specified value. Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("welcome");
// let result = text.startsWith("Hello");

// console.log(result);

//* start position for the search can be specified
// let result = text.startsWith("Welcome,18");
// let result = text.startsWith("Welcome,17");

// console.log(result);

//? endsWith(): The endsWith() method returns is a string ends with specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.endsWith("welcome");
// let result = text.endsWith("course");

// console.log(result);

//* ======================================
//* Extracting String Parts
//* ======================================

//! Extracting Strings Parts:

//? String.prototype.substr() is deprecated

//? a: slice() extracts a part of string and returns the extracted part in a new string.
//syntax
//slice(start, end)

// Todo JavaScript counts position from zero.
//? First position is 0 . Second position is 1 .

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.slice(6);
// let result = text.slice(0, 5);
// console.log(result);

//? a: substring(): Extracts a portion of strings based in the starting and ending indices
// camelCase is used to separate words, substring() is not to be intended as Sub String but Substring.

//syntax
// substring(indexStart) // index starts with 0
//substring(indexStart, indexEnd)

//* substring() is similar to slice(). The is that itn start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.substring(3);
// let result = text.substring(0, 16);
// let result = text.substring(-5);
// console.log(result);

//! Similarities
//todo: In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring

// DIFFERENCE: if you write negative index in slice() it will count index from backwards while in substring it will be equal to zero.

//* ======================================
//* Interview Questions
//* ======================================

//! What is the output of following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.slice(1);
// let result = text.replace("Hello", "Ciao");
// let result = text.substring(1);
//? Optional
// let result = text.replace("JavaScript", "");
// let result = text.replaceAll("JavaScript", "bot");
// console.log(result);

//* ======================================
//* Extracting String Characters
//* ======================================

//! Extracting String Characters:
// There are three methods of extracting string characters:

//? The charAt(position) method
//? The charCodeAt(position) method
//? The at(position) method

//? charAt(): The charAt() returns the character at a specified index(position) in a string
// JavaScript counts //position from zero

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(6);
// let result = text.charAt(-6);
// console.log(result);

//? charCodeAt(): The charCodeAt() returns the code of the character at a specified index(position) in a string. The method returns a UTF-16 code(an integer between 0 and 65535 )

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// let result = text.charCodeAt(-6);
// console.log(result);

//todo ES2022 introduced the string at() method:
//? at(): The at() returns the character at a specified index(position) in a string. The at() method returns the same as charAt().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

//* Note
// The at() method is a new addition to JavaScript
// It allows the use of negative indexes while charAt() do not.
// Now you can use meString.at(-2) instead of charAt(myString.length-2).

//* ======================================
//* Replacing String Content:
//* ======================================
//! Replacing String Content:
//? replace(): the replace() method is used to replace a specified value with another value.
// const str = "Hello World!";
// let newStr = str.replace("Hello", "JavaScript");
// console.log(newStr);

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use i flag in the regular expressions.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/gi, "Abdul");
// console.log(replacedString);

//* ======================================
//* Other Useful Methods:
//* ======================================

//! Other Useful Methods:
//? toUppercase and toLowerCase: Converts the string to uppercase and lowercase.

// const str = "JavaScript";
// console.log(str.toUpperCase()); //Output: JAVASCRIPT
// console.log(str.toLowerCase()); //Output: javascript

//? trim: Removes whitespace from both ends of string.
// const str = "   Hello, world!    ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

//? split: Splits the string in an array of substrings based on a specified delimiter.

// const str = "apple, banana, orange";
// let strArr = str.split(",").reverse().join();
// console.log(strArr);

//* ======================================
//* Interview Questions
//* ======================================

//! 1: Write a JavaScript function that prints the letter "a" to "z" in the console.you should use a loop to iterate through the letters print each one ona new line.

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for (let char = 97; char <= 122; char++) {
// 	console.log(String.fromCharCode(char));
// }

//! 2: Write a function to count the number of vowel words in string?

// const countVowels = (str) => {
// 	const vowels = "aeiou";
// 	let count = 0;
// 	for (let char of str) {
// 		// console.log(char);
// 		// console.log(str. includes(char));
// 		if (vowels.includes(char)) {
// 			count++;
// 		}
// 	}
// 	return count;
// };

// console.log(countVowels("Hello world"));
// console.log(countVowels("my name is abdul @ muhaimin"));

//! 3: Write a function to count the numbers of vowels in a string or not?

// const checkAllVowelPresentOrNot = (str) => {
// 	const vowels = "aeiou";

// 	for (let char of vowels) {
// 		// console.log(char);
// 		// console.log(str. includes(char));
// 		if (!str.includes(char)) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

// let str = "my name is abdul @ muhaimin";
// console.log(str.includes("a"));

// console.log(checkAllVowelPresentOrNot("my name is Abdul Mohaimin"));

//! 4: Write a Java/script function to check if the given string is pangram or not?

// const pangramChecker = (str) => {
// 	let inputArr = str.split("");
// 	// console.log(inputArr);
// 	// console.log("k".charCodeAt(0));
// 	const values = inputArr.filter(
// 		(curElem) =>
// 			curElem.charCodeAt() >= "a".charCodeAt() &&
// 			curElem.charCodeAt() <= "z".charCodeAt()
// 	);
// 	// console.log(values);
// 	return [...new Set(values)].length === 26;
// };

// console.log(pangramChecker("The quick brown fox jumps over the lazy dogs"));

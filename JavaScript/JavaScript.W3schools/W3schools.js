// let text = "Hello this the w3schools JavaScript";
// const myArr = text.split("");

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// const sorted = months.toReversed();
// console.log(months.toString());

// const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => {
// 	return a - b;
// });
// console.log(points);
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// text = "";
// for (let i = 0; i < myArr.length; i++) {
// 	text += myArr[i] + "<br>";
// }

// console.log(myArr);

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// let text = "";
// for (let x of keys) {
// 	text += x + " ";
// }
// console.log(text);

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);

// const myArr = Array.from("ABCDEFG");
// console.log(myArr);

// const d = new Date("2015");
// console.log(d);

// for (let i = 0; i <= 5; i++) {
// 	let pattern = "* ";
// 	for (let j = 1; j <= i; j++) {
// 		pattern += " * ";
// 	}
// 	console.log(pattern);
// }

// for (let i = 4; i >= 0; i--) {
// 	let pattern = "* ";
// 	for (let j = 1; j <= i; j++) {
// 		pattern += " * ";
// 	}
// 	console.log(pattern);
// }

// for (let i = 0; i <= 5; i++) {
// 	let pattern = "* ";
// 	for (let j = 1; j <= i; j++) {
// 		pattern += " * ";
// 	}
// 	console.log(pattern);
// }

// for (let i = 4; i >= 0; i--) {
// 	let pattern = "* ";
// 	for (let j = 1; j <= i; j++) {
// 		pattern += " * ";
// 	}
// 	console.log(pattern);
// }

//! eeeeeeeeeeeeeeeeee

// Top: Increasing from 0 to 5
// for (let i = 0; i <= 5; i++) {
// 	let pattern = "* ";
// 	for (let j = 1; j <= i; j++) {
// 		pattern += "* ";
// 	}
// 	console.log(pattern);
// }

// Right: Decreasing from 5 to 0
// for (let i = 5; i >= 0; i--) {
// 	let pattern = "";
// 	for (let j = 0; j < 5 - i; j++) {
// 		pattern += "   "; // Adding spaces for the right alignment
// 	}
// 	for (let j = 0; j >= i; j++) {
// 		pattern += " * ";
// 	}
// 	console.log(pattern);
// }

// Top: Increasing from 0 to 5
// for (let i = 0; i <= 5; i++) {
// 	let pattern = "* ";
// 	for (let j = 1; j <= i; j++) {
// 		pattern += "* ";
// 	}
// 	console.log(pattern);
// }

// Right: Decreasing from 5 to 0
// for (let i = 5; i >= 0; i--) {
// 	let pattern = "";
// 	for (let j = 0; j < 5 - i; j++) {
// 		pattern += "  "; // Adding spaces for the right alignment
// 	}
// 	for (let j = 0; j <= i; j++) {
// 		pattern += "* ";
// 	}
// 	console.log(pattern);
// }

//!        system
// const bankSystem = () => {
// 	let balance = 1000; // Starting balance
// 	const correctUsername = "u";
// 	const correctPassword = "p";

// 	const login = () => {
// 		let username = prompt("Enter your username:");
// 		let password = prompt("Enter your password:");

// 		if (username === correctUsername && password === correctPassword) {
// 			alert("Login successful!");
// 			showMenu();
// 		} else {
// 			alert("Incorrect username or password. Please try again.");
// 			login();
// 		}
// 	};

// 	const showMenu = () => {
// 		while (true) {
// 			let choice = prompt(
// 				"Choose an option: \n1. Check Balance \n2. Withdraw \n3. Log Out \n4. Deposit"
// 			);
// 			if (choice === "1") {
// 				checkBalance();
// 			} else if (choice === "2") {
// 				withdraw();
// 			} else if (choice === "3") {
// 				alert("Logged out.");
// 				break;
// 			} else if (choice === "4") {
// 				deposit();
// 			} else {
// 				alert("Invalid choice. Please try again.");
// 			}
// 		}
// 	};

// 	const checkBalance = () => {
// 		alert(`Your current balance is $${balance}`);
// 	};

// 	const withdraw = () => {
// 		let amount = prompt("Enter amount to withdraw:");
// 		amount = parseFloat(amount);

// 		if (isNaN(amount) || amount <= 0) {
// 			alert("Invalid amount. Please enter a positive number.");
// 		} else if (amount > balance) {
// 			alert("Insufficient funds. Please enter a smaller amount.");
// 		} else {
// 			balance -= amount;
// 			alert(`You have withdrawn $${amount}. Your new balance is $${balance}`);
// 		}
// 	};

// 	// const deposit = () => {
// 	// 	let deposit = prompt("Enter amount to deposit");
// 	// 	// deposit = parseFloat(deposit);

// 	// 	if (NaN(deposit) || deposit <= 0) {
// 	// 		alert("Invalid amount. Please enter a positive number.");
// 	// 	} else {
// 	// 		balance += deposit;
// 	// 		alert(`You have deposited $${deposit}. Your new balance is $${balance}`);
// 	// 	}
// 	// };

// 	const deposit = () => {
// 		let amount = prompt("Enter amount to deposit:");
// 		amount = parseFloat(amount);

// 		if (isNaN(amount) || amount <= 0) {
// 			alert("Invalid amount. Please enter a positive number.");
// 		} else {
// 			balance += amount;
// 			alert(`You have deposited $${amount}. Your new balance is $${balance}`);
// 		}
// 	};

// 	login();
// };

// bankSystem();

// person1 = prompt("Please enter your data 1(Maximum limit 20)", "Sample 1");
// while (person1.length > 20) {
// 	alert("Keep the message length to 20 chars or less");
// 	person1 = prompt("Please enter your data 1(Maximum limit 20)", "Sample 1");
// }
// const calculator = () => {
// 	const input = () => {
// 		let enter = prompt(
// 			`Choose: \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \nType "?" to stop`
// 		);

// 		if (enter === "1") {
// 			addition();
// 		} else if (enter === "2") {
// 			subtraction();
// 		} else if (enter === "3") {
// 			multiplication();
// 		} else if (enter === "4") {
// 			division();
// 		} else if (enter === "?") {
// 			alert("Calculator stopped.");
// 			return;
// 		} else {
// 			alert("Please enter a valid number (1-4) or '?' to stop.");
// 			input();
// 		}
// 	};

// 	const addition = () => {
// 		let x = parseFloat(prompt("Enter the First value"));
// 		let y = parseFloat(prompt("Enter the Second value"));
// 		let result = x + y;
// 		resultPrompt(result);
// 	};

// 	const subtraction = () => {
// 		let x = parseFloat(prompt("Enter the First value"));
// 		let y = parseFloat(prompt("Enter the Second value"));
// 		let result = x - y;
// 		resultPrompt(result);
// 	};

// 	const multiplication = () => {
// 		let x = parseFloat(prompt("Enter the First value"));
// 		let y = parseFloat(prompt("Enter the Second value"));
// 		let result = x * y;
// 		resultPrompt(result);
// 	};

// 	const division = () => {
// 		let x = parseFloat(prompt("Enter the First value"));
// 		let y = parseFloat(prompt("Enter the Second value"));
// 		if (y === 0) {
// 			alert("Division by zero is not allowed.");
// 			division();
// 		} else {
// 			let result = x / y;
// 			resultPrompt(result);
// 		}
// 	};

// 	const resultPrompt = (result) => {
// 		let resultInput = prompt(`Result is ${result} \n \n0. Back`);
// 		if (resultInput === "0") {
// 			input();
// 		} else {
// 			alert("Please type 0 to get back");
// 			resultPrompt(result);
// 		}
// 	};

// 	input();
// };

// calculator();

// const calculator = () => {
// 	const getNumbers = () => {
// 		let x = parseFloat(prompt("Enter the First value"));
// 		let y = parseFloat(prompt("Enter the Second value"));
// 		return [x, y];
// 	};

// 	const performOperation = (operation) => {
// 		let [x, y] = getNumbers();
// 		let result;
// 		switch (operation) {
// 			case "1":
// 				result = x + y;
// 				break;
// 			case "2":
// 				result = x - y;
// 				break;
// 			case "3":
// 				result = x * y;
// 				break;
// 			case "4":
// 				if (y === 0) {
// 					alert("Division by zero is not allowed.");
// 					return performOperation(operation);
// 				}
// 				result = x / y;
// 				break;
// 			default:
// 				alert("Invalid operation");
// 				return;
// 		}
// 		showResult(result);
// 	};

// 	const showResult = (result) => {
// 		let resultInput = prompt(`Result is ${result} \n \n0. Back`);
// 		if (resultInput === "0") {
// 			startCalculator();
// 		} else {
// 			alert("Please type 0 to get back");
// 			showResult(result);
// 		}
// 	};

// 	const startCalculator = () => {
// 		let enter = prompt(
// 			`Choose: \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \nType "?" to stop`
// 		);

// 		if (enter === "?") {
// 			alert("Calculator stopped.");
// 			return;
// 		} else if (["1", "2", "3", "4"].includes(enter)) {
// 			performOperation(enter);
// 		} else {
// 			alert("Please enter a valid number (1-4) or '?' to stop.");
// 			startCalculator();
// 		}
// 	};

// 	startCalculator();
// };

// calculator();

// const calculator = () => {
// 	const getNumbers = () => {
// 		let x = parseFloat(prompt("Enter the First value"));
// 		let y = parseFloat(prompt("Enter the Second value"));
// 		return [x, y];
// 	};

// 	const addition = (x, y) => x + y;
// 	const subtraction = (x, y) => x - y;
// 	const multiplication = (x, y) => x * y;
// 	const division = (x, y) => {
// 		if (y === 0) {
// 			alert("Division by zero is not allowed.");
// 			return null;
// 		}
// 		return x / y;
// 	};

// 	const showResult = (result) => {
// 		if (result === null) {
// 			mainFunc();
// 			return;
// 		}
// 		let resultInput = prompt(`Result is ${result} \n \n0. Back`);
// 		if (resultInput === "0") {
// 			mainFunc();
// 		} else {
// 			alert("Please type 0 to get back");
// 			showResult(result);
// 		}
// 	};

// 	const mainFunc = () => {
// 		let enter = prompt(
// 			`Choose: \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \nType "?" to stop`
// 		);

// 		if (enter === "?") {
// 			alert("Calculator stopped.");
// 			return;
// 		}

// 		let [x, y] = getNumbers();
// 		let result;

// 		switch (enter) {
// 			case "1":
// 				result = addition(x, y);
// 				break;
// 			case "2":
// 				result = subtraction(x, y);
// 				break;
// 			case "3":
// 				result = multiplication(x, y);
// 				break;
// 			case "4":
// 				result = division(x, y);
// 				break;
// 			default:
// 				alert("Please enter a valid number (1-4) or '?' to stop.");
// 				mainFunc();
// 				return;
// 		}

// 		showResult(result);
// 	};

// 	mainFunc();
// };

// calculator();

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 50,
// };

// let statement = `${person.firstName} is ${person.age} years old`;
// console.log(statement);

// const person = {
// 	name: "John",
// 	age: 30,
// 	city: "New York",
// };

// // Create an Array
// const myArray = Object.values(person);

// Display the Array
//   document.getElementById("demo").innerHTML = myArray;
// console.log(myArray);

// const fruits = { Apple: 300, Banana: 350, Orange: 400 };

// let text = " ";
// for (let [fruit, amount] of Object.entries(fruits)) {
// 	text += fruit + ": " + amount + "<br>";
// }

// let entriesFruits = Object.entries(fruits);
// console.log(text);
// -------------------------
// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
// 	text += fruit + ": " + value + "\n";
// }
// console.log(text);

// const person = {
// 	name: "John",
// 	age: 30,
// 	city: "New York",
// };
// let stringObject = JSON.stringify(person);
// console.log(typeof stringObject);
// console.log(typeof person);

// Constructor Function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   // Create a Person object
//   const myFather = new Person("John", "Doe", 50, "blue");

//   // Display age
//   document.getElementById("demo").innerHTML =
//   "My father is " + myFather.age + ".";

// const person = (first, last, age, eye) => {
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eyeColor = eye;
// };

// const myFather = new person("John", "Doe", "50", "blue");

// let fatherAge = "My father is" + myFather.age + ".";

// console.log(fatherAge);

// function mode(arr) {
// 	return arr
// 		.sort(
// 			(a, b) =>
// 				arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
// 		)
// 		.pop();
// }
// console.log(mode());
// mode(["pear", "apple", "orange", "apple"]); // apple

// let y = "we";
// let x = +y;
// console.log(x);

// let x = 123;
// String(x);
// String(123);
// String(100 + 23);
// console.log(String(123));
// console.log((123).toString());

// d = new Date();
// console.log(Number(d));
// console.log(d.getTime());

// console.log(String(Date()));
// console.log(Date().toString());

// console.log(Number(true));
// console.log(Number(false));

// console.log(String(true));
// console.log(String(false));

// let typConv = 5 + null;
// console.log("5" + null);
// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * "2");

// let myVar = { name: "john" };
// let myVar = [1, 2, 3, 4, 5];
// let myVar = new Date();
// console.log(typeof myVar);
// console.log(myVar.toString());
// console.log(String(myVar));

// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 50,
// };
// let { firstName, lastName, age } = person;
// let { lastName, firstName } = person;
// console.log(firstName + " " + lastName);
// let { lastName: nae } = person;
// console.log(nae);

// const fruits = new Map([
// 	["Apples", 500],
// 	["Bananas", 200],
// 	["Oranges", 300],
// ]);

// let text = "";
// for (const [key, value] of fruits) {
// 	text += `${key} are ${value} \n`;
// }
// console.log(text);

// let firstName = "john";
// let lastName = "doe";

// [firstName, lastName] = [lastName, firstName];
// let _name = firstName + " " + lastName;
// console.log(_name);

// let text = "visit W3schools";
// b = text.search(/s/d);
// console.log(b);

// let text = /q/.test("The best things in life are free!");
// console.log(text);

// try {
// 	add = alert("we");
// } catch (error) {
// 	console.log(error.message);
// }
// throw 120920;

// throw "Too Small";

// const check = () => {
// 	let x = "10";
// 	message = "";
// 	try {
// 		if (x.trim() == " ") throw "empty";
// 		if (isNaN(x)) throw "not a number";
// 		x = Number(x);
// 		if (x < 5) throw "too low";
// 		if (x > 10) throw "too high";
// 		if (x >= 5 || x <= 10) throw "Right Value";
// 	} catch (err) {
// 		message = `Input is ${err}`;
// 	}
// 	console.log(message);
// };
// check();
// let mainInput = "w";
// result = "";
// try {
// 	if (mainInput == isNaN) throw "not a number";
// } catch (error) {
// 	console.log(error.name);
// 	// result =;
// }

// let num = 1;
// try {
// 	num.toPrecision(500);
// } catch (err) {
// 	console.log(err.name);
// }

// let x = 5;
// try {
// 	x = y + 1;
// } catch (err) {
// 	console.log(err.name);
// }

// const isPalindrome = (str) => {
// let reverse = "";
// for (char of str) {
// 	console.log(char);
// }
// for (let char = str.length - 1; char >= 0; char--) {
// 	reverse = reverse + str[char];
// }
// // console.log(reverse);
// if (str === reverse) {
// 	return true;
// } else {
// 	return false;
// }
// };
// console.log(isPalindrome("malayalam"));

// let x = this;
// console.log(x);

// var numbers1 = [45, 4, 9, 16, 25];
// var sum = numbers1.reduce(myFunction);

// function myFunction(total, value) {
//   return (sum = total + value);
// }

// var txt = "";
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach(myFunction);
// function myFunction(value) {
//   txt = txt + value + "\n";
// }
// ---------------// todo
// let numbers1 = [45, 4, 9, 16, 25];
// let arrow = (value) => value * 2;
// let numbers2 = numbers1.map(aFunction());

// console.log(numbers2);

// const txt = '{"name":"John", "age":30, "city":"New York"}';
// const obj = JSON.parse(txt);
// console.log(obj);
// const obj2 = JSON.stringify(obj);
// console.log(typeof obj2);

// const newObj = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
// const obj = Object.defineProperty(newObj, "hobby", { value: "chess" });
// console.log(obj.hobby);

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	fullName: function () {
// 		return this.firstName + " " + this.lastName;
// 	},
// };
// const member = {
// 	firstName: "Hege",
// 	lastName: "Nilsen",
// };

// let fullName = person.fullName.bind(member);
// console.log(fullName());

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 50,
// 	eyeColor: "blue",
// };

// let { firstName, age, lastName, eyeColor } = person;
// console.log(
// 	firstName + " and my age is" + age + "and my eye color is " + eyeColor
// );

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let letters = [...none];
// console.log(letters);
// console.log();

// let [fruits1, fruits2, fruits3, fruits4] = fruits;
// console.log(fruits3 + " is sweet but " + fruits1 + " is sweeter");

// const a1 = ["Jan", "Feb", "Mar"];
// const a2 = ["Apr", "May", "Jun"];
// const a3 = ["Jul", "Aug", "Sep"];
// const a4 = ["Jul", "Aug", "Sep"];
// console.log(...a1, ...a2);

// const arrayNum = [23, 55, 21, 87, 56];
// const maxValue = Math.max(...arrayNum);
// console.log(...arrayNum);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let none = "";
// for (let x of fruits) {
// 	none += x + "\n";
// }

// const cars = ["BMW", "Volvo", "Mini"];
// let text = "";
// for (let x of cars) {
// 	text += x + "\n";
// }
// console.log(text);

// let language = "JavaScript";

// let text = "";

// for (let x of language) {
// 	text += x + "  ";
// }
// console.log(text);

// const fruits = new Map([
// 	["apples", 500],
// 	["bananas", 300],
// 	["oranges", 200],
// ]);
// let quantity = fruits.get("apples");
// console.log(fastest);
// console.log("There are " + quantity + " apples.");

// const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("c");

// console.log("The set has " + letters.size + " values");

// class car {
// 	constructor(name, year) {
// 		this.name = name;
// 		this.year = year;
// 	}
// }

// const myCar1 = new car("Ford", 2014);
// const myCar2 = new car("Audi", 2019);

// console.log(
// 	myCar1.name + " " + myCar1.year + " \n" + myCar2.name + " " + myCar2.year
// );
//! Basic promise syntax
// const myPromise = new Promise(function (myResolve, myReject) {
// 	myResolve();
// 	myReject();
// });

// myPromise.then(
// 	function (value) {
// 		/* code if successful */
// 	},
// 	function (error) {
// 		/* code if some error */
// 	}
// );

// const myPromise = new Promise(function (myResolve, myReject) {
// 	setTimeout(function () {
// 		myResolve("you");
// 	}, 3);
// });

// myPromise.then(function (value) {
// 	console.log(value);
// });

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 50,
// 	eyeColor: "blue",
// };
// let id = symbol("id");
// person[id] = 3039;

// function my(x, y = 10) {
// 	return x + y;
// }
// my();
// console.log(my(45));

// function sum(...args) {
// 	let sum = 0;
// 	for (let arg of args) sum += arg;
// 	return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("z"));

// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello"));
// console.log(text.endsWith("universe."));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let inc = fruits.entries();
// for (let x of inc) {
// 	inc += x;
// 	console.log(x);
// }
// console.log(inc);

// const myArr = Array.from("ABCDEF");
// console.log(myArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let keys = fruits.keys();

// let txt = "";
// for (let x of keys) {
// 	txt += x + "\n";
// }

// console.log(txt);

// const numbers = [4, 9, 16, 25, 29];
// let found = numbers.find(fined);

// function fined(value, index, array) {
// 	return value > 15;
// }

// console.log(found);

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(index);

// function index(value, index, array) {
// 	return value > 18;
// }
// console.log(first);

// console.log(Math.trunc(4.2));
// console.log(Math.sign(4.2));
// let is = Number.isInteger(10.5);
// console.log(is);

// let { x, y, ...z } = { x: 1, y: 2, a: 2, b: 4 };
// console.log(x, y, z);

// let text1 = "      Hello world      ";
// let text2 = text1.trimEnd();
// console.log(text2);

// const fruits = [
// 	["Apple", 500],
// 	["Banana", 400],
// 	["Orange", 200],
// ];

// let fruits2 = Object.fromEntries(fruits);
// console.log(typeof fruits);
// console.log(fruits2);

// const myArr = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6],
// ];
// const arr = myArr.flat();
// console.log(arr);

// const myArr = [1, 2, 3, 4, 5, 6];
// let arr = myArr.flatMap((x) => x + 0);
// console.log(arr);

// const myArr = [
// 	{ name: "X00", price: 100 },
// 	{ name: "X01", price: 110 },
// 	{ name: "X02", price: 120 },
// 	{ name: "X03", price: 130 },
// 	{ name: "X04", price: 140 },
// 	{ name: "X05", price: 150 },
// 	{ name: "X06", price: 160 },
// 	{ name: "X07", price: 170 },
// ];
// myArr.sort((p1, p2) => {
// 	if (p1.value > p2.value) return 1;
// 	if (p1.value < p2.value) return -1;
// 	return 0;
// });

// let txt = "";
// myArr.forEach(sortedArr);
// let sortedArr = (value) => {
// 	txt += value.name + " " + value.price + "\n";
// };

// function sortedArr(value) {
// 	txt += value.name + " " + value.price + "\n";
// }
// console.log(txt);

// let text = JSON.stringify("\u26D4");
// let text = JSON.stringify("⛔");
// console.log(text);
// let notText = JSON.parse(text);
// console.log(notText);

// let text = "\u2010";
// console.log(text);

// const myFu = () => {
// 	return a * b;
// };
// console.log(myFu.toString());

// let x = 999999999999999;
// let y = 9999999999999999n;
// console.log(x + "\n" + y);

// let x = 123456789012345678901234567890n;
// let y = BigInt("123456789012345678901234567890");
// console.log(x + "\n" + y);
// console.log(typeof y);

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// let iterator = text.matchAll(/cats/gi);
// // console.log(iterator);
// console.log(Array.from(iterator));

// let name = "nothing";
// let text = "missing";
// console.log(name ?? text);

// const car = { type: "Fiat", model: "500", color: "White", name: "great" };

// let that = car?.name;
// console.log(that);

// let x = undefined;
// x &&= 5;
// console.log(x);

// let y = undefined;
// y ||= 5;
// console.log(y);

// let z;
// z ??= 1;
// console.log(z);

// const myPromise1 = new Promise((reject, resolve) => {
// 	setTimeout(resolve, 300, "King");
// });

// const myPromise2 = new Promise((reject, resolve) => {
// 	setTimeout(resolve, 200, "Queen");
// });

// Promise.allSettled([myPromise1, myPromise2]).then((results) => {
// 	results.forEach((x) => myDisplay(x.status));
// });
// function myDisplay(some) {
// 	console.log(some);
// }

// let x = "";
// const person = {
// 	name: "Abdul Muhaimin",
// 	age: 35,
// 	cars: [
// 		{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
// 		{ name: "BMW", models: ["320", "x3", "x5"] },
// 		{ name: "Fiat", models: ["500", "Panda"] },
// 	],
// };

// for (let i in person.cars) {
// 	x += "  " + person.cars[i].name + "\n";
// 	for (let j in person.cars) {
// 		x += "." + person.cars[i].models[j] + "\n";
// 	}
// }
// console.log(x);

// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 300, "king");
// });

// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 300, "Queen");
// });

// Promise.allSettled([promise1, promise2]).then((x) => {
// 	myDisplay(x);
// 	// forError(x);
// });

// function myDisplay(some) {
// 	console.log(some);
// }

// function forError() {
// 	console.log("Failure");
// }

// const myDisplay = (some) => {
// 	console.log(some);
// };

// let myPromise = new Promise(function (resolve, reject) {
// 	let x = 0;

// 	if (x == "0") {
// 		resolve("OK");
// 	} else {
// 		reject("Error");
// 	}
// });

// myPromise.then(
// 	function (value) {
// 		myDisplay(value);
// 	},
// 	function (error) {
// 		myDisplay(error);
// 	}
// );

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";

// text = text.replaceAll(/cat/g, "dog");
// text = text.replaceAll(/Cat/g, "Dog");
// console.log(text);

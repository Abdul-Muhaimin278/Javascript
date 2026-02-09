// const person = {};
// person.firstName = "Abdul";
// person.lastName = "Muhaimin";
// person.age = 18;
// person.eyeColor = "Brown";
// console.log(person);

// function Person(first, last, age, eye) {
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eyeColor = eye;
// }

// function Person(first, last, age, eye) {
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eyeColor = eye;
// 	this.nationality = "English";
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 49, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");
// const mySelf = new Person("Johnny", "Rally", 22, "green");
// console.log(myFather);
// console.log(myMother);
// console.log(mySister);
// console.log(myFather)

// function Person(first, last, age, eye) {
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eyeColor = eye;
// }

// Person.prototype.nationality = "English";
// console.log(myFather.nationality);
// Person.prototype.name = function () {
// 	return this.firstName + " " + this.lastName;
// };
//  console.log(myFather.name());

// const person1 = {
// 	firstName: "Abdul",
// 	lastName: "Muhaimin",
// 	age: 18,
// 	eyeColor: "Brown",
// };

// const person2 = { firstName: "Abdul", lastName: "skn" };

// Object.assign(person2, person1);
// let text = Object.entries(person1);
// console.log(text);
// console.log(Object.entries(person1));

// let text = "";
// for (let [key, value] of Object.entries(person1)) {
// 	text += key + " " + value + "\n";
// }
// console.log(text);

// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
// const myMap = new Map(Object.entries(person1));
// console.log(myMap);

// const fruits = [
// 	["Bananas", 300],
// 	["Oranges", 200],
// 	["Apples", 500],
// ];

// const entered = Object.entries(fruits);
// console.log(entered);

// const keyed = Object.keys(fruits);
// console.log(keyed);
// const valued = Object.values(fruits);
// console.log(valued);

// r = "";
// for (let x in person1) {
// 	r += person1[x] + "";
// }
// console.log(r);

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	language: "EN",
// };
// Object.defineProperty(person, "year", { value: "2008" });
// console.log(person.year);
// Object.defineProperty(person, "language", { value: "No" });
// console.log(person);
// Object.defineProperty(person, "language", { enumerable: false });
// let re = Object.getOwnPropertyNames(person);
// console.log(Object.keys(person));
// console.log(re);

// const person = { firstName: "John", lastName: "Doe" };

// Object.defineProperty(person, "fullName", {
// 	get: function () {
// 		return this.firstName + " " + this.lastName;
// 	},
// });
// console.log(person.fullName);

// const obj = { counter: 0 };

// Object.defineProperty(obj, "reset", {
// 	get: function () {
// 		this.counter = 0;
// 	},
// });

// Object.defineProperty(obj, "increment", {
// 	get: function () {
// 		this.counter++;
// 	},
// });
// Object.defineProperty(obj, "decrement", {
// 	get: function () {
// 		this.counter--;
// 	},
// });
// Object.defineProperty(obj, "add", {
// 	get: function (value) {
// 		this.counter += value;
// 	},
// });
// Object.defineProperty(obj, "subtract", {
// 	get: function (value) {
// 		this.counter -= value;
// 	},
// });

// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.increment;

// console.log(obj.counter);

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 50,
// 	language: "en",
// 	get lang() {
// 		return this.language;
// 	},
// };

// console.log(person.lang);
// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 50,
// 	language: "",
// 	set lang(lang) {
// 		this.language = lang;
// 	},
// };
// person.lang = "en";
// console.log(person.language);

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	fullName: function () {
// 		return this.firstName + " " + this.lastName;
// 	},
// };
// console.log(person.fullName());

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	get fullName() {
// 		return this.firstName + " " + this.lastName;
// 	},
// };
// console.log(person.fullName);

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	language: "en",
// 	get lang() {
// 		return this.language.toUpperCase();
// 	},
// };
// console.log(person.lang);

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	language: "",
// 	set lang(lang) {
// 		this.language = lang.toUpperCase();
// 	},
// };
// person.lang = "en";
// console.log(person.language);

// const bike = { type: "Ducati", model: "panigale", color: "red" };
// const bike = {
// 	type: "Ducati",
// 	model: "panigale",
// 	color: "red",
// };

// Object.preventExtensions(bike);
// let text = Object.isExtensible(bike);
// // try {
// // 	bike.type = "V4R";
// // } catch (err) {
// // 	text.err;
// // }
// console.log(text);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Object.preventExtensions(fruits);
// let text1 = Object.isExtensible(fruits);
// console.log(text1);

// Object.seal(fruits);
// let answer = Object.isSealed(fruits);

// console.log(answer);

// Object.freeze(fruits);
// let answer = Object.isFrozen(fruits);
// let answer = fruits.push("kiwi");
// console.log(answer);

// const x = function (a, b) {
// 	return a * b;
// };
// let z = x(5, 7);
// console.log(z);

// (function () {
// 	let x = "hello world";
// 	console.log(x);
// })();

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// function sum(...args) {
// 	let sum = "";
// 	for (let arg of args) {
// 		sum += arg;
// 		return sum;
// 	}
// }

// console.log(x);

// function findMax() {
// 	let max = -Infinity;
// 	for (let i = 0; i < arguments.length; i++) {
// 		if (arguments[i] > max) {
// 			max = arguments[i];
// 		}
// 	}
// 	return max;
// }
// x = findMax(1, 123, 500, 115, 44, 88);

// function sumAll() {
// 	let sum = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
// x = sumAll(1, 123, 500, 115, 44, 88);
// console.log(x);

// const myObject = {
// 	firstName: "john",
// 	lastName: "doe",
// 	fullName: function () {
// 		return this.firstName + " " + this.lastName;
// 	},
// };

// console.log(myObject.fullName());

// function myFunction(arg1, arg2) {
// 	this.firstName = arg1;
// 	this.lastName = arg2;
// }
// const myObj = new myFunction("John", "Doe");

// console.log(myObj.firstName);

// const person = {
// 	fullName: function (city, country) {
// 		return this.firstName + " " + this.lastName + "," + city + "," + country;
// 	},
// };

// const person1 = {
// 	firstName: "John",
// 	lastName: "Doe",
// };

// const person2 = {
// 	firstName: "Mary",
// 	lastName: "Doe",
// };

// let x = person.fullName.call(person1, "oslo", "norway");
// console.log(x);

// const person = {
// 	fullName: function (city, country) {
// 		return this.firstName + " " + this.lastName + "," + city + "," + country;
// 	},
// };

// const person1 = {
// 	firstName: "John",
// 	lastName: "Doe",
// };

// let x = person.fullName.apply(person1, ["oslo", "norway"]);
// console.log(x);

// let x = Math.max.apply(null, [1, 2, 3, 2, 2]);
// console.log(3);

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
// 	lastName: "Nilsen",
// 	display: function () {
// 		return this.firstName + " " + this.lastName;
// 	},
// };
// let display = person.display.bind(person);
// setTimeout(person.display, 3000);
// console.log(person.display());

// let counter = 0;
// function add() {
// 	counter += 1;
// }

// add();
// add();
// console.log(counter);

// function add() {
// 	counter = 0;
// 	function plus() {
// 		counter += 1;
// 	}
// 	plus();
// 	return counter;
// }
// console.log(add());
// const add = (function () {
// 	let counter = 0;
// 	return function () {
// 		counter += 1;
// 		return counter;
// 	};
// })();

// add();
// add();

// console.log(add());

// class Car {
// 	constructor(name, year) {
// 		this.name = name;
// 		this.year = year;
// 	}
// }

// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);
// console.log(myCar1.name + " " + myCar2.name);

// class Car {
// 	constructor(name, year) {
// 		this.name = name;
// 		this.year = year;
// 	}
// 	age() {
// 		const date = new Date();
// 		return date.getFullYear() - this.year;
// 	}
// }

// const myCar = new Car("Ford", 2014);
// let b = "My car is " + myCar.age() + " years old.";
// console.log(b);

// class Car {
// 	constructor(brand) {
// 		this.carname = brand;
// 	}
// 	present() {
// 		return "I have a " + this.carname;
// 	}
// }
// class Model extends Car {
// 	constructor(brand, mod) {
// 		super(brand);
// 		this.model = mod;
// 	}
// 	show() {
// 		return this.present() + ", it is a " + this.model;
// 	}
// }

// const myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// class Car {
// 	constructor(brand) {
// 		this.carname = brand;
// 	}
// 	get cname() {
// 		return this.carname;
// 	}
// 	set cname(x) {
// 		return (this.carname = x);
// 	}
// }

// const myCar = new Car("Ford");
// console.log(myCar.cname);

// function myDis(some) {
// 	console.log(some);
// }

// function cal(num1, num2, callBack) {
// 	let sum = num1 + num2;
// 	callBack(sum);
// }

// let result = cal(5, 5, myDis);
// console.log(result);

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// const pos = removeNeg(myNumbers, (x) => x >= 0);

// console.log(pos);
// function removeNeg(numbers, callback) {
// 	arr = [];
// 	for (let x of numbers) {
// 		if (callback(x)) {
// 			arr.push(x);
// 		}
// 	}
// 	return arr;
// }

// function myDisplay(something) {
// 	console.log(something);
// }

// function calculation(num1, num2, callback) {
// 	let sum = num1 + num2;
// 	callback(sum);
// }

// calculation(5, 5, myDisplay);

// setTimeout(time, 900);

// function time() {
// 	let d = new Date();
// 	console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
// }
// function display(some) {
// 	console.log(some);
// }

// let pro = new Promise(function (res, rej) {
// 	let x = 0;
// 	if (x == 0) {
// 		res("ok");
// 	} else {
// 		rej("not ok");
// 	}
// });

// pro.then(
// 	function (value) {
// 		display(value);
// 	},
// 	function (error) {
// 		display(error);
// 	}
// );

// let promise = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		resolve("hello");
// 	}, 3000);
// });

// promise.then(function (value) {
// 	console.log(value);
// });

// async function display() {
// 	let promise = new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve("sup");
// 		}, 3100);
// 	});
// 	console.log(await promise);
// }

// display();

// async function display() {
// 	let promise = new Promise(function (resolve) {
// 		let req = new XMLHttpRequest();
// 		req.open("GET", "mycar.html");
// 		req.onload = function () {
// 			if (req.status == 200) {
// 				resolve(req.response);
// 			} else {
// 				resolve("File not Found");
// 			}
// 		};
// 		req.send;
// 	});
// 	console.log(await promise);
// }
// display();
// localStorage.setItem("lastName", "Smith");
// let i = localStorage.getItem("lastName");
// localStorage.lastName("smith");
// let i = 	localStorage.lastName;
// console.log(i);
// console.log(new Date(	));
// let ca = "cname";
// console.log(ca.split(";"));

// const obj = { name: "John", age: 30, city: "New York" };
// const myJSON = JSON.stringify(obj);
// console.log(myJSON);
// console.log(obj);

// const arr = ["John", "Peter", "Sally", "Jane"];
// const myJSON = JSON.stringify(arr);
// console.log(myJSON);
// console.log(JSON.parse(myJSON));

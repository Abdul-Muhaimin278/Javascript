//?  values bigger than 20
// let numbers = [10, 22, 24, 54, 46, 23, 44, 57];
// let value = 20;
// const result = numbers.filter((curElem) => {
// 	return curElem > 20;

// 	if (numbers >= 20) {
// 	} else {
// 		false;
// 	}
// });
// console.log(result);
// var x = 1;
// y = 2;
//? ascending order
// const result1 = numbers.sort((x, y) => {
// 	return x - y;
// });
// console.log(result1.toString(" "));
// ¬
// ¬
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

//? add + and then , between again

// function myFunction(value, index, array) {
// 	return value + "+";
// }
// console.log(numbers2.toString());
// let result = numbers.map((value, index, arr) => {
//     replace
// 	return value + "+";
// });
// console.log(result.toString());

// let numbers = [10, 22, 24, 54, 46, 23, 44, 57];
// let numStr = numbers.toString();
// let add = numbers.join("+");
// let join = numbers.join(",");
// console.log(add);
// console.log(join);
// console.log(typeof numbers);

//? Learn how use windows.prompt
// on W3schools.html

//? What we enter in the prompt box should be removed from the array(arr).

// let arr = ["aa", "bb", "cc"];
// console.log(arr);
// // word = document.getElementById("check").addEventListener(click) = prompt();
// word = prompt("Type the element to be removed");
// const delWord = arr.filter((arrWord) => {
// 	return arrWord !== word;
// });
// console.log(delWord);

//? What we write in the prompt box is added in the array

// const check = () => {
// 	let arr = ["aa", "bb", "cc"];
// 	console.log(arr);
// 	let word = prompt("Type to add");

// 	arr.push(word);
// 	// arr.unshift(word);
// 	// arr.splice(3, 0, word);

// 	console.log(arr);
// };

//? The data keep on adding put the prompt box does not disappear

// let arr = ["aa", "bb", "cc"];
// console.log(arr);

// while (true) {
// 	word = prompt("Type to enter");
// 	if (word === "0") break;
// 	arr.push(word);
// }

// arr.unshift(word);
// arr.splice(3, 0, word);

// console.log(arr);

//? make different start pattern

// for (let i = 0; i <= 5; i++) {
// 	let pattern = "";
// 	for (let j = 1; j <= i; j++) {
// 		pattern += " * ";
// 	}
// 	console.log(pattern);
// }

// for (let i = 5; i >= 0; i--) {
// 	let pattern = " ";
// 	for (let j = 1; j <= i; j++) {
// 		pattern += " * ";
// 	}
// 	console.log(pattern);
// }

// for (let i = 5; i >= 1; i--) {
// 	let pattern = "";
// 	for (let k = 1; k <= 5 - i; k++) {
// 		pattern += "   ";
// 	}
// 	for (let j = 1; j <= i; j++) {
// 		pattern += " * ";
// 	}
// 	console.log(pattern);
// }

// for (let i = 1; i <= 5; i++) {
// 	let pattern = "";
// 	for (let k = 1; k <= 5 - i; k++) {
// 		pattern += "   ";
// 	}
// 	for (let j = 1; j <= i; j++) {
// 		pattern += " * ";
// 	}
// 	console.log(pattern);
// }

// for (let i = 1; i <= 5; i++) {
// 	let pattern = "";
// 	for (let k = 1; k <= 5 - i; k++) {
// 		pattern += " ";
// 	}
// 	for (let j = 1; j <= i; j++) {
// 		pattern += "* ";
// 	}
// 	console.log(pattern);
// }

// for (let i = 5; i >= 1; i--) {
// 	let pattern = " ";
// 	for (let k = 1; k <= 5 - i; k++) {
// 		pattern += " ";
// 	}
// 	for (let j = 1; j <= i; j++) {
// 		pattern += "* ";
// 	}
// 	console.log(pattern);
// }

//? Make a basic banking system which keeps track of your balance.First make a login code,then to check balance withdraw or log out.if we check balance it should tell your balance then and it should get updated every time we withdraw.Then make something to withdraw your money.

// while (true) {
// 	let Bank = prompt("Enter your secret pin to Login");
// }

// while (true) {
// 	let Bank = prompt("Enter your secret pin to Login");
// 	if (Bank === "login") break;
// }
// system.toLowerCase() === "Enter"

// const bankSystem = () => {
// 	let balance = 1000;
// 	const correctPin = "12";

// 	const chooseLogin = () => {
// 		let input = prompt("Enter / if you want to Login");

// 		if (input === "/") {
// 			login();
// 		} else {
// 			alert("Please! Type /");
// 			chooseLogin();
// 		}
// 	};

// 	const login = () => {
// 		let pin = prompt("Enter your secret pin to login");

// 		if (pin === correctPin) {
// 			alert("Login successful!");
// 			showMenu();
// 		} else {
// 			alert("Wrong pin");
// 			login();
// 		}
// 	};

// 	const showMenu = () => {
// 		while (true) {
// 			let choose = prompt(
// 				"Select: \n1. Check balance \n2. Withdraw \n3. Log out"
// 			);

// 			if (choose === "1") {
// 				currentBalance();
// 			} else if (choose === "brr") {
// 				alert("Got out");
// 				break;
// 			} else if (choose === "3") {
// 				alert("Logged out");
// 				chooseLogin();
// 			} else if (choose === "2") {
// 				withDraw();
// 			} else {
// 				alert("Invalid");
// 			}
// 		}
// 	};

// 	const currentBalance = () => {
// 		let put = prompt(`Your balance is ${balance}. \n \n2. back`);
// 		// if (put === "1") {
// 		// 	alert(`Your balance is ${balance}`);
// 		if (put === "2") {
// 			showMenu();
// 		} else {
// 			alert("Enter 2 to get back");
// 			currentBalance();
// 		}
// 	};

// 	const withDraw = () => {
// 		let put = prompt(`You have ${balance}/Rs left. \n1. To withdraw \n2. back`);

// 		if (put === "1") {
// 			toWithdraw();
// 		} else if (put === "2") {
// 			showMenu();
// 		} else {
// 			alert("invalid");
// 		}
// 	};
// 	const toWithdraw = () => {
// 		let amount = prompt("Enter amount");

// 		if (isNaN(amount) || amount <= 0) {
// 			alert("Please Enter a valid amount");
// 		} else if (amount > balance) {
// 			alert("Insufficient amount");
// 		} else {
// 			balance -= amount;
// 			alert(
// 				`${amount}/-Rs, successfully withdrawn.Your balance is ${balance}/-Rs`
// 			);
// 			withDraw();
// 		}
// 	};
// 	// login();
// 	chooseLogin();
// };

// bankSystem();
// console.log(bankSystem);

// const matrixSystem = () => {
// 	let currentBalance = 1000;
// 	const correctCode = "code";

// 	const login = () => {
// 		let pin = prompt("Enter your secret pin code");
// 		if (pin === correctCode) {
// 			alert("Login successfully");
// 			showMenu();
// 		} else {
// 			alert("Please, enter correct pin ");
// 			login();
// 		}
// 	};

// 	const showMenu = () => {
// 		while (true) {
// 			let choice = prompt(
// 				"Choose: \n1.Check balance \n2. Deposit  \n3.Withdraw   \n4.Logout"
// 			);

// 			if (choice === "1") {
// 				checkBalance();
// 			} else if (choice === "2") {
// 				deposit();
// 			} else if (choice === "3") {
// 				withDraw();
// 			} else if (choice === "4") {
// 				alert("Logged out");
// 				break;
// 			} else {
// 				alert("Please, enter a valid number ");
// 			}
// 		}
// 	};

// 	const checkBalance = () => {
// 		alert(`Your current balance is ${currentBalance}/-Rs`);
// 	};

// 	const withDraw = () => {
// 		let amount = prompt("Enter the amount to withdraw");

// 		if (isNaN(amount) || amount <= 0) {
// 			alert("Invalid amount.Please enter a positive number");
// 		} else if (amount > currentBalance) {
// 			alert("Insufficient funds.Please enter smaller amount");
// 		} else {
// 			currentBalance -= amount;
// 			alert(
// 				`You have withdrawn ${amount}/-Rs.Your new balance is ${currentBalance}/-Rs`
// 			);
// 		}
// 	};

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

// matrixSystem();

//? Make a calculator with only code and prompt box

//[ const calculator = () => {
//   let input = () => {
//     let enter = prompt(
//       `Choose \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division`
//     );

//     if (enter === "1") {
//       addition();
//     } else if (enter === "2") {
//       subtraction();
//     } else if (enter === "3") {
//       multiplication();
//     } else if (enter === "4") {
//       division();
//     } else if (enter === "?") {
//       alert("Calculator stopped");
//       return;
//     } else if (enter.length > 5) {
//       alert("Please enter only five numbers");
//     } else {
//       alert("Please enter a valid number (1-4) or type ? to stop.");
//       input();
//     }
//   };

//   const addition = () => {
//     let x = parseFloat(prompt("Enter the First value"));
//     let y = parseFloat(prompt("Enter the second value"));

//     let result = x + y;
//     resultPrompt(result);
//   };

//   const subtraction = () => {
//     let x = parseFloat(prompt("Enter the First value"));
//     let y = parseFloat(prompt("Enter the second value"));

//     let result = x - y;
//     resultPrompt(result);
//   };

//   const multiplication = () => {
//     let x = parseFloat(prompt("Enter the First value"));
//     let y = parseFloat(prompt("Enter the second value"));

//     let result = x * y;
//     resultPrompt(result);
//   };

//   const division = () => {
//     let x = parseFloat(prompt("Enter the First value"));
//     let y = parseFloat(prompt("Enter the second value"));
//     if (y === 0) {
//       alert("Division bty zero is not allowed.");
//       division();
//     }
//     let result = x / y;
//     resultPrompt(result);
//   };
//   const resultPrompt = (result) => {
//     let resultInput = prompt(`Result is ${result} \n \n0. Back`);
//     if (resultInput === "0") {
//       input();
//     } else {
//       alert("Please type 0 to get back");
//       resultPrompt(result);
//     }
//   };

//   input();
// };

// calculator();
// ]
// function calculator() {
// 	function choice() {
// 		let enter = prompt(
// 			`Choose \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division`
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
// 			alert("Calculator stopped");
// 			return;
// 		} else {
// 			alert("Please enter a valid number (1-4) or type ? to stop.");
// 			choice();
// 		}
// 	}

// 	function getNumbers() {
// 		let x = parseFloat(prompt("Enter the First value"));
// 		let y = parseFloat(prompt("Enter the second value"));
// 		return [x, y];
// 	}

// 	function addition() {
// 		let [x, y] = getNumbers();
// 		let result = x + y;
// 		resultPrompt(result);
// 	}
// 	// function addition(x, y) {
// 	// 	return x + y;
// 	// }

// 	function subtraction() {
// 		let [x, y] = getNumbers();
// 		let result = x - y;
// 		resultPrompt(result);
// 	}
// 	function multiplication() {
// 		let [x, y] = getNumbers();
// 		let result = x * y;
// 		resultPrompt(result);
// 	}
// 	function division() {
// 		let [x, y] = getNumbers();
// 		let result = x / y;
// 		if (y === 0) {
// 			alert("Division by zero is not allowed");
// 			return division();
// 		}
// 		resultPrompt(result);
// 	}

// 	function resultPrompt(result) {
// 		let resultInput = prompt(`Result is ${result} \n \n0. Back`);
// 		if (resultInput === "0") {
// 			choice();
// 		} else {
// 			alert("Please type 0 to get back");
// 			resultPrompt(result);
// 		}
// 	}
// 	choice();
// }
// calculator();

// const calculator = () => {
// 	const getNumbers = () => {
// 		let x = parseFloat(prompt("Enter the first numbers"));
// 		let y = parseFloat(prompt("Enter the second numbers"));
// 		return [x, y];
// 	};

// 	const addition = (x, y) => {
// 		return x + y;
// 	};
// 	const subtraction = (x, y) => {
// 		return x - y;
// 	};
// 	const multiplication = (x, y) => {
// 		return x * y;
// 	};
// 	const division = (x, y) => {
// 		if (y === 0) {
// 			alert("Division by 0 is not allowed");
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
// 			`Choose: \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division`
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
// 				alert("Please enter a valid number (1-4) or type ? to stop.");
// 				mainFunc();
// 				return;
// 		}
// 		showResult(result);
// 	};

// 	mainFunc();
// };

// calculator();
// if (enter === "1") {
// 	result = addition(x, y);
// 	return;
// } else if (enter === "2") {
// 	result = subtraction(x, y);
// 	return;
// } else if (enter === "3") {
// 	result = multiplication(x, y);
// 	return;
// } else if (enter === "4") {
// 	result = division(x, y);
// 	return;
// } else if (enter === "?") {
// 	alert("Calculator stopped.");
// 	stop();
// } else {
// 	alert("Please enter a valid number (1-4) or type ? to stop");
// 	mainFunc();
// }

//? write a program to insert - between each even number.

// const n = ["0", "1", "2", "3", "4", "5", "6"];
// let n = 123456;
// for (num = 0; num < n.length; num++) {
// 	if (num % 2 === 0) {
// 		num = n + "-";
// 		return;
// 	}
// }
// console.log(num);
// let sNum = num.toString();
// if (n % 2 === 0) {
// 	let number = sNum + "-";
// 	console.log(number);
// }
// console.log(stringNum);
// for (let sNum = 0; sNum <= sNum.length; sNum++) {
// 	// if (sNum % 2 === 0) {
// 	// 	number = sNum + "-";
// 	// 	return;
// 	// }
// 	console.log(number);
// }
// let number = num.join("-");
// console.log(num);

// var n = "0,1,2,3,4,5,6";
// for (let n = 0; n <= n.length; n++) {
// 	num += " -";
// 	// if (n % 2 === 0) {
// 	// }
// 	console.log(num);
// }

// let num = n.filter((curElem) => {
// 	if (curElem % 2 === 0) {
// 		let resultN = n + "-";
// 		console.log(resultN);
// 	}
// });

// const n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
// let lastNum = [];
// for (let num = 0; num < n.length; num++) {
// 	if (num % 2 === 0) {
// 		number = num + "-";
// 		// console.log(number);
// 	} else {
// 		number = num;
// 	}
// 	lastNum.push(number);
// 	// result = number;
// 	// string = number.toString();
// 	// console.log(string);
// 	// console.log(string.split(""));
// }
// console.log(lastNum);

//? Write a JavaScript program to find the most frequent item in an array.
// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// Sample array :
// filter() and Reduce()
// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// var arr1 = [3, 2, 3, 3, 2, 4, 9, 3];

// let obj = {
// 	NAME: "AWAIS",
// };
// console.log(obj["NAME"]);
// let counts = {};
// const countDuplicate = () => {
// 	let result = {};
// 	arr1.forEach((value) => {
// 		if (!result[value]) {
// 			result[value] = 1;
// 		} else {
// 			result[value]++;
// 		}
// 	});
// 	// console.log(counts);
// 	return result;
// };
// let result = countDuplicate();
// console.log(result);

// let finalResult = "";
// for (const [cons, num] of Object.entries(result)) {
// 	if ([cons, num] > result) {
// 		finalResult = `${cons} is ${num} times \n`;
// 	}
// }
// console.log(finalResult);

// for (let z in result) {
// 	finalResult = Math.max(result[z]);
// }

// let result = arr1.for(finalArr);
// console.log(result);
// // let result1 = result.reduce(reduceArr);
// // console.log(result1);

// function finalArr(value) {
// 	return value !== arr1;
// }

// function reduceArr(value) {
// 	return value === "a";
// }

// Sample Output : a ( 5 times )

//? Make a simple from with three input fields and then push them and show them, then also give them a button to move them right, left, up and down

//! testForm.html;
//! testForm.js;

//? make a rock,paper and scissor app
// const gameApp = () => {
//   let yourHand = prompt("Please Pick one \nr. Rock \np. Paper \ns. Scissors");
//   const input = () => {
//     if (yourHand === "?") {
//       alert("break");
//       return;
//     } else if (yourHand === "r" || yourHand === "s" || yourHand === "p") {
//       result();
//     } else {
//       alert("Please type r, p or s");
//       gameApp();
//     }
//   };
//   // if (yourHand !== "r" || "p" || "s" || "?")
//   const result = () => {
//     let hand = "rsp";
//     let computerHand = hand[Math.floor(Math.random() * 3)];
//     if (computerHand === "s" && yourHand === "r") {
//       alert(`Computer picked ${computerHand} so you won`);
//       gameApp();
//     } else if (computerHand === "r" && yourHand === "p") {
//       alert(`Computer picked ${computerHand} so you won`);
//       gameApp();
//     } else if (computerHand === "p" && yourHand === "s") {
//       alert(`Computer picked ${computerHand} so you won`);
//       gameApp();
//     } else if (computerHand === yourHand) {
//       alert(`Computer picked ${computerHand} so it is a tie`);
//       gameApp();
//     } else {
//       alert(`Computer picked ${computerHand} so you lose`);
//       gameApp();
//     }
//   };
//   input();
// };
// gameApp();
// console.log(gameApp());
// yourHand[r] === end[s] ||
// 			yourHand[s] === end[p] ||
// 			yourHand[p] === end[r]

//? You're tasked with creating an inventory management system for a small store. The system should be able to perform the following operations:

// Add new products to the inventory.
// Update existing product details.
// Remove products from the inventory.
// Display the list of all products in the inventory.
// Search for a product by its name.
// Calculate the total value of the inventory.

// Here are some guidelines:

// Each product in the inventory should have the following properties:

// - Name
// - Price per unit
// - Quantity in stock

// Use an array to store the products in the inventory.

// Use functions to perform each operation mentioned above.

// When updating or removing a product, use the product name as the identifier.

// Display appropriate messages to the user for each operation.
const inventory = [
	{ name: "Apples", PPU: 30, stock: 300 },
	{ name: "Bananas", PPU: 50, stock: 500 },
	{ name: "orange", PPU: 20, stock: 100 },
];

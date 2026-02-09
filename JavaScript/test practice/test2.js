//? 1. Initialize the Game Variables
// Decide on the range of numbers for the guessing game (e.g., 1 to 100).
// Generate a random number within this range that the player will try to guess.
// Set up a variable to keep track of the number of attempts the player has made.
//? 2. Create the Game Logic
// Prompt the player to guess a number.
// Compare the player's guess to the randomly generated number.
// Provide feedback to the player (e.g., "Too high", "Too low", or "Correct!").
// Keep track of the number of attempts.
// Repeat the guessing process until the player guesses the correct number.
//? 3. Enhance the Game
// Add a way to start a new game after the player guesses correctly.
// Implement a maximum number of attempts and end the game if this limit is reached.
// Optionally, keep track of and display the player's best score (fewest attempts).
// ============

// let attempts = 5;
// const guessingGame = () => {
// 	let min = 1;
// 	let max = 10;
// 	if (attempts === 0) {
// 		alert("You have used your attempts refresh the page again to play ");
// 		stop();
// 		return;
// 	}
// 	let user = prompt(
// 		`Please enter any number between 1 to 10 or enter ? to stop. \nYou got ${attempts} attempts left.`
// 	);

// 	const input = () => {
// 		if (user > 10 || user < 1) {
// 			alert("Please enter a number between 1 to 10 or enter ? to stop");
// 			guessingGame();
// 		} else if (user >= 1 || user <= 10) {
// 			attempts--;
// 			randomNo();
// 		} else if (user === "?") {
// 			alert("Take A break");
// 			stop();
// 		} else {
// 			alert("Please enter a number between 1 to 10 or enter ? to stop");
// 			guessingGame();
// 		}
// 	};
// 	const randomNo = () => {
// 		let random = Math.floor(Math.random() * (max - min) + 1);
// 		if (user < random) {
// 			alert(`Wrong! Too low.You guessed ${user} and the number is ${random}.`);
// 			guessingGame();
// 		} else if (user > random) {
// 			alert(`Wrong! Too high.You guessed ${user} and the number is ${random}.`);
// 			guessingGame();
// 		} else if (user == random) {
// 			alert(`correct!.You guessed ${user} and the number is ${random}.`);
// 			guessingGame();
// 		}
// 	};
// 	input();
// };

// guessingGame();

//? 1. Initialize the Array
// Create an Array: Initialize an array with a set of numbers that need to be sorted.
//? 2. Implement the Bubble Sort Algorithm
// Nested Loops: Use nested loops to iterate over the array and compare adjacent elements.
// Swap Elements: If the elements are in the wrong order, swap them.
// Repeat Until Sorted: Continue this process until the array is fully sorted.
//? 3. Display the Sorted Array
// Output: Display the sorted array in the console.

// const numbers = [64, 34, 25, 12, 22, 11, 90];
// let num = numbers.slice(1, 4);
// console.log(num);
// let result = numbers.sort(sortedArrays());

// function sortedArrays(a, b) {
// 	if (a > b) {
// 		return 1;
// 	} else if (a < b) {
// 		return 1;
// 	}
// }
// console.log(result);

// let rar = ["next", "pak", "agile", "solutions", "jhelum", "pak"];

// let res = rar.pop(data());
// console.log(res);

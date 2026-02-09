const inputValue = document.getElementById("inputValue");
const mainTodoElem = document.querySelector(".todo-lists-elem");

const addToDoList = (e) => {
	e.preventDefault();
	const divElem = document.createElement("div");
	divElem.classList.add("main_todo_div");
	divElem.innerHTML = ` <li>${inputValue.value}</li> <button class="deleteBtn">Delete</button> `;
	// console.log(divElem);

	console.log(mainTodoElem);

	mainTodoElem.innerHTML.append(divElem);
	console.log(mainTodoElem);
};

document.querySelector(".btn").addEventListener("click", (e) => {
	addToDoList(e);
});

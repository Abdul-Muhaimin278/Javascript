document.addEventListener("DOMContentLoaded", () => {
	const nameInput = document.getElementById("name");
	const daySelect = document.getElementById("day");
	const addButton = document.getElementById("add-btn");
	const updateButton = document.getElementById("update-btn");
	const cancelButton = document.getElementById("cancel-btn");
	const foodList = document.getElementById("list");

	let currentEditIndex = null;

	addButton.addEventListener("click", () => {
		const name = nameInput.value;
		const day = daySelect.value;
		if (name) {
			addItem(name, day);
			clearInputs();
		}
		localStorage.setItem("li");
		let lo = localStorage.getItem("li");
		console.log(lo);
	});

	updateButton.addEventListener("click", () => {
		const name = nameInput.value;
		console.log("name: ", name);
		const day = daySelect.value;
		if (name && currentEditIndex !== null) {
			updateItem(currentEditIndex, name, day);
			clearInputs();
			toggleButtons();
		}
	});

	cancelButton.addEventListener("click", () => {
		clearInputs();
		toggleButtons();
	});

	function addItem(name, day) {
		const li = document.createElement("li");
		li.innerHTML = `${day} : ${name} 
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>`;
		foodList.appendChild(li);

		li.querySelector(".edit-btn").addEventListener("click", () => {
			nameInput.value = name;
			daySelect.value = day;
			currentEditIndex = Array.from(foodList.children).indexOf(li);
			console.log(currentEditIndex);
			toggleButtons();
		});

		li.querySelector(".delete-btn").addEventListener("click", () => {
			foodList.removeChild(li);
		});
	}

	function updateItem(index, name, day) {
		const li = foodList.children[index];
		console.log(li);
		li.innerHTML = `${day} : ${name} 
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>`;

		li.querySelector(".edit-btn").addEventListener("click", () => {
			nameInput.value = name;
			daySelect.value = day;
			currentEditIndex = index;
			toggleButtons();
		});

		li.querySelector(".delete-btn").addEventListener("click", () => {
			foodList.removeChild(li);
		});

		currentEditIndex = null;
	}

	function clearInputs() {
		nameInput.value = "";
		daySelect.value = "Monday";
	}

	function toggleButtons() {
		addButton.style.display =
			addButton.style.display === "none" ? "inline-block" : "none";
		updateButton.style.display =
			updateButton.style.display === "none" ? "inline-block" : "none";
		cancelButton.style.display =
			cancelButton.style.display === "none" ? "inline-block" : "none";
	}
});

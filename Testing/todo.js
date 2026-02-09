const todoListBtn = document.getElementById("todoList-btn");
const input = document.getElementById("input");
const list = document.getElementById("listContainer");
const Day = document.getElementById("Day");
const Date = document.getElementById("Date");
let editIcon = document.getElementsByTagName("span");
let deleteIcon = document.getElementsByTagName("span");
let liText = document.createElement("p");
let newList;
let editedTask = null;
let editedDay = null;
let editedDate = null;

function addTask() {
  if (input.value === "") {
    alert("Enter the task!");
    return;
  } else if (Date.value === "") {
    alert("Enter the Date");
    return;
  }
  if (editedTask) {
    console.log("editedTask: ", editedTask);
    editedTask.innerText = input.value;
    editedDay.innerText = Day.value;
    editedDate.innerText = Date.value;
    editedTask.appendChild(editedDay);
    editedTask.appendChild(editedDate);
    editedTask.appendChild(editIcon);
    editedTask.appendChild(deleteIcon);
    liText.innerText = input.value;
    editedTask = null;
    todoListBtn.innerText = "Add";
    input.value = "";
  } else {
    const newList = document.createElement("li");
    liText.classList.add("taskText");
    liText.innerHTML = input.value;
    newList.innerHTML = liText.innerHTML;
    console.log("newList: ", newList);
    list.appendChild(newList);

    deleteIcon = document.createElement("span");
    editIcon = document.createElement("span");
    const dayOfTask = document.createElement("span");
    const dateOfTask = document.createElement("span");

    dayOfTask.classList.add("dayOfTask");
    dateOfTask.classList.add("dateOfTask");
    dayOfTask.innerText = Day.value;
    dateOfTask.innerText = Date.value;
    deleteIcon.innerHTML = '<i class="bi bi-trash3-fill"></i>';
    editIcon.innerHTML = '<i class="bi bi-pencil-square"></i>';
    editIcon.classList.add("editIcon");

    newList.appendChild(dayOfTask);
    newList.appendChild(dateOfTask);
    newList.appendChild(editIcon);
    newList.appendChild(deleteIcon);
    deleteIcon.addEventListener("click", function (e) {
      list.removeChild(newList);
    });

    editIcon.addEventListener("click", function (e) {
      input.value = liText.innerText;
      input.focus();
      editedTask = newList;
      editedDay = dayOfTask;
      editedDate = dateOfTask;
      todoListBtn.innerText = "Edit";
    });

    newList.addEventListener("click", function (e) {
      newList.classList.toggle("checked");
    });
  }
  input.value = "";
}

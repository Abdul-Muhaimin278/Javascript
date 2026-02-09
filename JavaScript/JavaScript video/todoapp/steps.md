# Creating a basic Todo list with local storage

## 1. HTML structure

- Create an HTML structure with an input field , a button and a container to hold todo items
- Add a class to the container (e.g `todo_lists_elem`)

## 2. JavaScript Setup

- Select the necessary DOM elements and store references(e.g., `mainToDoElem` and `inputValue` )

## 3. Add Click Event

- Add a click event listener to the "Add todo button"(`btn`).
- In the Event listener, call a function (e.g., `addToDoList` ) to handle the new todo.

## 4. Add Todo Function

- In the `addToDoList` function, prevent the default form submission.
- Create a new todo element (e.g., a `div ` with a class `main_to_div `) with the input value and a delete button.
- Append the new todo Element to the container (`mainToDoElem`).
- Store the new todo in an array (`localToDoLists`) and update Local Storage using `localStorage.setItem`.

## 5. Get todo from Local Storage

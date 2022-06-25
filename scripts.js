const text = document.getElementById("add");
const sortTaskButton = document.getElementById("sort-by-name");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");
// array to add items
let todoArray = [];
// add items to do list
addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  todoArray.push(text.value);
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
});
//Display items on screen
function displayTodo() {
  // let todo = localStorage.getItem("todo");
  // if (todo === null) {
  //   todoArray = [];
  // } else {
  //   todoArray = JSON.parse(todo);
  // }
  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='todo d-flex flex-row'>
  <li class="d-flex flex-row gap-2" id="${ind}">
  <input type="checkbox" onclick="itemCompleted(${ind})" class="mt-2 chkItem form-check-input">
  <p id="displayedItems">${list}</p>
  <button onclick='deleteTodo(${ind})'<i id="close-btn" class="btn btn-outline-dark mb-3 mt-1 fa-solid fa-circle-xmark"></i></button>
</div>`;
  });
  listBox.innerHTML = htmlCode;
}
// Delete
function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
}
// Sort by
function SortBy() {
  todoArray.sort((a, b) => {
    if (a.last_nom < b.last_nom) {
      return -1;
    }
    if (a.last_nom > b.last_nom) {
      return 1;
    }
    return 0;
  });

  displayTodo();
}

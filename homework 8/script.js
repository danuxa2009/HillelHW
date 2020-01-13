"use strict";

const addInput = document.querySelector("#enteredTask");
const list = document.querySelector("#toDoList");

document.querySelector("#addButton").addEventListener("click", newTask);

function newTask() {
  const newItem = addInput.value;
  if (newItem) {
    addItemToDo(newItem);
    addInput.value = "";
  }
}

function addItemToDo(text) {
  let item = document.createElement("li");
  item.innerHTML = text;
  list.insertBefore(item, list.childNodes[0]);
}

toDoList.onclick = function(event) {
  event.target.classList.toggle("done");
};

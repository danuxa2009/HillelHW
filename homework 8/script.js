"use strict";

const addButton = document.querySelector("#addButton").addEventListener("click", newTask);
const addInput = document.querySelector("#enteredTask");
const list = document.getElementById("toDoList");

function newTask() {
  const newItem = addInput.value;
  if (newItem) {
    addItemToDo(newItem);
    document.getElementById("enteredTask").value = "";
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

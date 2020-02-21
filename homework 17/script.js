"use strict";

const addNewSticker = document.querySelector("#addNewSticker");
const areaForStickers = document.querySelector("#areaForStickers");

addNewSticker.addEventListener("click", newSticker);


function newSticker() {
    const sticker = document.createElement("div");
    const elemInput = document.createElement("input");

    const deleteButton = document.createElement('button');
    deleteButton.classList = 'deleteBtn'
    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', onDeleteBtnClick)

    sticker.classList = "newTask";
    sticker.insertAdjacentElement("afterbegin", elemInput);
    sticker.insertAdjacentElement('afterbegin', deleteButton)
    areaForStickers.append(sticker);
    saveItems(elemInput);
    setId(elemInput);
}


function onDeleteBtnClick(e) {
    switch (true) {
        case e.target.classList.contains('deleteBtn'):
            deleteSticker(e.target)
            break;
    }
}

function deleteSticker() {
    const stickerBody = event.target.closest('.newTask')
    stickerBody.remove();
}

function setId(elemInput) {
    const newId = Date.now();
    elemInput.id = newId;

}

function saveItems(elemInput) {
    const field = document.getElementById('newId');
    sessionStorage.setItem('title', field.value);

}
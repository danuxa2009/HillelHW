"use strict";

const LOCALSTORAGE_KEY = 'stickers';

const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_STICKER_CONTROL_CLASS = 'edit-sticker-control';

const stickerTemplate = document.getElementById('stickerTemplate').innerHTML;
const areaForStickers = document.getElementById('areaForStickers');


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

let stickersList = [];


document.getElementById('addStickerBtn').addEventListener('click', onAddStickerBtnClick);
document.getElementById('clearAllBtn').addEventListener('click', onClearAllBtnClick);

areaForStickers.addEventListener('click', onAreaForStickersClick);
areaForStickers.addEventListener('blur', onAreaForStickersBlur, true);

init();

function onAddStickerBtnClick() {
    createSticker();
}

function onClearAllBtnClick() {
    clearAll();
}

function onAreaForStickersBlur(e) {
    const element = e.target;

    switch (true) {
        case e.target.classList.contains(EDIT_STICKER_CONTROL_CLASS):
            updateStickers(
                element.parentElement.dataset.stickerIndex,
                element.name,
                element.value
            );
            break;
    }
}



function onAreaForStickersClick(e) {
    switch (true) {
        case e.target.classList.contains(DELETE_BTN_CLASS):
            deleteSticker(e.target.parentElement.dataset.stickerIndex);
            break;
    }
}

function init() {
    restoreState();
    renderList();
}

function renderList() {
    stickersList.forEach(renderStickers);
}

function renderStickers(sticker) {
    areaForStickers.insertAdjacentHTML('beforeEnd', getStickerHtml(sticker))
}

function getStickerHtml(sticker) {
    return stickerTemplate.replace('{{id}}', sticker.id).replace('{{description}}', sticker.description)
}


function updateStickers(id, name, value) {
    const sticker = stickersList.find(element => element.id == id);

    sticker[name] = value;
    saveState();

}


function clearAll() {
    stickersList = [];
    saveState();
    areaForStickers.innerHTML = '';
}

function deleteSticker(id) {
    stickersList = stickersList.filter(element => element.id != id);
    saveState();
    deleteStickerElement(id);
}

function deleteStickerElement(id) {
    const element = getStickerElement(id);
    element && element.remove();
}

function getStickerElement(id) {
    return areaForStickers.querySelector(`[data-sticker-index="${id}"]`);
}

function createSticker() {
    const sticker = {
        id: Date.now(),
        description: ''
    };
    stickersList.push(sticker);
    saveState();
    renderStickers(sticker)
}


function saveState() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(stickersList));
}

function restoreState() {
    stickersList = localStorage.getItem(LOCALSTORAGE_KEY)
    stickersList = stickersList ? JSON.parse(stickersList) : [];
}
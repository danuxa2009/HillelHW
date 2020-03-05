"use strict";

const LOCALSTORAGE_KEY = "stickers";
const LOCALSTORAGE_POSITION_KEY = "positionSticker";



const stickerTemplate = $("#stickerTemplate").html();
const $areaForStickers = $("#areaForStickers");
const $modalTextInput = $("#modalTextInput");

let positions = [];
let stickersList = [];
let dialog;

$("#addStickerBtn").on("click", onAddStickerBtnClick);
$("#clearAllBtn").on("click", onClearAllBtnClick);

$areaForStickers.on("click", '.delete-btn', onDeleteBtnClick);
$areaForStickers.on("focusout", '.edit-sticker-control', onAreaForStickersBlur);

init();

function onAddStickerBtnClick() {
  dialog.dialog("open");
}

function onClearAllBtnClick() {
  clearAll();
}

function onAreaForStickersBlur(e) {
  const element = e.target;
  updateStickers($(element.parentElement).data('sticker-index'), element.name, element.value);
}

function onDeleteBtnClick(e) {
  deleteSticker($(e.target.parentElement).data('sticker-index'));
}

function init() {
  initDialog();
  restoreState();
  renderList();
}

function renderList() {
  stickersList.forEach(renderStickers);
  initDrag();
}

function renderStickers(sticker) {
  $areaForStickers.append(getStickerHtml(sticker));
}

function getStickerHtml(sticker) {
  return stickerTemplate.replace("{{id}}", sticker.id).replace("{{description}}", sticker.description);
}

function updateStickers(id, name, value) {
  const sticker = stickersList.find(element => element.id == id);

  sticker[name] = value;
  saveState();
}

function clearAll() {
  stickersList = [];
  saveState();
  $areaForStickers.html("");
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
    id: jQuery.now(),
    description: $modalTextInput.val(),
    pos: getPosition() // стикеру нужно добавть обновление позицию с помощью getPosition()
  };
  stickersList.push(sticker);
  saveState();
  renderStickers(sticker);
}

function saveState() {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(stickersList));
}

function restoreState() {
  stickersList = localStorage.getItem(LOCALSTORAGE_KEY);
  stickersList = stickersList ? JSON.parse(stickersList) : [];
}

function initDialog() {
  dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 450,
    width: 210,
    modal: true,
    buttons: {
      Create: function () {
        createSticker();
        initDrag();
        dialog.dialog("close");
      },
      Cancel: function () {
        dialog.dialog("close");
      }
    },
    close: function () {
      $modalTextInput.val("");
    }
  });
}

function initDrag() {
  $(".sticker").draggable({
    handle: ".areaForDrag",
    cursor: "grabbing",
    opacity: 0.5,
    scroll: false,
    stop: function (e, ui, ) {
      positions = ui.position;
      savePosition();
      getPosition(); // стикеру нужно добавть обновление позицию с помощью getPosition()
    }
  });
}

function getPosition() {
  const position = JSON.parse(localStorage.getItem(LOCALSTORAGE_POSITION_KEY));
  return position;
}

function savePosition() {
  localStorage.setItem(LOCALSTORAGE_POSITION_KEY, JSON.stringify(positions));
}
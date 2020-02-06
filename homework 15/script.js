"use strict";

const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";
const ALBUM_PHOTOS_URL = albumId => `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;

const albumsList = document.getElementById("albumsList");
const albumPhotosList = document.getElementById("albumPhotosList");
const albumItemTemplate = document.getElementById("albumItemTemplate").innerHTML;
const photoItemTemplate = document.getElementById("photoItemTemplate").innerHTML;

albumsList.addEventListener("click", getId);

getAlbums();

function getAlbums() {
  fetch(ALBUMS_URL)
    .then(response => response.json())
    .then(renderAlbums);
}

function getFullAlbum(albumId) {
  fetch(ALBUM_PHOTOS_URL(albumId))
    .then(response => response.json())
    .then(renderPhotos);
}

function renderAlbums(list) {
  list.forEach(addAlbum);
}

function renderPhotos(list) {
  resetPhotos(albumPhotosList);
  list.forEach(addPhotos);
}

function addAlbum(album) {
  const html = albumItemTemplate.replace("{{title}}", album.title).replace("{{id}}", album.id);
  const newAlbumEl = htmlToElment(html);
  albumsList.append(newAlbumEl);
}

function addPhotos(photo) {
  const html = photoItemTemplate.replace("{{url}}", photo.url);
  const newPhotoEl = htmlToElment(html);
  albumPhotosList.append(newPhotoEl);
}

function htmlToElment(html) {
  const template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function getId(e) {
  const id = e.target.getAttribute("id");
  getFullAlbum(id);
}

function resetPhotos(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

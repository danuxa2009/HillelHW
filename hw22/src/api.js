const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";

const API = {
  getPhotos: getPhotos
};

function getPhotos() {
  fetch(PHOTOS_URL)
    .then(response => response.json())
    .then(renderPhotos);
}

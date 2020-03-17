const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos?_limit=30";

const API = {};

API.getPhotos = () => {
  return fetch(PHOTOS_URL).then(response => response.json());
};

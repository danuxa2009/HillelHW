export const API = {};

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos?_limit=30";

API.getPhotos = () => {
  return fetch(PHOTOS_URL).then(response => response.json());
};

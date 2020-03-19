import { API } from "./api";
import "./styles.sass";
import $ from "jquery";
import "nanogallery2/src/jquery.nanogallery2.core";

$(() => {
  const $galleryContainer = $("#galleryContainer");
  const photoItemTemplate = $("#photoItemTemplate").html();

  API.getPhotos().then(setGallery);

  function setGallery(list) {
    renderPhotos(list);
    initGallery();
  }

  function renderPhotos(photos) {
    $galleryContainer.html(photos.map(addPhoto));
  }

  function addPhoto(photo) {
    return photoItemTemplate.replace("{{url}}", photo.url).replace("{{thumbnailUrl}}", photo.thumbnailUrl);
  }

  function initGallery() {
    $galleryContainer.nanogallery2();
  }
});

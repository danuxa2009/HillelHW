const $galleryContainer = $("#galleryContainer");


// const $photoItemTemplate = $("#photoItemTemplate").html();

init();

function init() {
  API.getPhotos();
}

function renderPhotos(list) {
  list.forEach(addPhotos);
}

function addPhotos(photo) {
  const $html = $("#photoItemTemplate")
    .replace("{{url}}", photo.url)
    .replace("{{thumbnailUrl}}", photo.thumbnailUrl);

  const newPhotoEl = htmlToElement($html);
  galleryContainer.append(newPhotoEl);
  console.log(photo.url);
}

function htmlToElement(html) {
  const template = document.createElement("template");

  template.innerHTML = html;
  return template.content.firstChild;
}

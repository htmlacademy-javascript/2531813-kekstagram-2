import { openBigPicture } from "./bigPicture.js";

const template = document.querySelector('#picture').content.querySelector('.picture');
export const container = document.querySelector('.pictures');

let localPhotos;

const clear = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
};

export const render = (pictures) => {
  localPhotos = [...pictures];
  clear();
  pictures.forEach((photo) => {
    const clone = template.cloneNode(true);
    const img = clone.querySelector('.picture__img');
    const likes = clone.querySelector('.picture__likes');
    const comments = clone.querySelector('.picture__comments');

    img.src = photo.url;
    img.alt = photo.description;
    likes.textContent = photo.likes;
    comments.textContent = photo.comments.length;
    clone.dataset.id = photo.id;

    container.appendChild(clone);
  });
};

container.addEventListener('click', (evt) => {
  const thumbnailElement = evt.target.closest('.picture');
  if (thumbnailElement) {
    const id = Number(thumbnailElement.dataset.id);
    const photo = localPhotos.find((item) => item.id === id);
    openBigPicture(photo);
  }
});

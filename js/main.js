import { getPhotos } from "./photos.js";
import { render } from "./thumbnail.js";
import { openBigPicture } from './bigPicture.js';
import { container } from './thumbnail.js';
const photosData = getPhotos();
console.log(photosData);

render(photosData);


container.addEventListener('click', (evt) => {
  const thumbnailElement = evt.target.closest('.picture');
  if (!thumbnailElement) return;

  const index = Array.from(container.children).indexOf(thumbnailElement);
  if (index === -1) return;

  const photoData = photosData[index];
  openBigPicture(photoData);
});

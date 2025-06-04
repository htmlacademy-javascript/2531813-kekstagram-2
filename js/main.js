import { getPhotos } from "./photos.js";
import { render } from "./thumbnail.js";
import { openBigPicture } from './bigPicture.js';
import { container } from './thumbnail.js';
const photosData = getPhotos();
console.log(photosData);

render(photosData);

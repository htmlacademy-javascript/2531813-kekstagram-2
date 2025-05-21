import { getPhotos } from "./photos.js";
import { render } from "./thumbnail.js";
const photosData = getPhotos();
console.log(photosData);

render(photosData);



import { MOCKED_PHOTOS } from '../mocks/example.js';


const template = document.querySelector("#picture").content.querySelector(".picture");

const photo = mockedPhototos[0];
const image = template.querySelector('.picture__img');


image.src = photo.url;
image.alt = photo.description;

template.querySelector('.picture__comments').textContent = photo.comments.length;
template.querySelector('.picture__likes').textContent = photo.likes;

const container = document.querySelector('.pictures');
container.appendChild(template)



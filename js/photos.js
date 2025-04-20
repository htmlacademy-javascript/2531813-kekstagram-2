import { getComments } from './comments.js';
import { getRandomPositiveInteger } from './utils.js';
import { PHOTOS_COUNT, MIN_LIKES, MAX_LIKES, DESCRIPTIONS } from './constants.js';

export const getPhotos = () => {
  const photos = [];

  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
      description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
      comments: getComments()
    });
  }

  return photos;
};

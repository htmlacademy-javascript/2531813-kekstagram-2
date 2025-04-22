import { getRandomPositiveInteger } from './utils.js';
import { MESSAGES, NAMES, COMMENTS_MAX_ID, MIN_AVATAR, MAX_AVATAR } from './constants.js';

export const getComments = () => {
  const countComments = getRandomPositiveInteger(0, 30); // Используйте ваши константы
  const comments = [];

  for (let i = 1; i <= countComments; i++) {
    comments.push({
      id: getRandomPositiveInteger(0, COMMENTS_MAX_ID),
      avatar: `img/avatar-${getRandomPositiveInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
    });
  }

  return comments;
};

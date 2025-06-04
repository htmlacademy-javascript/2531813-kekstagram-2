import { COMMENTS_STEP } from "./constants.js";

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsShownCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const commentsList = bigPicture.querySelector('.social__comments');
const caption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentTemplate = bigPicture.querySelector('.social__comment');
const commentCountBlock = document.querySelector('.social__comment-shown-count');
const loadMoreButton = document.querySelector('.comments-loader');

let localComments;
let renderedComments = 0;

const renderStatistic = () => {
  commentCountBlock.textContent = renderedComments
};
const renderLoader = () => {
  if (localComments.length) {
    loadMoreButton.classList.remove('hidden');
  } else {
    loadMoreButton.classList.add('hidden');
  }
};

const renderComments = () => {
  localComments.splice(0, COMMENTS_STEP).forEach((comment) => {
    const li = commentTemplate.cloneNode(true);
    const img = li.querySelector('.social__picture');
    img.src = comment.avatar;
    img.alt = comment.name;
    li.querySelector('.social__text').textContent = comment.message;
    commentsList.appendChild(li);
    renderedComments++;
  });
  renderStatistic();
  renderLoader();
};

const openBigPicture = (photoData) => {
  bigPictureImg.src = photoData.url;
  bigPictureImg.alt = photoData.description || '';
  likesCount.textContent = photoData.likes;
  commentsTotalCount.textContent = photoData.comments.length;
  commentsList.innerHTML = '';
  caption.textContent = photoData.description || '';
  localComments = [...photoData.comments];
  renderedComments = 0;
  renderComments();
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscPress);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onEscPress);
};

const onEscPress = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeBigPicture();
  }
};

closeButton.addEventListener('click', () => {
  closeBigPicture();
});

loadMoreButton.addEventListener('click', () => {
  renderComments();
});

export { openBigPicture };




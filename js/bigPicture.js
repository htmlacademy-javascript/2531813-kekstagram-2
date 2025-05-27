const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsShownCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const commentsList = bigPicture.querySelector('.social__comments');
const caption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

// Функция для открытия окна с данными фотографии
function openBigPicture(photoData) {
  // Заполняем изображение
  bigPictureImg.src = photoData.url;
  bigPictureImg.alt = photoData.description || '';

  // Лайки
  likesCount.textContent = photoData.likes;

  // Общее количество комментариев
  commentsTotalCount.textContent = photoData.comments.length;

  // Показываем комментарии (можно реализовать постранично)
  commentsList.innerHTML = '';
  photoData.comments.forEach((comment) => {
    const li = document.createElement('li');
    li.className = 'social__comment';

    const img = document.createElement('img');
    img.className = 'social__picture';
    img.src = comment.avatar;
    img.alt = comment.name;
    img.width = 35;
    img.height = 35;

    const p = document.createElement('p');
    p.className = 'social__text';
    p.textContent = comment.message;

    li.appendChild(img);
    li.appendChild(p);
    commentsList.appendChild(li);
  });

  // Количество показанных комментариев (можно сделать динамически)
  commentsShownCount.textContent = photoData.comments.length;

  // Описание
  caption.textContent = photoData.description || '';

  // Показываем окно
  bigPicture.classList.remove('hidden');

  // Удаляем класс с body, чтобы не было прокрутки (если нужно)
  document.body.classList.add('modal-open');

  // Обработчик закрытия по Esc
  document.addEventListener('keydown', onEscPress);
}

// Функция для закрытия окна
function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onEscPress);
}

// Обработчик Esc
function onEscPress(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeBigPicture();
  }
}

// Обработчик клика по кнопке закрытия
closeButton.addEventListener('click', () => {
  closeBigPicture();
});

// Экспортируем функцию для использования при клике на миниатюру
export { openBigPicture };

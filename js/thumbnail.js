const template = document.querySelector('#picture').content.querySelector('.picture');

export const render = (pictures) => {
  const container = document.querySelector('.pictures');
  container.innerHTML = '';

  pictures.forEach((photo) => {
    const clone = template.cloneNode(true);
    const img = clone.querySelector('.picture__img');
    const likes = clone.querySelector('.picture__likes');
    const comments = clone.querySelector('.picture__comments');

    img.src = photo.url;
    img.alt = photo.description;
    likes.textContent = `${photo.likes} лайков`;
    comments.textContent = `${photo.comments.length} комментариев`;

    container.appendChild(clone);
  });
};





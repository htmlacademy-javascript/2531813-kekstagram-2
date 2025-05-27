const template = document.querySelector('#picture').content.querySelector('.picture');
export const container = document.querySelector('.pictures');

const clear = () => {
document.querySelectorAll('.picture').forEach((card)=>{
card.remove()
});

}

export const render = (pictures) => {



  pictures.forEach((photo) => {
    const clone = template.cloneNode(true);
    const img = clone.querySelector('.picture__img');
    const likes = clone.querySelector('.picture__likes');
    const comments = clone.querySelector('.picture__comments');

    img.src = photo.url;
    img.alt = photo.description;
    likes.textContent = photo.likes;
    comments.textContent = photo.comments.length;

    container.appendChild(clone);
  });
};





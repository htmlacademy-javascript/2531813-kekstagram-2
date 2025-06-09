const input = document.querySelector('.img-upload__input');
const modal = document.querySelector('.img-upload__overlay');
const closed = document.querySelector('.img-upload__cancel');

input.addEventListener('change',() => {
modal.classList.remove('hidden');
});

closed.addEventListener('click',() =>{
modal.classList.add('hidden');

});

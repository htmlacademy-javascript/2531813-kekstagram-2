const MAX_DESCRIPTION = 140;
const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS = 5;

const formTag = document.querySelector('.img-upload__form');
const descriptionTag = formTag.querySelector('.text__description');
const hashtagTag = formTag.querySelector('.text__hashtags');

const pristine = new Pristine(formTag, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'form__error'
});

const isEmpty = (value) => value.trim().length === 0;

const checkDescription = (value) => value.length <= MAX_DESCRIPTION;

const getHashtags = (text) =>
  text.trim().split(/\s+/).filter((item) => item.length > 0);

const checkHashtagsCount = (value) => {
  if (isEmpty(value)) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const checkHashtagsFormat = (value) => {
  if (isEmpty(value)) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_PATTERN.test(item));
};

const checkUniqueHashtags = (value) => {
  if (isEmpty(value)) {
    return true;
  }
  const hashtags = getHashtags(value.toLowerCase());
  const uniqueHashtags = new Set(hashtags);
  return hashtags.length === uniqueHashtags.size;
};

pristine.addValidator(
  descriptionTag,
  checkDescription,
  `Длина описания не должна превышать ${MAX_DESCRIPTION} символов`
);

pristine.addValidator(
  hashtagTag,
  checkHashtagsFormat,
  'Хэштег должен начинаться с # и содержать только буквы и цифры, не более 20 символов'
);

pristine.addValidator(
  hashtagTag,
  checkHashtagsCount,
  `Нельзя указать больше ${MAX_HASHTAGS} хэштегов`
);

pristine.addValidator(
  hashtagTag,
  checkUniqueHashtags,
  'Хэштеги не должны повторяться'
);

export const isValid = () => pristine.validate();

formTag.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});

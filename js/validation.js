const MAX_DESCRIPTION = 140;
const HASHTAG_FORMULA = /^#[a-zA-Z0-9]{1,19}$/;

const formTag = document.querySelector('.img-upload__form');
const descriptionTag = formTag.querySelector('.text__description');
const hashtagTag = formTag.querySelector('.text__hashtags');

const pristine = new Pristine(formTag, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper-error'
});

const checkDescription = (value) => value.length <= MAX_DESCRIPTION;

const getHashtags = (text) =>
  text.trim().split(/\s+/).filter((item) => item.length > 0);

const checkHashtags = (value) => {
  if (value.trim().length === 0) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_FORMULA.test(item));
};

pristine.addValidator(
  descriptionTag,
  checkDescription,
  `Длина описания не должна превышать ${MAX_DESCRIPTION}`
);

pristine.addValidator(
  hashtagTag,
  checkHashtags,
  'Неверный хэштег'
);

export const isValid = () => pristine.validate();

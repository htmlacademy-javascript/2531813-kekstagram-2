const PHOTOS_COUNT = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const COMMENTS_MAX_ID = 1000;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const NAMES = ['Артём', 'Виктор', 'Владимир', 'Илья', 'Александр', 'Анатолий', 'Сергей'];


const MESSAGES = [
  " Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const DESCRIPTIONS = [
  'Закат над морем', 'Горы в тумане', 'Цветущий сад', 'Старый замок на холме',
  'Лесная тропа в осенний день', 'Городские огни ночью', 'Пейзаж с озером и горами',
  'Детская улыбка на фоне радуги', 'Пляж с белым песком и пальмами', 'Снежные вершины в солнечный день',
  'Уютный домик в деревне', 'Цветы весной в парке', 'Космическое небо с яркими звездами',
  'Рыбаки на реке на рассвете', 'Древние руины среди природы',
  'Современный городской пейзаж', 'Тихий вечер у костра',
  'Птицы, летающие над морем',
  'Старые книги на полке библиотеки', 'Водопад в тропическом лесу',
  'Фотография с высоты птичьего полета города',
  'Зимний лес, покрытый снегом',
  'Корабли в гавани на закате', 'Дети, играющие на лужайке',
  'Танец огня в камине'
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getComments = () => {
  const countComments = getRandomPositiveInteger(MIN_COMMENTS, MAX_COMMENTS);
  const comments = [];
  for (let i = 1; i <= countComments; i++) {
    comments.push({
      id: getRandomPositiveInteger(0, COMMENTS_MAX_ID),
      avatar: `img/avatar-${getRandomPositiveInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
    })

  }
  return comments
}

const getPhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
      description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
      comments: getComments()
    })

  }
  return photos
};
console.log(getPhotos());

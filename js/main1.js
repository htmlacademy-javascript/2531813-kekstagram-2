const photoIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25
];

const imageUrls = [
  'photos/{{1}}.jpg', 'photos/{{2}}.jpg', 'photos/{{3}}.jpg',
  'photos/{{4}}.jpg', 'photos/{{5}}.jpg', 'photos/{{6}}.jpg',
  'photos/{{7}}.jpg', 'photos/{{8}}.jpg', 'photos/{{9}}.jpg',
  'photos/{{10}}.jpg', 'photos/{{11}}.jpg', 'photos/{{12}}.jpg',
  'photos/{{13}}.jpg', 'photos/{{14}}.jpg', 'photos/{{15}}.jpg',
  'photos/{{16}}.jpg', 'photos/{{17}}.jpg', 'photos/{{18}}.jpg',
  'photos/{{19}}.jpg', 'photos/{{20}}.jpg', 'photos/{{21}}.jpg',
  'photos/{{22}}.jpg', 'photos/{{23}}.jpg', 'photos/{{24}}.jpg',
  'photos/{{25}}.jpg'
];

const photoDescriptions = [
    'Закат над морем','Горы в тумане','Цветущий сад','Старый замок на холме',
    'Лесная тропа в осенний день','Городские огни ночью','Пейзаж с озером и горами',
    'Детская улыбка на фоне радуги','Пляж с белым песком и пальмами','Снежные вершины в солнечный день',
    'Уютный домик в деревне','Цветы весной в парке','Космическое небо с яркими звездами',
    'Рыбаки на реке на рассвете', 'Древние руины среди природы',
    'Современный городской пейзаж','Тихий вечер у костра',
    'Птицы, летающие над морем',
    'Старые книги на полке библиотеки','Водопад в тропическом лесу',
    'Фотография с высоты птичьего полета города',
    'Зимний лес, покрытый снегом',
    'Корабли в гавани на закате','Дети, играющие на лужайке',
    'Танец огня в камине'
];


 const likes = [
  45, 78, 120, 33, 67,
  89, 150, 200, 25, 90,
  175, 60, 88, 142, 37,
  99, 55, 130, 18, 76,
  165, 48, 112, 85, 95
];

const SIMILAR_PHOTO_COUNT = photoIds.length;

const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

const createWizard = () => {
    const randomIdPhoto = getRandomPositiveInteger(0, photoIds.length - 1);

    return {
        id: photoIds[randomIdPhoto],
        url: imageUrls[randomIdPhoto],
        description: photoDescriptions[randomIdPhoto],
        likes: likes[randomIdPhoto]
    };
};

const similarWizards = Array.from({ length: SIMILAR_PHOTO_COUNT }, createWizard);
console.log(similarWizards);




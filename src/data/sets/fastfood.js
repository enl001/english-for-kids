import Card from '@models/card.js';

// category = 'category',
// word = 'word',
// translation = 'translation',
// image = 'default.png',
// pronunciations = ['default-1.mp3', 'default-2.mp3']
const category = 'fastfood';
const categoryTranslation = 'фастфуд';
export default [
  new Card(
    category,
    categoryTranslation,
    'fast food',
    'фастфуд',
    ['fastfood/chips-1.png'],
    ['fastfood/fastfood-1.mp3', 'fastfood/fastfood-2.mp3'],
  ),
  new Card(
    category,
    categoryTranslation,
    'chips',
    'чипсы',
    ['fastfood/chips-1.png', 'fastfood/chips-2.png'],
    [
      'fastfood/chips-1.mp3',
      'fastfood/chips-2.mp3',
    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'doner kebab',
    'донер кебаб',
    ['fastfood/donerkebab-1.png', 'fastfood/donerkebab-2.png'],
    [
      'fastfood/donerkebab-1.mp3',
      'fastfood/donerkebab-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'donut',
    'пончик',
    ['fastfood/donuts-1.png', 'fastfood/donuts-2.png'],
    [
      'fastfood/donuts-1.mp3',
      'fastfood/donuts-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'french fries',
    'картофель фри',
    ['fastfood/frenchfries-1.png', 'fastfood/frenchfries-2.png'],
    [
      'fastfood/frenchfries-1.mp3',
      'fastfood/frenchfries-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'hamburger',
    'гамбургер',
    ['fastfood/hamburger-1.png', 'fastfood/hamburger-2.png'],
    [
      'fastfood/hamburger-1.mp3',
      'fastfood/hamburger-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'hot dog',
    'хот дог',
    ['fastfood/hotdog-1.png', 'fastfood/hotdog-2.png'],
    [
      'fastfood/hotdog-1.mp3',
      'fastfood/hotdog-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'pizza',
    'пицца',
    ['fastfood/pizza-1.png', 'fastfood/pizza-2.png'],
    [
      'fastfood/pizza-1.mp3',
      'fastfood/pizza-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'sandwich',
    'сэндвич',
    ['fastfood/sandwich-1.png', 'fastfood/sandwich-2.png'],
    [
      'fastfood/sandwich-1.mp3',
      'fastfood/sandwich-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'sushi',
    'суши',
    ['fastfood/sushi-1.png', 'fastfood/sushi-2.png'],
    [
      'fastfood/sushi-1.mp3',
      'fastfood/sushi-2.mp3',

    ],
  ),
];

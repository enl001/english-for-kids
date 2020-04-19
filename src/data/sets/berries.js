import Card from '@models/card.js';

// category = 'category',
// word = 'word',
// translation = 'translation',
// image = 'default.png',
// pronunciations = ['default-1.mp3', 'default-2.mp3']
const category = 'berries';
const categoryTranslation = 'ягоды';
export default [
  new Card(
    category,
    categoryTranslation,
    'berries',
    'ягоды',
    ['berries/cherry-1.png'],
    ['berries/berries-1.mp3', 'berries/berries-2.mp3'],
  ),
  new Card(
    category,
    categoryTranslation,
    'blackberry',
    'ежевика',
    ['berries/blackberry-1.png', 'berries/blackberry-1.png'],
    [
      'berries/blackberry-1.mp3',
      'berries/blackberry-2.mp3',
    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'blueberries',
    'черника',
    ['berries/blueberries-1.png', 'berries/blueberries-1.png'],
    [
      'berries/blueberries-1.mp3',
      'berries/blueberries-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'cherry',
    'вишня',
    ['berries/cherry-1.png', 'berries/cherry-1.png'],
    [
      'berries/cherry-1.mp3',
      'berries/cherry-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'cranberries',
    'клюква',
    ['berries/cranberries-1.png', 'berries/cranberries-1.png'],
    [
      'berries/cranberries-1.mp3',
      'berries/cranberries-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'currant',
    'смородина',
    ['berries/currant-1.png', 'berries/currant-1.png'],
    [
      'berries/currant-1.mp3',
      'berries/currant-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'grapes',
    'виноград',
    ['berries/grapes-1.png', 'berries/grapes-1.png'],
    [
      'berries/grapes-1.mp3',
      'berries/grapes-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'raspberry',
    'малина',
    ['berries/raspberries-1.png', 'berries/raspberries-1.png'],
    [
      'berries/raspberries-1.mp3',
      'berries/raspberries-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'strawberry',
    'клубника',
    ['berries/strawberry-1.png', 'berries/strawberry-1.png'],
    [
      'berries/strawberry-1.mp3',
      'berries/strawberry-2.mp3',

    ],
  ),
];

import Card from '@models/card.js';

// category = 'category',
// word = 'word',
// translation = 'translation',
// image = 'default.png',
// pronunciations = ['default-1.mp3', 'default-2.mp3']
const category = 'fruits';
const categoryTranslation = 'фрукты';
export default [
  new Card(
    category,
    categoryTranslation,
    'fruits',
    'фрукты',
    ['fruits/pomegranate-1.png'],
    ['fruits/fruits-1.mp3', 'fruits/fruits-2.mp3'],
  ),
  new Card(
    category,
    categoryTranslation,
    'apple',
    'яблоко',
    ['fruits/apple-1.png', 'fruits/apple-2.png'],
    [
      'fruits/apple-1.mp3',
      'fruits/apple-2.mp3',
    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'apricot',
    'абрикос',
    ['fruits/apricot-1.png', 'fruits/apricot-2.png'],
    [
      'fruits/apricot-1.mp3',
      'fruits/apricot-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'avocado',
    'авокадо',
    ['fruits/avocado-1.png', 'fruits/avocado-2.png'],
    [
      'fruits/avocado-1.mp3',
      'fruits/avocado-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'kiwi',
    'киви',
    ['fruits/kiwi-1.png', 'fruits/kiwi-2.png'],
    [
      'fruits/kiwi-1.mp3',
      'fruits/kiwi-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'lemon',
    'лимон',
    ['fruits/lemon-1.png', 'fruits/lemon-2.png'],
    [
      'fruits/lemon-1.mp3',
      'fruits/lemon-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'orange',
    'апельсин',
    ['fruits/orange-1.png', 'fruits/orange-2.png'],
    [
      'fruits/orange-1.mp3',
      'fruits/orange-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'pear',
    'груша',
    ['fruits/pear-1.png', 'fruits/pear-2.png'],
    [
      'fruits/pear-1.mp3',
      'fruits/pear-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'pineapple',
    'ананас',
    ['fruits/pineapple-1.png', 'fruits/pineapple-2.png'],
    [
      'fruits/pineapple-1.mp3',
      'fruits/pineapple-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'pitaya',
    'питайя',
    ['fruits/pitaya-1.png', 'fruits/pitaya-2.png'],
    [
      'fruits/pitaya-1.mp3',
      'fruits/pitaya-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'pomegranate',
    'гранат',
    ['fruits/pomegranate-1.png', 'fruits/pomegranate-2.png'],
    [
      'fruits/pomegranate-1.mp3',
      'fruits/pomegranate-2.mp3',

    ],
  ),
  new Card(
    category,
    categoryTranslation,
    'prune',
    'чернослив',
    ['fruits/prune-1.png', 'fruits/prune-2.png'],
    [
      'fruits/prune-1.mp3',
      'fruits/prune-2.mp3',

    ],
  ),
];

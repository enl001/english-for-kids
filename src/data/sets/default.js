import Card from '@models/card.js';

// category = 'category',
// word = 'word',
// translation = 'translation',
// image = 'default.png',
// pronunciations = ['default-1.mp3', 'default-2.mp3']
const category = 'Default';
const categoryTranslation = 'Стандарт';
export default [
  new Card(
    category,
    categoryTranslation,
    'Default',
    'Стандарт',
    ['default.png'],
    ['default-1.mp3', 'default-2.mp3'],
  ),
  new Card(
    category,
    categoryTranslation,
    'Default',
    'Стандарт',
    ['default.png'],
    ['default-1.mp3', 'default-2.mp3'],
  ),
  new Card(
    category,
    categoryTranslation,
    'Default',
    'Стандарт',
    ['default.png'],
    ['default-1.mp3', 'default-2.mp3'],
  ),
];

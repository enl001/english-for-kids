import Card from '@models/card.js';

// category = 'category',
// word = 'word',
// translation = 'translation',
// image = 'default.png',
// pronunciations = ['default-m.mp3', 'default-f.mp3']
const category = 'numbers';
export default [
  new Card(
    category,
    'numbers',
    'цифры',
    ['numbers/numbers.png'],
    ['numbers/numbers.mp3', 'numbers/numbers.mp3'],
  ),
  new Card(
    category,
    'zero',
    'ноль',
    ['numbers/zero-1.png', 'numbers/zero-2.png'],
    ['numbers/zero-1.mp3', 'numbers/zero-2.mp3', 'numbers/zero-3.mp3', 'numbers/zero-4.mp3'],
  ),
  new Card(
    category,
    'one',
    'один',
    ['numbers/one-1.png', 'numbers/one-2.png'],
    ['numbers/one-1.mp3', 'numbers/one-2.mp3', 'numbers/one-3.mp3', 'numbers/one-4.mp3'],
  ),
  new Card(
    category,
    'two',
    'два',
    ['numbers/two-1.png', 'numbers/two-2.png'],
    ['numbers/two-1.mp3', 'numbers/two-2.mp3', 'numbers/two-3.mp3', 'numbers/two-4.mp3'],
  ),
  new Card(
    category,
    'three',
    'три',
    ['numbers/three-1.png', 'numbers/three-2.png'],
    ['numbers/three-1.mp3', 'numbers/three-2.mp3', 'numbers/three-3.mp3', 'numbers/three-4.mp3'],
  ),
  new Card(
    category,
    'four',
    'четыре',
    ['numbers/four-1.png', 'numbers/four-2.png'],
    ['numbers/four-1.mp3', 'numbers/four-2.mp3', 'numbers/four-3.mp3', 'numbers/four-4.mp3'],
  ),
  new Card(
    category,
    'five',
    'пять',
    ['numbers/five-1.png', 'numbers/five-2.png'],
    ['numbers/five-1.mp3', 'numbers/five-2.mp3', 'numbers/five-3.mp3', 'numbers/five-4.mp3'],
  ),
  new Card(
    category,
    'six',
    'шесть',
    ['numbers/six-1.png', 'numbers/six-2.png'],
    ['numbers/six-1.mp3', 'numbers/six-2.mp3', 'numbers/six-3.mp3', 'numbers/six-4.mp3'],
  ),
  new Card(
    category,
    'seven',
    'семь',
    ['numbers/seven-1.png', 'numbers/seven-2.png'],
    ['numbers/seven-1.mp3', 'numbers/seven-2.mp3', 'numbers/seven-3.mp3', 'numbers/seven-4.mp3'],
  ),
  new Card(
    category,
    'eight',
    'восемь',
    ['numbers/eight-1.png', 'numbers/eight-2.png'],
    ['numbers/eight-1.mp3', 'numbers/eight-2.mp3', 'numbers/eight-3.mp3', 'numbers/eight-4.mp3'],
  ),
  new Card(
    category,
    'nine',
    'девять',
    ['numbers/nine-1.png', 'numbers/nine-2.png'],
    ['numbers/nine-1.mp3', 'numbers/nine-2.mp3', 'numbers/nine-3.mp3', 'numbers/nine-4.mp3'],
  ),
];

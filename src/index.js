import Card from '@models/card';
import './sass/styles.scss';
import vocabulary from '@data/vocabulary';
import { sourceType, getPath } from '@utils/path';

// https://www.youtube.com/watch?v=eSaF8NXeNsA&vl=en-GB
// https://javascript.info/custom-elements
// https://ayushgp.github.io/html-web-components-using-vanilla-js/

const { categories } = vocabulary;
console.log(categories);
const set = (vocabulary.getCardSetByCategory(categories[0]));
document.addEventListener('click', () => {
  const soundPath = getPath(sourceType.sound, set[1].pronunciation);
  const audio = new Audio(soundPath);
  audio.play();
});

const card = document.getElementById('card');

card.addEventListener('click', (e) => {
  e.stopPropagation();
  if (card.classList.contains('card_flip')) {
    card.classList.add('card_unflip');
    setTimeout(() => {
      card.classList.remove('card_flip', 'card_unflip');
    }, 500);
  } else {
    card.classList.add('card_flip');
  }
});

import Card from '@models/card';
import './sass/styles.scss';
import vocabulary from '@data/vocabulary';
import { sourceType, getPath } from '@utils/path';
import { fillWordCards } from '@components/fillWordCards';

// https://www.youtube.com/watch?v=eSaF8NXeNsA&vl=en-GB
// https://javascript.info/custom-elements
// https://ayushgp.github.io/html-web-components-using-vanilla-js/

const { categories } = vocabulary;
console.log(categories);
const cardSet = (vocabulary.getCardSetByCategory(categories[0]));

const cardContainer = document.querySelector('.cards-layout');

fillWordCards(cardSet, cardContainer);

const findCard = (element) => {
  let a = element;
  while (a) {
    if (a.classList.contains('card')) return a;
    a = a.parentNode;
    if (a.tagName === 'MAIN') return null;
  }
  return null;
};


cardContainer.addEventListener('click', (e) => {
  // e.stopPropagation();
  const card = findCard(e.target);
  if (card) {
    if (e.target.classList.contains('rotate-image')) {
      if (card.classList.contains('card_flip')) {
        card.classList.add('card_unflip');
        setTimeout(() => {
          card.classList.remove('card_flip', 'card_unflip');
        }, 500);
      } else {
        card.classList.add('card_flip');
        setTimeout(() => {
          card.addEventListener('mouseleave', () => {
            console.log('out');
          });
        }, 500);
      }
    } else {
      const id = card.getAttribute('id');
      if (id) {
        const soundPath = getPath(sourceType.sound, cardSet[id].pronunciation);
        const audio = new Audio(soundPath);
        audio.play();
      }
    }
  }
});

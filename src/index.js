import Card from '@models/card';
import './sass/styles.scss';
import vocabulary from '@data/vocabulary';
import { sourceType, getPath } from '@utils/path';
import { createCategoryLayout, deleteCategoryLayout } from '@components/layout';


// https://www.youtube.com/watch?v=eSaF8NXeNsA&vl=en-GB
// https://javascript.info/custom-elements
// https://ayushgp.github.io/html-web-components-using-vanilla-js/

const { categories } = vocabulary;
const currentCardSet = (vocabulary.getCardSetByCategory(categories[0]));

const playTrain = document.getElementById('togglePlay');
let isPlay = false;
const wordCardsAreShown = true;

playTrain.addEventListener('click', () => {
  isPlay = !isPlay;
  playTrain.classList.toggle('toggle_active');
  console.log(isPlay);
  if (wordCardsAreShown) {
    const cards = document.querySelectorAll('.card');
    if (cards) {
      cards.forEach((card) => {
        if (isPlay) {
          card.classList.add('play');
        } else {
          card.classList.remove('play');
        }
      });
    }
  }
});


createCategoryLayout(currentCardSet);


// setTimeout(() => {
//   deleteCategoryLayout();
// }, 10000);
// setTimeout(() => {
//   currentCardSet = (vocabulary.getCardSetByCategory(categories[0]));
//   createCategoryLayout(currentCardSet);
// }, 13000);

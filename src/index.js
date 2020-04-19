import Card from '@models/card';
import './sass/styles.scss';
import vocabulary from '@data/vocabulary';
import { sourceType, getPath } from '@utils/path';
import {
  createCategoryLayout, deleteCategoryLayout, createMenuLayout, deleteMenuLayout,
  createResultLayout, deleteResultLayout, createSideMenuLayout,
} from '@components/layout';
import {
  playTrainSwitchHandler, startResetGameHandler,
  menuButtonHandler, playCurrentCardSound,
} from '@components/headerMenuHandlers';
import { appMode, appPage } from '@components/appPagesModes';
import { cardsContainerHandler } from '@components/cardsHandlers';
import { getRandomIndexes, playSound, findElement } from '@utils/utils';


// https://www.youtube.com/watch?v=eSaF8NXeNsA&vl=en-GB
// https://javascript.info/custom-elements
// https://ayushgp.github.io/html-web-components-using-vanilla-js/

const { categories } = vocabulary;
let currentCardSet = [];

//----------------------------------
// set global variables
//----------------------------------
window.myApplicationMode = appMode.train;
window.gameCardSequence = [];
window.myApplicationPage = appPage.menuPage;
window.gameResultErrors = 0;
window.currentCardSet = [];
// set custom events


document.addEventListener('gameStart', () => {
  console.log('game started!');
  const cardSet = window.currentCardSet;
  window.gameCardSequence = getRandomIndexes(cardSet.length);
  window.gameResultErrors = 0; // reset errors
  playCurrentCardSound(cardSet);
  console.log(window.gameCardSequence);
});

document.addEventListener('gameEnd', (event) => {
  console.log('end game event!');
  setTimeout(() => {
    window.myApplicationPage = appPage.menuPage;
    console.log(event.detail.gameResult);
    deleteCategoryLayout();
    createResultLayout(event.detail.gameResult);
    const path = (event.detail.gameResult.result === 'success')
      ? getPath(sourceType.sound, 'success.mp3')
      : getPath(sourceType.sound, 'failure.mp3');
    setTimeout(() => {
      playSound(path);
    }, 500);
  }, 1000);
  setTimeout(() => {
    // clear star-panel
    document.getElementById('star-panel').textContent = '';
    document.dispatchEvent(new CustomEvent('createMenuLayout'));
  }, 4000);
});

document.addEventListener('createCardsLayout', (event) => {
  console.log(event.detail.category);
  currentCardSet = (vocabulary
    .getCardSetByCategory(event.detail.category.toLowerCase()));
  window.currentCardSet = currentCardSet;
  window.myApplicationPage = appPage.categoryPage;
  deleteCategoryLayout();
  deleteMenuLayout();
  createCategoryLayout(currentCardSet);
});

document.addEventListener('createMenuLayout', () => {
  deleteResultLayout();
  deleteMenuLayout();
  deleteCategoryLayout();
  const menuCardSet = window.menuCardsSet;
  window.currentCardSet = menuCardSet;
  window.myApplicationPage = appPage.menuPage;
  createMenuLayout(menuCardSet);
});

//-----------------------------------------
playTrainSwitchHandler();
startResetGameHandler();
window.menuCardsSet = vocabulary.getCategoriesCards();
createSideMenuLayout(window.menuCardsSet);
console.log('dispatch event');
document.dispatchEvent(new CustomEvent('createMenuLayout'));
menuButtonHandler();

document.addEventListener('click', (event) => {
  const menuButton = document.getElementById('menu-button');
  const menuIsOpen = menuButton.classList.contains('active');
  const isMenuButton = (event.target.classList.contains('hamburger')
  || event.target.classList.contains('hamburger__line'));

  if (menuIsOpen && !isMenuButton) {
    const isMenuList = findElement(event.target, 'menu');
    if (isMenuList) {
      const item = findElement(event.target, 'item');
      if (item) {
        // highlighte
        const menuItemsText = document.querySelectorAll('.item__name');
        menuItemsText.forEach((itemText) => {
          itemText.classList.remove('item__name_selected');
        });
        item.querySelector('.item__name').classList.add('item__name_selected');
        // pick
        const id = parseInt(item.id, 10);
        menuButton.classList.remove('active');
        document.getElementById('side-menu').classList.add('side-menu__container_hidden');
        setTimeout(() => {
          // eslint-disable-next-line no-restricted-globals
          if (!isNaN(id)) {
            const card = window.menuCardsSet[id];
            playSound(getPath(sourceType.sound, card.pronunciation));
            document.dispatchEvent(
              new CustomEvent('createCardsLayout', { detail: { category: card.category } }),
            );
          } else {
            document.dispatchEvent(new CustomEvent('createMenuLayout'));
          }
        }, 500);
      }
    } else {
      menuButton.dispatchEvent(new Event('click'));
    }
  }
});

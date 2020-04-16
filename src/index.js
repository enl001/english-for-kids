import Card from '@models/card';
import './sass/styles.scss';
import vocabulary from '@data/vocabulary';
import { sourceType, getPath } from '@utils/path';
import {
  createCategoryLayout, deleteCategoryLayout, createMenuLayout, deleteMenuLayout,
  createResultLayout, deleteResultLayout,
} from '@components/layout';
import { playTrainSwitchHandler, startResetGameHandler, playCurrentCardSound } from '@components/headerMenuHandlers';
import { appMode, appPage } from '@components/appPagesModes';
import { cardsContainerHandler } from '@components/cardsHandlers';
import { getRandomIndexes, playSound } from '@utils/utils';


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
  }, 1000);
  setTimeout(() => {
    deleteResultLayout();
    currentCardSet = vocabulary.getCategoriesCards();
    window.currentCardSet = currentCardSet;
    createMenuLayout(currentCardSet);
  }, 5000);
});

document.addEventListener('menuPick', (event) => {
  console.log(event.detail.category);
  currentCardSet = (vocabulary
    .getCardSetByCategory(event.detail.category.toLowerCase()));
  window.currentCardSet = currentCardSet;
  window.myApplicationPage = appPage.categoryPage;
  deleteMenuLayout();
  createCategoryLayout(currentCardSet);
});


//-----------------------------------------
playTrainSwitchHandler();
startResetGameHandler();
currentCardSet = vocabulary.getCategoriesCards();
window.myApplicationPage = appPage.menuPage;
window.currentCardSet = currentCardSet;
createMenuLayout(currentCardSet);

import Card from '@models/card';
import './sass/styles.scss';
import vocabulary from '@data/vocabulary';
import { sourceType, getPath } from '@utils/path';
import { createCategoryLayout, deleteCategoryLayout } from '@components/layout';
import { playTrainSwitchHandler, startResetGameHandler } from '@components/headerMenuHandlers';
import { appMode, appPage } from '@components/appPagesModes';


// https://www.youtube.com/watch?v=eSaF8NXeNsA&vl=en-GB
// https://javascript.info/custom-elements
// https://ayushgp.github.io/html-web-components-using-vanilla-js/

const { categories } = vocabulary;
const currentCardSet = (vocabulary.getCardSetByCategory(categories[0]));

//----------------------------------
// set global variables
//----------------------------------
window.myApplicationMode = appMode.train;
window.gameCardSequence = [];
window.myApplicationPage = appPage.categoryPage;
window.gameResultErrors = 0;
//-----------------------------------------


playTrainSwitchHandler();
startResetGameHandler(currentCardSet);
createCategoryLayout(currentCardSet);


// setTimeout(() => {
//   deleteCategoryLayout();
// }, 10000);
// setTimeout(() => {
//   currentCardSet = (vocabulary.getCardSetByCategory(categories[0]));
//   createCategoryLayout(currentCardSet);
// }, 13000);

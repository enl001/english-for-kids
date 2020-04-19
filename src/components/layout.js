import {
  fillWordCards, fillMenuCards, fillResultCard, fillSideMenuCard,
} from '@components/fillLayout';
import { cardsContainerHandler, cardsMouseLeaveHandler } from '@components/cardsHandlers';

export const createCategoryLayout = (cardSet) => {
  (async () => {
    // fill title field with category
    document.getElementById('title').textContent = cardSet[0].category;

    const entry = document.getElementById('card-layout-entry');
    const cardsContainer = document.createElement('DIV');
    cardsContainer.classList.add('cards-layout');
    entry.appendChild(cardsContainer);
    const startResetGame = document.getElementById('start-reset-game');
    startResetGame.classList.remove('button_menu-page');
    startResetGame.classList.remove('repeat');
    await fillWordCards(cardSet, cardsContainer);
    cardsContainerHandler(cardsContainer);
    cardsMouseLeaveHandler(cardsContainer);
  })();
};

export const createMenuLayout = (cardSet) => {
  (async () => {
    // fill title field with category
    document.getElementById('title').textContent = 'ENGLISH TOGETHER';

    const entry = document.getElementById('card-layout-entry');
    const cardsContainer = document.createElement('DIV');
    cardsContainer.classList.add('menu-layout');
    entry.appendChild(cardsContainer);
    const startResetGame = document.getElementById('start-reset-game');
    startResetGame.classList.add('button_menu-page');
    startResetGame.classList.remove('repeat');
    await fillMenuCards(cardSet, cardsContainer);
    cardsContainerHandler(cardsContainer);
  })();
};

export const createResultLayout = (gameResult) => {
  (async () => {
    const entry = document.getElementById('card-layout-entry');
    const cardsContainer = document.createElement('DIV');
    cardsContainer.classList.add('result-layout');
    entry.appendChild(cardsContainer);
    await fillResultCard(cardsContainer, gameResult);
  })();
};

export const createSideMenuLayout = (cardSet) => {
  (async () => {
    const entry = document.getElementById('side-menu');
    const itemsContainer = document.createElement('UL');
    itemsContainer.classList.add('menu');
    entry.appendChild(itemsContainer);
    await fillSideMenuCard(itemsContainer, cardSet);
  })();
};


export const deleteCategoryLayout = () => {
  const cardsContainer = document.querySelector('.cards-layout');
  if (!cardsContainer) return;
  const startResetGame = document.getElementById('start-reset-game');
  startResetGame.classList.add('button_menu-page');
  cardsContainer.remove();
};
export const deleteMenuLayout = () => {
  const cardsContainer = document.querySelector('.menu-layout');
  if (!cardsContainer) return;
  const startResetGame = document.getElementById('start-reset-game');
  startResetGame.classList.remove('button_menu-page');
  cardsContainer.remove();
};
export const deleteResultLayout = () => {
  const cardsContainer = document.querySelector('.result-layout');
  if (!cardsContainer) return;
  cardsContainer.remove();
};

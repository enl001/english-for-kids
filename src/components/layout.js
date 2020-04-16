import { fillWordCards, fillMenuCards, fillResultCard } from '@components/fillLayout';
import { cardsContainerHandler, cardsMouseLeaveHandler } from '@components/cardsHandlers';

export const createCategoryLayout = (cardSet) => {
  (async () => {
    const entry = document.getElementById('card-layout-entry');
    const cardsContainer = document.createElement('DIV');
    const title = document.getElementById('title');
    title.textContent = cardSet[0].category;
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

export const deleteCategoryLayout = () => {
  const cardsContainer = document.querySelector('.cards-layout');
  const startResetGame = document.getElementById('start-reset-game');
  startResetGame.classList.add('button_menu-page');
  cardsContainer.remove();
};
export const deleteMenuLayout = () => {
  const cardsContainer = document.querySelector('.menu-layout');
  const startResetGame = document.getElementById('start-reset-game');
  startResetGame.classList.remove('button_menu-page');
  cardsContainer.remove();
};
export const deleteResultLayout = () => {
  const cardsContainer = document.querySelector('.result-layout');
  cardsContainer.remove();
};

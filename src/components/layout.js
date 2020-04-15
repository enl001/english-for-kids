import { fillWordCards } from '@components/fillWordCards';
import { cardsContainerHandler, cardsMouseLeaveHandler } from '@components/cardsHandlers';

export const createCategoryLayout = (cardSet) => {
  (async () => {
    const entry = document.getElementById('card-layout-entry');
    const cardsContainer = document.createElement('DIV');
    const title = document.getElementById('title');
    title.textContent = cardSet[0].category;
    cardsContainer.classList.add('cards-layout');
    entry.appendChild(cardsContainer);
    await fillWordCards(cardSet, cardsContainer);
    cardsContainerHandler(cardsContainer, cardSet);
    cardsMouseLeaveHandler(cardsContainer);
  })();
};

export const deleteCategoryLayout = () => {
  const cardsContainer = document.querySelector('.cards-layout');
  cardsContainer.remove();
};

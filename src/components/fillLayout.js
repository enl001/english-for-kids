/* eslint-disable import/prefer-default-export */
import { sourceType, getPath } from '@utils/path';
import { appMode, appPage } from '@components/appPagesModes';

export const fillWordCards = async (cardsSet, container) => {
  const result = await fetch('assets/templates/wordCard.html');
  const textTemplate = await result.text();
  const cardTemplate = new DOMParser().parseFromString(textTemplate, 'text/html')
    .querySelector('template');

  cardsSet.forEach((card, i) => {
    cardTemplate.content.getElementById('category-en')
      .textContent = card.category.toUpperCase();
    cardTemplate.content.getElementById('word-en')
      .textContent = card.word.toUpperCase();
    cardTemplate.content.getElementById('category-ru')
      .textContent = card.categoryTranslation.toUpperCase();
    cardTemplate.content.getElementById('word-ru')
      .textContent = card.translation.toUpperCase();
    const imgPath = getPath(sourceType.image, card.image);
    cardTemplate.content.getElementById('img-back')
      .setAttribute('src', imgPath);
    cardTemplate.content.getElementById('img-front')
      .setAttribute('src', imgPath);
    const cardElement = cardTemplate.content.querySelector('.card');
    cardElement.setAttribute('id', i);
    if (window.myApplicationMode === appMode.game) {
      cardElement.classList.add('play');
    }
    container.appendChild(cardTemplate.content.cloneNode(true));
  });
};

export const fillMenuCards = async (cardsSet, container) => {
  const result = await fetch('assets/templates/menuCard.html');
  const textTemplate = await result.text();
  const cardTemplate = new DOMParser().parseFromString(textTemplate, 'text/html')
    .querySelector('template');

  cardsSet.forEach((card, i) => {
    cardTemplate.content.getElementById('category-en')
      .textContent = card.category.toUpperCase();
    cardTemplate.content.getElementById('category-ru')
      .textContent = card.categoryTranslation.toUpperCase();
    const imgPath = getPath(sourceType.image, card.image);
    cardTemplate.content.getElementById('img-back')
      .setAttribute('src', imgPath);
    const cardElement = cardTemplate.content.querySelector('.card');
    cardElement.setAttribute('id', i);
    if (window.myApplicationMode === appMode.game) {
      cardElement.classList.add('play');
    }
    container.appendChild(cardTemplate.content.cloneNode(true));
  });
};

export const fillResultCard = async (container, gameResult) => {
  const result = await fetch('assets/templates/resultCard.html');
  const textTemplate = await result.text();
  const cardTemplate = new DOMParser().parseFromString(textTemplate, 'text/html')
    .querySelector('template');

  cardTemplate.content.getElementById('category-en')
    .textContent = gameResult.category.toUpperCase();
  cardTemplate.content.getElementById('category-ru')
    .textContent = gameResult.category.toUpperCase();

  let imgPath;
  const cardElement = cardTemplate.content.querySelector('.card');

  if (gameResult.errorsCount === 0) {
    imgPath = getPath(sourceType.image, 'success.png');
    cardTemplate.content.getElementById('word-ru')
      .textContent = 'WIN!';
  } else {
    imgPath = getPath(sourceType.image, 'failure.png');
    cardElement.classList.add('failure');
    cardTemplate.content.getElementById('word-ru')
      .textContent = `ERRORS: ${gameResult.errorsCount}`;
    cardTemplate.content.getElementById('word-en')
      .textContent = `ERRORS: ${gameResult.errorsCount}`;
  }
  cardTemplate.content.getElementById('img-front')
    .setAttribute('src', imgPath);

  container.appendChild(cardTemplate.content.cloneNode(true));
};

export const fillSideMenu = async (itemsContainer, itemsSet) => {
  const result = await fetch('assets/templates/menuItem.html');
  const textTemplate = await result.text();
  const itemTemplate = new DOMParser().parseFromString(textTemplate, 'text/html')
    .querySelector('template');

  itemTemplate.content.getElementById('item-name')
    .textContent = 'MENU';
  let imgPath = getPath(sourceType.image, 'owl_train.png');
  itemTemplate.content.getElementById('item-image')
    .setAttribute('src', imgPath);
  let itemElement = itemTemplate.content.querySelector('.item');
  itemElement.setAttribute('id', 'menu');
  itemsContainer.appendChild(itemTemplate.content.cloneNode(true));

  itemsSet.forEach((item, i) => {
    itemTemplate.content.getElementById('item-name')
      .textContent = item.category.toUpperCase();
    imgPath = getPath(sourceType.image, item.image);
    itemTemplate.content.getElementById('item-image')
      .setAttribute('src', imgPath);
    itemElement = itemTemplate.content.querySelector('.item');
    itemElement.setAttribute('id', i);
    itemsContainer.appendChild(itemTemplate.content.cloneNode(true));
  });
  itemsContainer.querySelector('.item__name').classList.add('item__name_selected');
};

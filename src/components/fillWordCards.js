/* eslint-disable import/prefer-default-export */
import { sourceType, getPath } from '@utils/path';


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
    cardTemplate.content.querySelector('.card')
      .setAttribute('id', i);
    container.appendChild(cardTemplate.content.cloneNode(true));
  });
};

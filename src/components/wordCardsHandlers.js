import { sourceType, getPath } from '@utils/path';

const findCard = (element) => {
  let a = element;
  while (a) {
    if (a.classList.contains('card')) return a;
    a = a.parentNode;
    if (a.tagName === 'MAIN') return null;
    if (a.tagName === 'HTML') return null;
  }
  return null;
};

const cardUnflip = (card) => {
  if (!card.classList.contains('card_active')) {
    if (card.classList.contains('card_flip')) {
      card.classList.add('card_unflip');
      setTimeout(() => {
        card.classList.remove('card_flip', 'card_unflip');
      }, 500);
    }
  }
};
//-------
// need refactoring
//------------
export const cardsContainerHandler = (cardsContainer, cardSet) => {
  cardsContainer.addEventListener('click', (e) => {
  // e.stopPropagation();
    const card = findCard(e.target);
    if (card) {
      const canFlip = !card.classList.contains('card_active');
      if (e.target.classList.contains('rotate-image')) {
        if (card.classList.contains('card_flip') && canFlip) {
          card.classList.add('card_unflip');
          setTimeout(() => {
            card.classList.remove('card_flip', 'card_unflip');
          }, 500);
        } else {
          card.classList.add('card_flip', 'card_active');
          setTimeout(() => {
            card.classList.remove('card_active');
          }, 300);
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
};

export const cardsMouseLeaveHandler = (cardsContainer) => {
  const cards = cardsContainer.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('mouseleave', () => {
      cardUnflip(card);
    });
  });
};

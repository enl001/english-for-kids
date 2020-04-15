import { sourceType, getPath } from '@utils/path';
import { playSound } from '@utils/utils';
import { appMode, appPage } from '@components/appPagesModes';

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

const cardFlipUnflip = (card) => {
  const canFlip = !card.classList.contains('card_active');
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
};

const playCardSound = (card, cardSet) => {
  const id = card.getAttribute('id');
  if (id) {
    playSound(getPath(sourceType.sound, cardSet[id].pronunciation));
  }
};


//-------
// base game logic
//------------
export const cardsContainerHandler = (cardsContainer, cardSet) => {
  cardsContainer.addEventListener('click', (e) => {
  // e.stopPropagation();
    const card = findCard(e.target);
    if (!card) return;

    const cardId = parseInt(card.getAttribute('id'), 10);

    switch (window.myApplicationMode) {
      case appMode.train:
        if (e.target.classList.contains('rotate-image')) {
          cardFlipUnflip(card);
        } else {
          playCardSound(card, cardSet);
        }
        break;
      case appMode.game:
        // console.log(appMode.game);
        if (card.classList.contains('inactive')) return;
        if (window.gameCardSequence.length > 0) {
          // right card
          if (window.gameCardSequence[window.gameCardSequence.length - 1] === cardId) {
            window.gameCardSequence.pop();
            playSound(getPath(sourceType.sound, 'correct.mp3'));
            card.classList.add('inactive');
            if (window.gameCardSequence.length <= 0) {
              console.log('game end');
              console.log(`errors: ${window.gameResultErrors}`);
            } else {
              setTimeout(() => {
                const id = window.gameCardSequence[window.gameCardSequence.length - 1];
                playSound(getPath(sourceType.sound, cardSet[id].pronunciation));
              }, 1500);
            }
            // wrong card
          } else {
            playSound(getPath(sourceType.sound, 'error.mp3'));
            card.classList.add('inactive_wrong');
            window.gameResultErrors += 1;
            setTimeout(() => {
              card.classList.remove('inactive_wrong');
            }, 500);
          }
        } else {
          console.log('Need to start the game!');
        }

        break;
      default:
        console.log('error');
        break;
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

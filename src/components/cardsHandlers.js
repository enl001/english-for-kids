import { sourceType, getPath } from '@utils/path';
import { playSound, findElement } from '@utils/utils';
import { appMode, appPage } from '@components/appPagesModes';

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
const addStar = (isCorrect) => {
  const starPanel = document.getElementById('star-panel');
  const star = document.createElement('DIV');
  star.classList.add('star');
  if (isCorrect) {
    star.classList.add('star_win');
  }
  starPanel.appendChild(star);
};

const gameRoutine = (e, card, cardSet) => {
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
          addStar(true);
          card.classList.add('inactive');
          if (window.gameCardSequence.length <= 0) {
            console.log('game end');
            console.log(`errors: ${window.gameResultErrors}`);
            console.log(window.gameCardSequence);
            const gameResult = {
              category: window.currentCardSet[0].category,
              result: (window.gameResultErrors !== 0) ? 'failure' : 'success',
              errorsCount: window.gameResultErrors,

            };
            document.dispatchEvent(new CustomEvent('gameEnd', { detail: { gameResult } }));
          } else {
            setTimeout(() => {
              const id = window.gameCardSequence[window.gameCardSequence.length - 1];
              if (!cardSet[id]) return;
              playSound(getPath(sourceType.sound, cardSet[id].pronunciation));
            }, 1000);
          }
          // wrong card
        } else {
          playSound(getPath(sourceType.sound, 'error.mp3'));
          addStar(false);
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
};

const menuRoutine = (card, cardSet) => {
  const id = parseInt(card.getAttribute('id'), 10);
  playSound(getPath(sourceType.sound, cardSet[id].pronunciation));

  document.dispatchEvent(
    new CustomEvent('createCardsLayout', { detail: { category: cardSet[id].category } }),
  );
};


//-------
// base game logic
//------------
export const cardsContainerHandler = (cardsContainer) => {
  cardsContainer.addEventListener('click', (e) => {
  // e.stopPropagation();
    const cardSet = window.currentCardSet;
    const card = findElement(e.target, 'card');
    if (!card) return;

    switch (window.myApplicationPage) {
      case appPage.categoryPage:
        gameRoutine(e, card, cardSet);
        break;
      case appPage.menuPage:
        menuRoutine(card, cardSet);
        break;
      default:
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

import { appMode, appPage } from '@components/appPagesModes';
import { getRandomIndexes, playSound } from '@utils/utils';
import { sourceType, getPath } from '@utils/path';

export const playTrainSwitchHandler = () => {
  const playTrain = document.getElementById('togglePlay');
  // let isPlay = false;
  let isPlay = (window.myApplicationMode === appMode.game);
  playTrain.addEventListener('click', () => {
    isPlay = !isPlay;
    playTrain.classList.toggle('toggle_active');
    window.myApplicationMode = (isPlay) ? appMode.game : appMode.train;
    const cards = document.querySelectorAll('.card');
    const startResetGame = document.getElementById('start-reset-game');

    if (!cards) { console.log('Not a card!!!'); return; }
    switch (window.myApplicationPage) {
      case (appPage.categoryPage):
        console.log('category');
        cards.forEach((card) => {
          if (isPlay) {
            card.classList.add('play');
            startResetGame.classList.remove('button_train-mode');
          } else {
            card.classList.remove('play');
            card.classList.remove('inactive');
            startResetGame.classList.add('button_train-mode');
            setTimeout(() => {
              startResetGame.classList.remove('repeat');
            }, 500);
          }
        });
        break;
      case (appPage.menuPage):
        console.log('menu');
        cards.forEach((card) => {
          if (isPlay) {
            card.classList.add('play');
            startResetGame.classList.remove('button_train-mode');
          } else {
            card.classList.remove('play');
            startResetGame.classList.add('button_train-mode');
          }
        });
        break;

      default:
        console.log('default');
        break;
    }
  });
};

export const playCurrentCardSound = (cardSet) => {
  if (window.gameCardSequence.length === 0) return;
  const id = window.gameCardSequence[window.gameCardSequence.length - 1];
  setTimeout(() => {
    playSound(getPath(sourceType.sound, cardSet[id].pronunciation));
  }, 1000);
};

export const startResetGameHandler = () => {
  const startResetGame = document.getElementById('start-reset-game');
  startResetGame.addEventListener('click', () => {
    console.log(window.myApplicationMode);
    if (window.myApplicationMode !== appMode.game) return;
    const cardSet = window.currentCardSet;
    if (!startResetGame.classList.contains('repeat')) {
      startResetGame.classList.add('repeat');
      document.dispatchEvent(new CustomEvent('gameStart'));
    } else {
      console.log(window.gameCardSequence);
      playCurrentCardSound(cardSet);
      console.log('play again');
    }
  });
};

export const menuButtonHandler = () => {
  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', () => {
    console.log('menuButton');
  });
};

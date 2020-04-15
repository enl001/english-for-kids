import { appMode, appPage } from '@components/appPagesModes';
import { getRandomIndexes, playSound } from '@utils/utils';
import { sourceType, getPath } from '@utils/path';

export const playTrainSwitchHandler = () => {
  const playTrain = document.getElementById('togglePlay');
  let isPlay = false;

  playTrain.addEventListener('click', () => {
    isPlay = !isPlay;
    playTrain.classList.toggle('toggle_active');

    window.myApplicationMode = (isPlay) ? appMode.game : appMode.train;

    if (window.myApplicationPage === appPage.categoryPage) {
      const cards = document.querySelectorAll('.card');
      const startResetGame = document.getElementById('start-reset-game');
      if (cards) {
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
      }
    }
  });
};

const playCurrentCardSound = (cardSet) => {
  if (window.gameCardSequence.length === 0) return;
  const id = window.gameCardSequence[window.gameCardSequence.length - 1];
  setTimeout(() => {
    playSound(getPath(sourceType.sound, cardSet[id].pronunciation));
  }, 1000);
};

export const startResetGameHandler = (cardSet) => {
  const startResetGame = document.getElementById('start-reset-game');

  startResetGame.addEventListener('click', () => {
    if (window.myApplicationMode !== appMode.game) return;
    if (!startResetGame.classList.contains('repeat')) {
      startResetGame.classList.add('repeat');
      console.log('game started!');
      window.gameCardSequence = getRandomIndexes(cardSet.length);
      window.gameResultErrors = 0; // reset errors
      playCurrentCardSound(cardSet);
      console.log(window.gameCardSequence);
    } else {
      playCurrentCardSound(cardSet);
      console.log('play again');
    }
  });
};

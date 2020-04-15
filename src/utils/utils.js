/* eslint-disable no-plusplus */

// create array of given length with random indexes [0..length-1]
export const getRandomIndexes = (arrLength) => {
  const arr = Array.from({ length: arrLength }, (v, i) => i);
  let tmp; let current; let
    top = arrLength;
  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = arr[current];
      arr[current] = arr[top];
      arr[top] = tmp;
    }
  }
  return arr;
};

export const playSound = (soundPath) => {
  const audio = new Audio(soundPath);
  audio.play();
};

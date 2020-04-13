/* eslint-disable no-plusplus */
import numbersSet from './sets/numbers';

const maxNumOfCards = 6;

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
export default {
  _sets: {
    numbers: numbersSet,
  },
  get categories() {
    return Object.keys(this._sets);
  },
  getCardSetByCategory(category) {
    if (Object.prototype.hasOwnProperty.call(this._sets, category)) {
      return this.getRandomCards(this._sets[category], maxNumOfCards);
    }
    throw new TypeError('Wrong category');
  },
  getRandomCards(set, n) {
    const arrLength = set.length - 1; //  first element in a set is a category card
    const length = (arrLength > n) ? n : arrLength;
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
    const result = [];
    arr.slice(0, length).forEach((i) => {
      result.push(set[i + 1]); //  first element in a set is a category card
    });
    return result;
  },


};

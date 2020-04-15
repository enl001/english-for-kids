/* eslint-disable no-plusplus */
import { getRandomIndexes } from '@utils/utils';
import numbersSet from './sets/numbers';

const maxNumOfCards = 4;

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
    const arr = getRandomIndexes(arrLength);
    const result = [];
    arr.slice(0, length).forEach((i) => {
      result.push(set[i + 1]); //  first element in a set is a category card
    });
    return result;
  },


};

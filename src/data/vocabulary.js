/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-plusplus */
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
import { getRandomIndexes } from '@utils/utils';
import numbersSet from './sets/numbers';
import vegetablesSet from './sets/vegetables';
import colorsSet from './sets/colors';
import animalsSet from './sets/animals';
import birdsSet from './sets/birds';
import fruitsSet from './sets/fruits';
import berriesSet from './sets/berries';
import fastfoodSet from './sets/fastfood';
import defaultSet from './sets/default';

const maxNumOfCards = 10;

export default {
  _sets: {
    numbers: numbersSet,
    animals: animalsSet,
    birds: birdsSet,
    fruits: fruitsSet,
    vegetables: vegetablesSet,
    berries: berriesSet,
    fastfood: fastfoodSet,
    colors: colorsSet,
    default: defaultSet,
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
  getCategoriesCards() {
    const categoriesCards = [];
    for (const set in this._sets) {
      categoriesCards.push(this._sets[set][0]);
    }
    return categoriesCards;
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

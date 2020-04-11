import numbersSet from './sets/numbers';

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
export default {
  _sets: {
    numbers: numbersSet,
  },
  get categories() {
    return Object.keys(this._sets);
  },
  getCardSetByCategory(category) {
    return (Object.prototype.hasOwnProperty.call(this._sets, category))
      ? this._sets[category].slice(1) // first element is a category card
      : 'Wrong category';
  },

};

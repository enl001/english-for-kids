export default class Card {
  constructor(
    category = 'category',
    word = 'word',
    translation = 'translation',
    images = ['default.png'],
    pronunciations = ['default-1.mp3', 'default-2.mp3'],
  ) {
    this.category = category;
    this.word = word;
    this.translation = translation;
    this.images = images;
    this.pronunciations = pronunciations;
  }

  get pronunciation() {
    return this.constructor.randomItem(this.pronunciations);
  }

  get image() {
    return this.constructor.randomItem(this.images);
  }

  static randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

import Card from '@models/card';
import './sass/styles.scss';
import vocabulary from '@data/vocabulary';
import { sourceType, getPath } from '@utils/path';

// https://www.youtube.com/watch?v=eSaF8NXeNsA&vl=en-GB

const { categories } = vocabulary;
console.log(categories);
const set = (vocabulary.getCardSetByCategory(categories[0]));
document.addEventListener('click', () => {
  const soundPath = getPath(sourceType.sound, set[1].pronunciation);
  const audio = new Audio(soundPath);
  audio.play();
});

const path = require('path');

export const sourceType = {
  sound: 'sound',
  image: 'image',
};

export const getPath = (type, file = '') => {
  switch (type) {
    case sourceType.sound:
      return path.join(__dirname, 'assets', 'sounds', file);
    case sourceType.image:
      return path.join(__dirname, 'assets', 'images', file);
    default:
      return path.resolve(__dirname, '');
  }
};

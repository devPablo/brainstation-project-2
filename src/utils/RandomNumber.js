export const generateRandomNumber = (min, max) => {
  Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

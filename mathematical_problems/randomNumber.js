const getRandomBelow = function (limit) {
  return Math.floor(Math.random()*limit);
};

const main = function (limit) {
  console.log(getRandomBelow(limit));
};

main();
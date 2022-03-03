function convertToFahrenheit(reading) {
  return (reading * 9 / 5) + 32;
};

function convertToCentigrade(reading) {
  return ((reading - 32 ) * 5 )/ 9;
};

function main() {
  console.log(convertToFahrenheit(35));
  console.log(convertToCentigrade(92));
};

main();
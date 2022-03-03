function array1(operation, argument) {
  if (operation == "length") {
    return 5;
  };
  if (operation == "get") {
    switch (argument) {
      case 0:
        return 3;
      case 1:
        return 7;
      case 2:
        return 10;
      case 3:
        return 5;
      case 4:
        return 2;
      default:
        break;
    };
  };
};

function array(operation, argument) {
  if (operation == "length") {
    return 5;
  };
  if (operation == "get") {
    switch (argument) {
      case 0:
        return 30;
      case 1:
        return 70;
      case 2:
        return 150;
      case 3:
        return 50;
      case 4:
        return 22;
      default:
        break;
    };
  };
};

function convertToChar(value) {
  let asciiBar = "";

  for (let charCount = 0; charCount < value; charCount++) {
    asciiBar = asciiBar + "*";
  };

  return asciiBar;
};

function convertValue(actualValue,convertUnit) {
  return Math.ceil(actualValue / convertUnit);
};

function changeToBars(unitValue) {
  let displayContent = "\nConverted to bars with unit size " + unitValue + "\n\n";
  for (let arrayIndex = 0; arrayIndex < array("length"); arrayIndex++) {
    displayContent += convertToChar(convertValue(array("get", arrayIndex), unitValue)) + "\n";
  };

  return displayContent;
};

function main() {
  const unitValue = 10;
  console.log(changeToBars(unitValue));
};

main();
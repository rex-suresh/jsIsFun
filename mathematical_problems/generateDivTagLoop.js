function generateDivs(divCount) {
  let divBlock = "";
  let space = "";

  for (let count = 1; count <= divCount; count++) {
    divBlock += space + "<div>" + "\n";
    space = space + "  ";
  };

  for (let count = 1; count <= divCount; count++) {
    space = space + "\b\b";
    divBlock += space + "</div>" + "\n";
  };

  return divBlock;
};

function main() {
  console.log(generateDivs(3));
};

main();
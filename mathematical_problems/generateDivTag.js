function generateSpaces(indentlevel, totalCount) {
  let indentCount = totalCount - indentlevel;
  let space = "";
  for (let count = 0; count < indentCount; count++) {
    space = space + "  ";
  }
  return space;
}

function generateDivTags2(divCount,nestingCount) {
  if (divCount < 1) {
    return "";
  }
  
  let space = generateSpaces(divCount,nestingCount);

  let divBlock = generateDivTags2(divCount - 1,nestingCount);
  divBlock = space + "<div>" + "\n" + divBlock + "\n" + space + "</div>";

  return divBlock;
};


// function generateDivTags(divCount, space) {
//   if (divCount < 1) {
//     return "";
//   }
  
//   let divBlock = generateDivTags(divCount - 1, space + "  ");
//   divBlock = space + "<div>" + "\n" + divBlock + "\n" + space + "</div>";
//   return divBlock;
// };

function generateDivs(divCount) {
  // console.log(generateDivTags(divCount,""));
  console.log(generateDivTags2(divCount,divCount));
};

function main() {
  generateDivs(3);
};

main();

// console.log("--"+generateSpaces(2)+"--");
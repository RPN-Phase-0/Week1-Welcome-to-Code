function xo(str) {
  let countX = 0;
  let countY = 0;

  for (let char of str) {
    if (char == "x") {
      countX++;
    } else if (char == "o") {
      countY++;
    }
  }

  return countX === countY;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true

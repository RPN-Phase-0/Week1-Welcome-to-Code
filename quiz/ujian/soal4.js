function xo(str) {
  // you can only write your code here!
  for (let i = 0; i <= str.length; i++) {
    if (str[i].includes("x") >= str[i].includes("o")) {
      return true;
    } else {
      return false;
    }
  }
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true

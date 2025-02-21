//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  let charO = 0
  let charX = 0
  for (let i = 0; i <= str.length - 1; i++) {
    if( str[i] === "o"){
      charO++
    } else if (str[i] === "x"){
      charX++
    }
  }
  return charO === charX
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true

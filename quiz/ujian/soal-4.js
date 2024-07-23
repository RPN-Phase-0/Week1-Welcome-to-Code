//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

/**
 * ! Logic
 * * Membuat variabel countX & countO dengan nilai default 0
 * * melakukan looping, lalu mengecek str[i] jika menemukan x / o maka akan diupdate counter
 * * setelah itu membandingkan countX === countO
 * ! Selesai
 */

function xo(str) {
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") countX++;
    else if (str[i] === "o") countO++;
  }

  return countO === countX;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true

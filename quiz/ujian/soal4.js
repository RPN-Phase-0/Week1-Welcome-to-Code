//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  let countX = 0;
  let countO = 0;

  for (let char of str) {
    if (char.toLowerCase() === 'x') {
      countX++;
    } else if (char.toLowerCase() === 'o') {
      countO++;
    }
  }

  return countX === countO;
}

// Contoh penggunaan:
console.log(xo('xoxo')); // true
console.log(xo('xxoo')); // true
console.log(xo('xxxooo')); // true
console.log(xo('xxo')); // false
console.log(xo('xoxxoo')); // falsecle

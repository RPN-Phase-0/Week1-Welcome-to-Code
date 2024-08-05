// Soal 4

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let varX = 0;
    let varO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            varX += 1;
        } else {
            varO += 1;
        }
    }

    if (varX == varO) {
        return true;
    } else {
        return false;
    }
}

console.log("============================ Jawaban Soal 4 ============================");

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

console.log("========================================================================\n");

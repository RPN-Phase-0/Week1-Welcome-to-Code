
//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let Xs = 0;
    let Os = 0;
    for (let index = 0; index < str.length; index++) {
        if(str[index] == "x"){
            Xs++;
        }
        if(str[index] == "o"){
            Os++;
        }
    }
    return Xs == Os;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
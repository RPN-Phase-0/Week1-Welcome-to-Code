//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let strToArr = str.split('');
    let jmlX = 0;
    let jmlO = 0;

    for(char of str) {
        if(char === 'x') {
            jmlX++;
        }else if(char === 'o'){
            jmlO++;
        };
    };
    if(jmlX === jmlO){
        str = true;
    } else {
        str = false;
    };
    return str;

};

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
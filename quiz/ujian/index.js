function bandingkanAngka(angka1, angka2){
    if (angka1 < angka2){
        return true
    }else if (angka1 == angka2){
        return -1 
    }else{
        return false
    }
}
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false}

//soal2

function balikKata(kata) {
    let balik = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        balik += kata[i];
    }
    return balik;
}
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

//soal3

function konversiMenit(menit) {
    // you can only write your code here!
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60;
    return `${jam}:${sisaMenit.toString().padStart(2, '0')}`; 
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00


//soal 4
function xo(str) {
    // you can only write your code here!
    let jmlX = 0;
    let jmlO = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === 'x'){
            jmlX++;
        }else if(str[i] === 'o'){
            jmlO++;
        }
    }
    return jmlX === jmlO; 
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

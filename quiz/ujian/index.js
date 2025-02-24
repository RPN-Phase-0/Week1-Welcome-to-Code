
/**
 * SOAL 1
 */


function bandingkanAngka(angka1, angka2) {
  if (angka2 > angka1) {
    return true;
  }else if (angka2 < angka1) {
    return false;
  }else{
    return -1;
  };
};
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false





/**
 * SOAL 2
 */

function balikKata(kata) {
  // Cara 1
  return kata.split('').reverse('').join('');

  //cara 2 (loop)
  let hasil = '';
  for(let i = kata.length -1; i >= 0; i--) {
    hasil += kata[i];
  };
  return hasil;
};

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS



/**
 * SOAL 3
 */

function konversiMenit(menit) {
  let hour = Math.floor(menit / 60);
  let remainMinutes = menit % 60;

  if(remainMinutes < 5){
    remainMinutes = '0' + remainMinutes;
  };

  return hour + ':' + remainMinutes;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00




/**
 * SOAL 4
 */

function xo(str) {
  let x = 0;
  let o = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === 'x') {
      x++;
    }else if(str[i].toLowerCase() === 'o'){
      o++;
    };
  };

  return x === o;
};

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
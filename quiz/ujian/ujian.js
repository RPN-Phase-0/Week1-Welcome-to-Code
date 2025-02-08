
//soal no 1
function bandingkanAngka(angka1, angka2) {
  if (angka2 > angka1) {
    return true
  } else if ( angka1 === angka2 ) {
    return -1
  } else {
    return false
  }
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false


//soal no 2

function balikKata(kata) {
  let dibalik = kata.split('').reverse().join('');
  return dibalik
}

console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super'));


//soal no 3

function konversiMenit(menit) {
  let hasilJam =  Math.floor(menit / 60);
  let hasilMenit = Math.floor(menit % 60)

  const menitString = hasilMenit.toString().padStart(2, '0')
  return `${hasilJam}:${menitString}`
}

console.log(konversiMenit(63));
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120));

// soal no 4

function xo(str) {
  let jumlahX = 0
  let jumlahO = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      jumlahX++;
    }
    else if (str[i] === 'o') {
      jumlahO++
    }
  }
  return jumlahO === jumlahX
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo'))
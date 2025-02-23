// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  // you can only write your code here!
  let jam = Math.floor(menit / 60);
  let sisaMenit = Math.floor(menit % 60);

  let hasilMenit = sisaMenit <= 9 ? `0${sisaMenit}` : sisaMenit;

  return `${jam}:${hasilMenit}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

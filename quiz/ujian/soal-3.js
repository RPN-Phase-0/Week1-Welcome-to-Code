// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

/**
 * ! Logic
 * * Membuat variabel jam dengan method Math.floor untuk menghitung menit
 * * Membuat variabel sisaMenit dengan Meni % 60
 * * Melakukan pengecekan sisaMenit, jika ada 1 digit maka di tambah 0 di depan nya
 * * Melakukan return jam:sisaMenit
 * ! Selesai
 */

function konversiMenit(menit) {
  let jam = Math.floor(menit / 60);
  let sisaMenit = menit % 60;

  if (sisaMenit < 10) sisaMenit = "0" + sisaMenit;

  return jam + ":" + sisaMenit;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let sentence = 'wow JavaScript is so cool';
let firstWord = sentence[0] + sentence[1] + sentence[2];
let secondWord = sentence[4] + sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9] + sentence[10] + sentence[11] + sentence[12] + sentence[13]
let thirdWord = sentence[15] + sentence[16]
let fourthWord = sentence[18] + sentence[19]
let fifthWord = sentence[21] + sentence[22] + sentence[23] + sentence[24]

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
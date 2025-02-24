// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);
//lanjutkan dengan struktur log diatas

let SecondWord = word[4];
for (i = 5; i <= 13; i++) {
    SecondWord += word[i]
}
console.log('Second word: ' + SecondWord);

let ThirdWord = word[15] + word[16];
console.log('Third word: ' + ThirdWord);

let FourthWord = word[18] + word[19];
console.log('Fourth word: ' + FourthWord);

let FifthWord = word[21];
for (i = 22; i <= 24; i++) {
    FifthWord += word[i]
}
console.log('Fifth word: ' + FifthWord);


// Soal 2
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];
let seWord = "";
let tWord = word[15]+word[16];
let fWord = word[18]+word[19];
let vWord = "";
for(let p = 21;p<=24;p++){
    vWord += word[p];
}
for(let i = 4; i<=13;i++){
    seWord += word[i];
}


console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: '+ seWord);
console.log('Third Word: '+tWord);
console.log('Fourth Word: '+fWord);
console.log('Fifth Word: '+vWord);

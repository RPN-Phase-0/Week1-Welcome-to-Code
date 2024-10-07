//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here

word = word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh
console.log(word)

// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2] + word[3] + word[4] + word[5] + word[6] + word[7] + word[8]
+ word[9] + word[10] + word[11] + word[12] + word[13] + word[14] + word[15] + word[16] + word[17]
+ word[18] + word[19] + word[20] + word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);


// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 25);

console.log('First Word: ' + exampleFirstWord3);

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord1 = word4.substring(0, 3);
let exampleFirstWord2 = word4.substring(4, 14);
let exampleFirstWord3 = word4.substring(15, 17);
let exampleFirstWord4 = word4.substring(18, 20);
let exampleFirstWord5 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord1 + ', with length: ' + firstWordLength);
console.log(`Two Word: ${exampleFirstWord2} with length: ${exampleFirstWord2.length}
Tre Word: ${exampleFirstWord3} with length: ${exampleFirstWord3.length}
Four Word: ${exampleFirstWord4} with length: ${exampleFirstWord4.length}
Fifth Word: ${exampleFirstWord5} with length: ${exampleFirstWord5.length}`);

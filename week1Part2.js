//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let first = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
console.log(first + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);


console.log(' ');
// Soal 2. Index Accessing - 1 by 1
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

// Code
let firstWord = word[0] + word[1] + word[2];
let secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
let thirdWord = word[15] + word[16];
let forthWord = word[18] + word [19];
let fifthword = word[21] + word[22] + word[23] + word[24];

console.log(firstWord);
console.log(secondWord);
console.log(thirdWord);
console.log(forthWord);
console.log(fifthword);
console.log(firstWord + ' ' + secondWord + ' ' + thirdWord + ' ' + forthWord + ' ' + fifthword);


console.log(' ');
// Soal 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);

console.log('First Word: ' + exampleFirstWord3);

//code
let firstWord3 = word3.substring(0,3);
let secondWord3 = word3.substring(4,14);
let thirdWord3 = word3.substring(15,17);
let fourthWord3 = word3.substring(18,20);
let fifthword3 = word3.substring(21,25);

console.log(firstWord3);
console.log(secondWord3);
console.log(thirdWord3);
console.log(fourthWord3);
console.log(fifthword3);
console.log(firstWord3 + ' ' + secondWord3 + ' ' + thirdWord3 + ' ' + fourthWord3 + ' ' + fifthword3);


console.log(' ');
// Soal 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
//code
let firstWord4 = word4.substring(0,3);
let secondWord4 = word4.substring(4,14);
let thirdWord4 = word4.substring(15,17);
let fourthWord4 = word4.substring(18,20);
let fifthword4 = word4.substring(21,25);

firstWordLength = firstWord4.length;
let secondWordLength = secondWord4.length;
let thirdWordLength = thirdWord4.length;
let fourthWordLength = fourthWord4.length;
let fifthWordLength = fifthword4.length;

console.log('First Word: ' + firstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length' + fourthWordLength);
console.log('Fifth Word: ' +  fifthWordLength + ', with length' + fifthWordLength);
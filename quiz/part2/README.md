# Quiz Pemrograman Sebelum Masuk Looping | Part 2
## Soal 1
```js
//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

//code here
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

word += " "+second+" "+third+" "+fourth+" "+fifth+" "+sixth+" "+" "+seventh;
console.log(word);
```
## Soal 2. Index Accessing - 1 by 1
```js
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

//code here
let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];
let secondWord = word[4] + word[5] + word[6] +  word[7] +  word[8] +  word[9] +  word[10] +  word[11] +  word[12] +  word[13];
let thirdWord = word[15] + word[16];
let fourthWord = word[18] + word[19];
let fifthWord = word[21] + word[22] + word[23] + word[24]

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
```
## Soal 3. Breaking Sentence (Again) using Substring
```js
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

//code here
let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let secondWord3 = word3.substring(4, 14);
let thirdWord3 = word3.substring(15, 17);
let fourthWord3 = word3.substring(18, 20);
let fifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
```

## Soal 4. Breaking Sentence (yet Again) and Count Each Length
```js
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

//code here
let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;

let secondWord4 = word4.substring(4, 14);
let secondWordLength = secondWord4.length;

let thirdWord4 = word4.substring(15, 17);
let thirdWordLength = thirdWord4.length;

let fourthWord4 = word4.substring(18, 20);
let fourthWordLength = fourthWord4.length;

let fifthWord4 = word4.substring(21, 25);
let fifthWordLength = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);
```

tulis code sesuai dengan keterangan soalnya dan pola example yang ada

Selamat Mengerjakan 👨🏻‍🌾
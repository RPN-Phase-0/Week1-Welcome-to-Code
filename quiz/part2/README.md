# Quiz Pemrograman Sebelum Masuk Looping | Part 2
## Soal 1
```js
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
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(`${word}` + ' ' + `${second} `+ '' + `${third} `+ '' + `${fourth} `+ ' ' + `${fifth} `+ ' ' + `${sixth} `+ ' ' + `${seventh} `)
```
## Soal 2. Index Accessing - 1 by 1
```js
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata tersebut!

// let word = 'wow JavaScript is so cool';
// let exampleFirstWord = word[0] + word[1] + word[2];

// console.log('First Word: ' + exampleFirstWord);

let word = 'wow JavaScript is so cool';

let FirstWord = word[0] + word[1] + word[2];
let SecondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
let ThirdWord = word[15] + word[16];
let FourthWord = word[18] + word[19];
let FifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + FirstWord);
console.log('Second Word: ' + SecondWord);
console.log('Third Word: ' + ThirdWord);
console.log('Fourth Word: ' + FourthWord);
console.log('Fifth Word: ' + FifthWord);
```
## Soal 3. Breaking Sentence (Again) using Substring
```js
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);

console.log('First Word: ' + exampleFirstWord3);

// my assign start

let Allword = 'wow JavaScript is so cool';

let FirstWord = Allword.substring(0, 3);
let SecondWord = Allword.substring(4, 14);
let ThirdWord = Allword.substring(14, 17);
let FourthWord = Allword.substring(18, 21);
let FifthWord = Allword.substring(21, 26);

console.log('First Word: ' + FirstWord);
console.log('Second Word: ' + SecondWord);
console.log('Third Word: ' + ThirdWord);
console.log('Fourth Word: ' + FourthWord);
console.log('Fifth Word: ' + FifthWord);
```

## Soal 4. Breaking Sentence (yet Again) and Count Each Length
```js
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);

// my assign start
let Allword = 'wow JavaScript is so cool';

let FirstWord = Allword.substring(0, 3);
let firstWordLength = FirstWord.length;
console.log('First Word: ' + FirstWord ,' have length: ' + firstWordLength);

let SecondWord = Allword.substring(4, 14);
let SecondWordLength = SecondWord.length;
console.log('Second Word: ' + SecondWord ,' have length: ' + SecondWordLength);

let ThirdWord = Allword.substring(15, 17);
let ThirdWordLength = ThirdWord.length;
console.log('Third Word: ' + ThirdWord,' have length: ' + ThirdWordLength);

let FourthWord = Allword.substring(18, 20);
let FourthWordLength = FourthWord.length;
console.log('Fourth Word: ' + FourthWord,' have length: ' + FourthWordLength);

let FifthWord = Allword.substring(21, 26);
let FifthWordLength = FifthWord.length;
console.log('Fifth Word: ' + FifthWord,' have length: ' + FifthWordLength);
```

tulis code sesuai dengan keterangan soalnya dan pola example yang ada

Selamat Mengerjakan 👨🏻‍🌾
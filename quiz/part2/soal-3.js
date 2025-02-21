// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord = word3.substring(0, 3); // wow
let exampleSecondWord = word3.substring(4, 14); // Javascript
let exampleThirdWord = word3.substring(15, 17); // is
let exampleFourthWord = word3.substring(18, 20) // so
let exampleFifthWord = word3.substring(21, 25) // cool

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third Word: ' + exampleThirdWord);
console.log('Fourth Word: ' + exampleFourthWord);
console.log('Fifth Word: ' + exampleFifthWord); 
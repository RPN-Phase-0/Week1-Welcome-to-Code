// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord = word4.substring(0, 3);
let firstWordLength = exampleFirstWord.length;

let secondword = word4.substring(4, 14);
let secondWordLength = secondword.length;

let thirdword = word4.substring(15, 17);
let thirdwordLength = thirdword.length;

let fourthword = word4.substring(18, 20);
let fourthwordLength = fourthword.length;

let fifthword = word4.substring(21, 25);
let fifthwordLength = fifthword.length;


console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondword + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdword + ', with length: ' + thirdwordLength);
console.log('Fourth Word: ' + fourthword + ', with length: ' + fourthwordLength);
console.log('Fifth Word: ' + fifthword + ', with length: ' + fifthwordLength);
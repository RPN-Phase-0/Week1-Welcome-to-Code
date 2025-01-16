// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word.substring(0, 3);
let exampleSecondWord = word.substring(4, 14);
let exampleThirdWord = word.substring(15, 17);
let exampleFourthWord = word.substring(18, 20);
let exampleFifthWord = word.substring(21, 25);

let examplefirstWordLength = exampleFirstWord.length;
let exampleSecondWordLength = exampleSecondWord.length;
let exampleThirdWordLength = exampleThirdWord.length;
let exampleFourthWordLength = exampleFourthWord.length;
let exampleFifthWordLength = exampleFifthWord.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + examplefirstWordLength);
console.log('Second Word: ' + exampleSecondWord + ', with length: ' + exampleSecondWordLength);
console.log('Third Word: ' + exampleThirdWord + ', with length: ' + exampleThirdWordLength);
console.log('Fourth Word: ' + exampleFourthWord + ', with length: ' + exampleFourthWordLength);
console.log('Fifth Word: ' + exampleFifthWord + ', with length: ' + exampleFifthWordLength);
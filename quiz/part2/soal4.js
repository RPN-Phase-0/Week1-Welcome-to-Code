// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word.substring(0, 3);
let secondWord = word.substring(4, 14);
let thirdWord = word.substring(15, 17);
let fourthWord = word.substring(18, 20);
let fifthWord = word.substring(21, 25);

let firstWordLength = exampleFirstWord.length;
let secondWordLength = secondWord.length;
let thirdWordLength = thirdWord.length;
let fourthWordLength = fourthWord.length;
let fifthWordLength = fifthWord.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
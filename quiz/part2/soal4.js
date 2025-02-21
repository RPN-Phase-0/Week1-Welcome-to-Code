// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = word4.substring(4, 14).length;
let thirdWordLength = word4.substring(15, 17).length;
let fourthWordLength = word4.substring(18, 20).length;
let fifthWordLength = word4.substring(21, 25).length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + word4.substring(4, 14) + ', with length: ' + secondWordLength);
console.log('Third Word: ' + word4.substring(15, 17) + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + word4.substring(18, 20) + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + word4.substring(21, 25) + ', with length: ' + fifthWordLength);
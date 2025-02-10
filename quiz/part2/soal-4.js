// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';

let exampleFirstWord4 = word4.substring(0, 3); // wow
let exampleSecondWord4 = word4.substring(4, 14); // Javascript
let exampleThirdWord4 = word4.substring(15, 17); // is
let exampleFourthWord4 = word4.substring(18, 20) // so
let exampleFifthWord4 = word4.substring(21, 25) // cool

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + exampleThirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + exampleFourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word ' + exampleFifthWord4 + ', with length: ' + fifthWordLength);
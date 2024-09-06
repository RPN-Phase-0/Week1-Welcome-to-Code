
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let secondword4 = word4.substring(4, 14);
let thirdword4 =  word4.substring(15, 17);
let fourthword4 =  word4.substring(18,20);
let fifthword4 = word4.substring(21,25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = secondword4.length;
let thirdWordLength = thirdword4.length;
let fourthWordLength = fourthword4.length;
let fifthWordLength = fifthword4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondword4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdword4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthword4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthword4 + ', with length: ' + fifthWordLength);
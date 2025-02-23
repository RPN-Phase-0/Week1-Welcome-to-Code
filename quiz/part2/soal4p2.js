// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let second = word4.substring(4, 14);
let third = word4.substring(15, 17);
let four = word4.substring(18, 20);
let five = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondLength = second.length;
let thirdLength = third.length;
let fourLength = four.length;
let fiveLength = five.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + second + ', with length: ' + secondLength);
console.log('Third Word: ' + third + ', with length: ' + thirdLength);
console.log('Fourth Word: ' + four + ', with length: ' + fourLength);
console.log('Fifth Word: ' + five + ', with length: ' + fiveLength);

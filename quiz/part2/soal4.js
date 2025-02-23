// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let SecondWordLength = exampleSecondWord4.length;
let ThirdWordLength = exampleThirdWord4.length;
let FourthWordLength = exampleFourthWord4.length;
let FifthtWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('First Word: ' + exampleSecondWord4 + ', with length: ' + SecondWordLength);
console.log('First Word: ' + exampleThirdWord4 + ', with length: ' + ThirdWordLength);
console.log('First Word: ' + exampleFourthWord4 + ', with length: ' + FourthWordLength);
console.log('First Word: ' + exampleFifthWord4 + ', with length: ' + FifthtWordLength);
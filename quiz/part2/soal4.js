// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 25);

let firstWord4Length = exampleFirstWord4.length;
let secondWord4Length = exampleSecondWord4.length;
let thirdWord4Length = exampleThirdWord4.length;
let fourthWord4Length = exampleFourthWord4.length;
let fifthWord4Length = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWord4Length);
console.log('Second Word: ' + exampleSecondWord4 + ', with length: ' + secondWord4Length);
console.log('Third Word: ' + exampleThirdWord4 + ', with length: ' + thirdWord4Length);
console.log('Fourth Word: ' + exampleFourthWord4 + ', with length: ' + fourthWord4Length);
console.log('Fifth Word: ' + exampleFifthWord4 + ', with length: ' + fifthWord4Length);
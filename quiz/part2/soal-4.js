// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let SecondWord = word4.substring(4, 14)
let ThirdWord = word4.substring(15, 17)
let FourthWord = word4.substring(18, 20)
let FifthWord = word4.substring(21, 25)

let firstWordLength = exampleFirstWord4.length;
let SecondWordLength = SecondWord.length;
let ThirdWordLength = ThirdWord.length;
let FourthWordLength = FourthWord.length;
let FifthWordLength = FifthWord.length;


console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + SecondWord + ', with length: ' + SecondWordLength);
console.log('Third Word: ' + ThirdWord + ', with length: ' + ThirdWordLength);
console.log('Fourth Word: ' + FourthWord + ', with length: ' + FourthWordLength);
console.log('Fifth Word: ' + FifthWord + ', with length: ' + FifthWordLength);

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;


let secondWord4 = word4.substring(4,14);
let thirdWord4 = word4.substring(15,17);
let fourthWord4 = word4.substring(18,20);
let fifthWord4 = word4.substring(21,25);


let secondWordLenght = secondWord4.length;
let thirdWordLenght = thirdWord4.length;
let fourthWordLenght = fourthWord4.length;
let fifthWordLenght = fifthWord4.length;


console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLenght);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLenght);
console.log('fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLenght);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLenght);
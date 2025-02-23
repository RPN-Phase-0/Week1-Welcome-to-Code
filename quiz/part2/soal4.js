// Soal 4. Breaking Sentence (yet Again) and Count Each Length
//js
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let wo2 = word4.substring(4,14);
let wo3=word4.substring(15,17);
let wo4=word4.substring(18,20);
let wo5=word4.substring(21,25);
let wo2L=wo2.length;
let wo3L=wo3.length;
let wo4L=wo4.length;
let wo5L=wo5.length;

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + wo2 + ', with length: ' + wo2L);
console.log('Third Word: ' + wo3 + ', with length: ' + wo3L);
console.log('Fourth Word: ' + wo4 + ', with length: ' + wo4L);
console.log('Fifth Word: ' + wo5 + ', with length: ' + wo5L);
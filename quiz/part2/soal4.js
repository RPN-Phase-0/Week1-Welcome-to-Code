// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let sentence = 'wow JavaScript is so cool';
let firstWord = sentence.substring(0, 3);
let secondWord = sentence.substring(4, 14);
let thirdWord = sentence.substring(15, 17)
let fourthWord = sentence.substring(18, 20)
let fifthWord = sentence.substring(21, 25)

let firstWordLength = firstWord.length;
let secondWordlength = secondWord.length
let thirdWordLength = thirdWord.length
let fourthWordLength = fourthWord.length
let fifthWordLength = fifthWord.length

console.log('First Word: ' + firstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordlength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
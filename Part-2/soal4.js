// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let firstWord = word4.substring(0, 3);
let secondWord = word4.substring(4, 14);
let thirdWord = word4.substring(15, 17);
let fourthWord = word4.substring(18, 20);
let fifthWord = word4.substring(21, 26);

let firstWordLength = firstWord.length;
let secondWordLength = secondWord.length;
let thirdWordLength = thirdWord.length;
let fourthWordLength = fourthWord.length;
let fifthWordLength = fifthWord.length;

console.log(
  "First Word: " + firstWord + ", with length: " + firstWordLength + 
  "\nSecond Word: " + secondWord + ", with length: " + secondWordLength + 
  "\nThird Word: " + thirdWord + ", with length: " + thirdWordLength + 
  "\nFourth Word: " + fourthWord + ", with length: " + fourthWordLength + 
  "\nFifth Word: " + fifthWord + ", with length: " + fifthWordLength
);

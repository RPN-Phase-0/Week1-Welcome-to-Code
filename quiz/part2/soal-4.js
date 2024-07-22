// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
console.log(
  "First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength
);

let exampleSecondWord = word4.substring(4, 14);
let secondWordLength = exampleSecondWord.length;
console.log(
  "Second Word: " + exampleSecondWord + ", with length: " + secondWordLength
);

let exampleThirdWord = word4.substring(15, 17);
let thirdWordLength = exampleThirdWord.length;
console.log(
  "Third Word: " + exampleThirdWord + ", with length: " + thirdWordLength
);

let exampleFourthWord = word4.substring(18, 20);
let fourthWordLength = exampleFourthWord.length;
console.log(
  "Fourth Word: " + exampleFourthWord + ", with length: " + fourthWordLength
);

let exampleFifthWord = word4.substring(21, 25);
let fifthWordLength = exampleFifthWord.length;
console.log(
  "Fifth Word : " + exampleFifthWord + ", with length: " + fifthWordLength
);

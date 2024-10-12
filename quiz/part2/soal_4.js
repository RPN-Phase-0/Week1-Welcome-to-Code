// Substring + Length Methods

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log(
	'First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength
);

// Jawaban :

// Variable penampung Substring
const secondWord4 = word4.substring(4, 14);
const thirdWord4 = word4.substring(15, 17);
const fourthWord4 = word4.substring(18, 20);
const fifthWord4 = word4.substring(21, 25);

// Mengambil panjang kata
const secondWordLength = secondWord4.length;
const thirdWordLength = thirdWord4.length;
const fourthWordLength = fourthWord4.length;
const fifthWordLength = fifthWord4.length;

console.log(
	'Second Word: ' + secondWord4 + ', with length: ' + secondWordLength
);

console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);

console.log(
	'Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength
);

console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);

// Output:
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4

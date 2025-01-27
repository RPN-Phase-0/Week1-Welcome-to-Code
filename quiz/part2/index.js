/**
 * soal 1
 */

let word = 'JavaScript ';
let second = 'is ';
let third = 'awesome ';
let fourth = 'and ';
let fifth = 'I ';
let sixth = 'love ';
let seventh = 'it! ';

console.log(word + second + third + fourth + fifth + sixth + seventh)


/**
 * Soal 2. Index Accessing - 1 by 1
 */

// contoh
let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);

let secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];

console.log('Second Word: ' + secondWord);

let thirdWord = word[15] + word[16];

console.log('Third Word: ' + thirdWord);

let fourthWord = word[18] + word[19];

console.log('Fourth Word: ' + fourthWord);

let fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('Fifth Word: ' + fifthWord);



/**
 * SOAL 3
 */

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);

console.log('First Word: ' + exampleFirstWord3);

let secondWord = word3.substring(4, 14);
console.log('Second Word: ' + secondWord);

let thirdWord = word3.substring(15, 17)
console.log('Third Word: ' + thirdWord);

let fourthWord = word3.substring(18, 20);
console.log('Fourth Word: ' + fourthWord);

let fifthWord = word3.substring(21, 25);
console.log('Fifth Word: ' + fifthWord);




/**
 * SOAL 4
 */


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);


let secondWord = word4.substring(4, 14);
let secondWordLenght = secondWord.length;

console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLenght);


let thirdWord = word4.substring(15, 17);
let thirdWordLength = thirdWord.length;

console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);

let fourthWord = word4.substring(18, 20);
let fourthWordLength = fourthWord.length;

console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);

let fifthWord = word4. substring(21, 25);
let fifthWordLength = fifthWord.length;

console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
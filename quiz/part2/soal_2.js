// Index Accesin - 1 by 1

let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);

// memecah kalimat
const secondWord =
	word[4] +
	word[5] +
	word[6] +
	word[7] +
	word[8] +
	word[9] +
	word[10] +
	word[11] +
	word[12] +
	word[13];

const thirdWord = word[15] + word[16];

const fourthWord = word[18] + word[19];

const fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// Output: First Word: wow,
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

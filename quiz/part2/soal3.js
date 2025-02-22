let word3 = 'wow JavaScript is so cool';

const firstWord = word3.substring(0,3);
const secondWord = word3.substring(4, 14);
const thirdWord = word3.substring(15, 17);
const fourthWord = word3.substring(18, 20);
const fifthWord = word3.substring(21, 25);

const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;
const thirdWordLength = thirdWord.length;
const fourthWordLength = fourthWord.length;
const fifthWordLength = fifthWord.length;

console.log('First Word: ' + firstWord + ',with Length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ',with Length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ',with Length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord + ',with Length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ',with Length: ' + fifthWordLength);
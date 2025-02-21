let word4 = 'wow JavaScript is so cool';
let First = word4.substring(0, 3);
let Second = word4.substring(4, 14);
let Third = word4.substring(15, 17);
let Fourth = word4.substring(18, 20);
let Fifth = word4.substring(21, 25);

let word01 = First.length;
let word02 = Second.length;
let word03 = Third.length;
let word04 = Fourth.length;
let word05 = Fifth.length;

console.log(
    'First Word: ' + First + ', with length: ' + word01
);
console.log(
    'Second Word: ' + Second + ', with length: ' + word02
);
console.log(
    'Third Word: ' + Third + ', with length: ' + word03
);
console.log(
    'Fourth Word: ' + Fourth + ', with length: ' + word04
);
console.log(
    'Fifth Word: ' + Fifth + ', with length: ' + word05
);
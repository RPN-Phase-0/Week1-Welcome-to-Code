// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('[First Word]  : ' + exampleFirstWord4 + '        [With length] : ' + firstWordLength);
console.log('[Second Word] : ' + word4.substring(4, 15) + '[With length] : ' + word4.substring(4, 15).length);
console.log('[Third Word]  : ' + word4.substring(15, 18) + '        [With length] : ' + word4.substring(15, 18).length);
console.log('[Fourth Word] : ' + word4.substring(18, 21) + '        [With length] : ' + word4.substring(18, 21).length);
console.log('[Fifth Word]  : ' + word4.substring(21, 26) + '       [With length] : ' + word4.substring(21, 26).length);


//output
/*
[First Word]  : wow        [With length] : 3
[Second Word] : JavaScript [With length] : 11
[Third Word]  : is         [With length] : 3
[Fourth Word] : so         [With length] : 3
[Fifth Word]  : cool       [With length] : 4
*/

// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript not cool';
let exampleFirstWord3 = word3.substring(0, 3);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + word3.substring(4, 14));
console.log('Third Word: ' + word3.substring(15, 18));
console.log('Fourth Word: ' + word3.substring(19, 23));
console.log('Complete Word : ' + word3.substring(0, 23));

//## Soal 3. Angka Ganjil dan Genap

//js
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
const testCase = 100;
for(let i = 1;i<=testCase;i++){
    if(i%2===0) console.log(i + ' ADALAH GENAP');
    else if(i%2!=0) console.log(i + ' ADALAH GANJIL');
}
console.log('Looping selesai!');
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

console.log('LOOPING PERTAMA')

let i = 0;

for(let i = 0; i <= 5; i++) {
    console.log('LOOPING MAJU : ' + i)
}
console.log('\n')

console.log('LOOPING KEDUA')
let j = 5;

for(let j = 5; j >= 0; j--) {
    console.log('LOOPING MUNDUR : ' + j)
}